import React, { useEffect } from "react";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseToken from "../../Hooks/UseToken";

const Login = () => {
  // signIN with Google :
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  let errorMessage;

  const [token] = UseToken(user || guser);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || gloading) {
    return <Loading></Loading>;
  }

  if (error || gerror) {
    errorMessage = (
      <p className=" text-red-500 text-sm">
        {error?.message || gerror?.message}
      </p>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.email);
    console.log(user);
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
    reset();
  };

  return (
    <div className="flex justify-center items-center mx-auto h-screen text-center container">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="font-semibold text-3xl text-secondary text-center my-8">
            LogIn
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              value={"login"}
            />

            <p className=" text-sm mb-3">
              New to Doctors Portal?{" "}
              <Link className="text-secondary font-medium" to={"/signup"}>
                Create new account
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

export default Login;
