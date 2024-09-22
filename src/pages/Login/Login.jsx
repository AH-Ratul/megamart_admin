import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../public/logo123.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <main className="bg-raisinBlack text-white/70 font-OpenSans min-h-screen flex flex-col justify-center items-center">
      <img src={logo} alt="logo" className="mb-12" />
      <div className="w-full max-w-md p-6 border border-white/15 rounded-sm">
        {/* header content */}
        <div>
          <h2 className="text-xl mb-2 font-bold tracking-widest">
            Admin Login
          </h2>
          <p className="text-sm">
            Enter your email below to login to your account
          </p>
        </div>
        {/* main content */}
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-2 w-full block ps-2 py-2 text-sm bg-raisinBlack border border-white/15 rounded"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <div className="flex justify-between items-center mt-5 mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link className="text-sm underline">Forget Your Password?</Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 w-full block ps-2 py-2 text-sm bg-raisinBlack border border-white/15 rounded"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                  message: "Password must be at least 6 characters long.",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-white/65 hover:opacity-75 hover:transform hover:transition hover:ease-in-out hover:duration-300 text-black mt-4 rounded-md py-2 font-medium"
            >
              Login
            </button>
          </form>
        </div>

        <p className="text-sm text-center mt-7">
          Don't have an account?{" "}
          <Link to="/signup" className="underline">
            Signup
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
