import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
      <div className="">
        <h3 className="text-center">Sign Up</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-10 md:w-2/4 mx-auto"
        >
          <div className="mb-6">
            <label
              for="User Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="default-input"
              name="name"
              {...register("name", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.name && <span>Name is required</span>}
          </div>
          <div className="mb-6">
            <label
              for="User Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.email && <span>Email is required</span>}
          </div>
          <div className="mb-6">
            <label
              for="User Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 18,
                pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])/,
              })}
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.password?.type === "required" && (
              <span>Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 text-sm">
                password must be 6 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600 text-sm">
                password must be have one upper case one lower case one number
                one special characters
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              for="User Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              {...register("confirm", { required: true }, { min: 6, max: 18 })}
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.confirm && <span>Please confirm your password</span>}
          </div>
          <div className="mb-6">
            <input
              type="submit"
              value="SignUp"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:bg-primary hover:text-white hover:font-semibold cursor-pointer shadow hover:shadow-md"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
