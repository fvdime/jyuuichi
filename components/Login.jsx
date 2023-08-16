"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are necessary!");
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials!");
      }

      router.push("/");
    } catch (error) {
      console.log("Error during registration!", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <span className="block mb-2 text-sm font-medium text-gray-900">
            Your email
          </span>
          <input
            type="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 "
            placeholder="name@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <span className="block mb-2 text-sm font-medium text-gray-900 ">
            Your password
          </span>
          <input
            type="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 "
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && (
          <div className="text-red-500 text-sm font-semibold my-2">{error}</div>
        )}
        <div className="flex items-center justify-center mb-6">
          <span className="ml-2 text-sm font-medium text-gray-900 ">
            Already have an account?{" "}
            <Link
              href="/register"
              className="text-lime-600 hover:underline dark:text-lime-500"
            >
              Register
            </Link>
          </span>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
