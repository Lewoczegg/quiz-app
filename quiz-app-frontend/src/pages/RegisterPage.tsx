import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUp } from "../services/authService";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const password = watch("password");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await signUp({
        name: data.username,
        email: data.email,
        password: data.password,
      });

      if (response?.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.data?.description || "An error occurred"
        );
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen bg-neutral-lightgray">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-primary-blue">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-neutral-darkgray text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Username must be less than 50 characters",
                },
              })}
              type="text"
              id="username"
              placeholder="Your username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-darkgray leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.username && (
              <p className="text-red-500 text-xs px-0.5">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-neutral-darkgray text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              placeholder="email@example.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-darkgray leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <p className="text-red-500 text-xs px-0.5">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-neutral-darkgray text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Password must be less than 50 characters",
                },
              })}
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-darkgray leading-tight focus:outline-none focus:shadow-outline pr-10"
            />
            {errors.password && (
              <p className="text-red-500 text-xs px-0.5">
                {errors.password.message}
              </p>
            )}
            <span className="absolute inset-y-0 right-0 pr-3 pt-7 flex items-center text-sm leading-5">
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-6 w-6" />
                ) : (
                  <EyeIcon className="h-6 w-6" />
                )}
              </button>
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6 relative">
            <label
              htmlFor="confirm-password"
              className="block text-neutral-darkgray text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-darkgray leading-tight focus:outline-none focus:shadow-outline pr-10"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs px-0.5">
                {errors.confirmPassword.message}
              </p>
            )}
            <span className="absolute inset-y-0 right-0 pr-3 pt-7 flex items-center text-sm leading-5">
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="focus:outline-none"
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-6 w-6" />
                ) : (
                  <EyeIcon className="h-6 w-6" />
                )}
              </button>
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-primary-blue hover:bg-secondary-teal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div>
          {errorMessage && (
            <div
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4"
              role="alert"
            >
              <p className="font-bold">Error</p>
              <p>{errorMessage}</p>
            </div>
          )}
        </div>

        <div className="mt-4 text-center">
          <Link
            to="/login"
            className="font-bold text-sm text-primary-blue hover:text-secondary-teal"
          >
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
