import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
      <div className="w-full max-w-sm p-6 border-2 border-white/15 rounded-lg">
        {/* header content */}
        <div>
          <h2 className="text-xl mb-2  tracking-wider">
            Admin Login
          </h2>
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
                placeholder="example@email.com"
                className="mt-2 w-full block ps-4 py-2 text-sm bg-raisinBlack border border-white/15 rounded"
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
                <label htmlFor="password" className="text-sm ">
                  Password
                </label>
                <Link className="text-sm underline">Forget Your Password?</Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="xxxxxxx"
                className="mt-1 w-full block ps-4 py-2 text-sm bg-raisinBlack border border-white/15 rounded"
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
              className="w-full text-sm  bg-prime hover:opacity-85 hover:transform hover:transition hover:ease-in-out hover:duration-300 text-black mt-4 rounded-md py-[10px] font-medium"
            >
              Login
            </button>
          </form>
        </div>

        <p className="text-sm text-center mt-7">
          Don't have an account?{" "}
          <Link to="/signup" className="underline text-prime  tracking-wide">
            Signup
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
