import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SignUp = () => {
  // Google
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  // email & password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  //update profile
  const [updateProfile, updating, uerror] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  let errorMessage;

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (guser || user) {
      navigate(from, { replace: true });
    }
  }, [user, guser, from, navigate]);

  if (loading || gloading || updating) {
    return <Loading></Loading>;
  }

  if (error || gerror || uerror) {
    errorMessage = (
      <p className=" text-red-500 text-sm">
        {error?.message || gerror?.message || uerror?.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    console.log(data);
    // console.log(data.email);
    const { email, password, name } = data;
    createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: data.name });
    // await updateProfile({ displayName: name });
    console.log("update done");
    // console.log(user.displayName);
    reset();
  };
  return (
    <div className="flex justify-center items-center mx-auto h-screen text-center container">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="font-semibold text-3xl text-secondary text-center my-8">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name  */}
            <label className="label">
              <span className="label-text font-medium my-1">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered w-full "
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              <span className="label-text-alt">
                {" "}
                {errors.name?.type === "required" && (
                  <p className=" text-red-500">{errors.name.message}</p>
                )}
              </span>
            </label>

            {/* email  */}
            <label className="label">
              <span className="label-text font-medium my-1">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: "Provide a valid Email", // JS only: <p>error message</p> TS only support string
                },
              })}
            />
            <label className="label">
              <span className="label-text-alt">
                {" "}
                {errors.email?.type === "required" && (
                  <p className=" text-red-500">{errors.email.message}</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className=" text-red-500">{errors.email.message}</p>
                )}
              </span>
            </label>

            {/* Password */}
            <label className="label">
              <span className="label-text font-medium my-1">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              name="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters",
                },
              })}
            />
            <label className="label">
              <span className="label-text-alt">
                {" "}
                {errors.password?.type === "required" && (
                  <p className=" text-red-500">{errors.password.message}</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className=" text-red-500">{errors.password.message}</p>
                )}
              </span>
            </label>

            {errorMessage}

            {/* submit  */}
            <input
              className="btn btn-primary bg-gradient-to-r from-secondary to-primary my-5 hover:to-secondary text-white  w-full"
              type="submit"
              value={"Create Account"}
            />
            <p className=" text-sm mb-3">
              Already have an account?{" "}
              <Link className="text-secondary font-medium" to={"/login"}>
                Login
              </Link>
            </p>
          </form>
          <div className="divider font-medium">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-secondary w-full"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
