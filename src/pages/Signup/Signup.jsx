import { useCreateUserMutation } from "@/redux/api/user_api";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [postData, { isError, isLoading, error }] = useCreateUserMutation();

  const onSubmit = async (data) => {
    const userData = {
      name: data.fullname,
      role: "admin",
      phone: data.phone,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    };

    console.log("user", userData)

    try {
      const post = await postData(userData).unwrap();

      console.log(post);

      reset();
    } catch (error) {
      console.log("Err ->", error.data);
    }
  };

  return (
    <main className="bg-accent font-OpenSans min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-sm p-6 my-4 border shadow-sm bg-white rounded-lg">
        {/* header content */}
        <div>
          <h2 className="text-xl mb-2  tracking-wider">Admin SignUp</h2>
        </div>
        {/* main content */}
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="fullname" className="text-sm">
                Fullname*
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Mr. ABCD"
                className="mt-2 w-full block ps-4 py-2 text-sm border rounded"
                {...register("fullname", {
                  required: "Name is required",
                })}
              />
              {errors.fullname && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullname.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="text-sm">
                Phone*
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="017XX-XXXXXX"
                className="mt-2 w-full block ps-4 py-2 text-sm border rounded"
                {...register("phone", {
                  required: "Phone is required",
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                className="mt-2 w-full block ps-4 py-2 text-sm border rounded"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="text-sm">
                Password*
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="XXXXXXX"
                className="mt-1 w-full block ps-4 py-2 text-sm border rounded"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                  message: "Password must be at least 6 characters long.",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="text-sm">
                Confirm your Password*
              </label>
              <input
                type="password"
                id="passwordConfirm"
                placeholder="XXXXXXX"
                {...register("passwordConfirm", {
                  required: "You have to confirm your password",
                  message: "Password must be at least 6 characters",
                })}
                className="mt-1 w-full block ps-4 py-2 text-sm border rounded"
              />
              {errors.passwordConfirm && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.passwordConfirm.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full text-sm tracking-wide bg-black/70 hover:opacity-95 hover:transform hover:transition hover:ease-in-out hover:duration-300 text-white mt-4 rounded-md py-[10px] font-medium"
            >
              {isLoading ? "Loading..." : "Signup"}
            </button>
          </form>
        </div>

        <p className="text-sm text-center mt-7">
          Already have an account?{" "}
          <Link to="/login" className="underline text-prime tracking-wider">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;
