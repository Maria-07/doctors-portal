import React from "react";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

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

  if (guser || user) {
    // console.log(guser);
  }

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

            <input
              className="btn btn-primary bg-gradient-to-r from-secondary to-primary my-5 hover:to-secondary text-white  w-full"
              type="submit"
              value={"login"}
            />
          </form>
          <div className="divider">or</div>
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
