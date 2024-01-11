import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen bg-neutral-lightgray">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-primary-blue">Log In</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-neutral-darkgray text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-darkgray leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-neutral-darkgray text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-darkgray leading-tight focus:outline-none focus:shadow-outline pr-10"
            />
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
          <div className="flex items-center justify-between">
            <button
              className="bg-primary-blue hover:bg-secondary-teal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
            <Link
              to="/forgot-password"
              className="inline-block align-baseline font-bold text-sm text-primary-blue hover:text-secondary-teal"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/signup"
            className="font-bold text-sm text-primary-blue hover:text-secondary-teal"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
