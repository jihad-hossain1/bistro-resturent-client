import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((errors) => {
          console.log(errors);
        });
    });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
      <div className="py-10">
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
              Photo Url
            </label>
            <input
              {...register("photoURL", { required: true })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.photoURL && <span>Please confirm your Photo Url</span>}
          </div>
          <div className="mb-6">
            <input
              type="submit"
              value="SignUp"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:bg-primary hover:text-white hover:font-semibold cursor-pointer shadow hover:shadow-md"
            />
          </div>
          <button>
            <span>Already have a Account ? </span>
            <Link to="/login" className="hover:text-blue-600 underline">
              LogIn
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
