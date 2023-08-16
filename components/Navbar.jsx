'use client'


import Link from "next/link";
import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const {data: session} = useSession()

  return (
    <div className="">
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              JyuuIchiSan
            </span>
          </Link>
          <div className="flex items-center">
            {/* <Link href="tel:5541251234" className="mr-6 text-sm  text-gray-500  hover:underline">(555) 412-1234</Link> */}
            <button 
              type="button"
              className="relative"
              onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mx-4 my-2 text-gray-500"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.79 11.34a2 2 0 0 0 1.92 1.47h10a2 2 0 0 0 1.92-1.47L23 6H6" />
              </svg>
              <span className="font-medium w-5 h-5 rounded-full bg-lime-500 text-white absolute right-0 top-0 flex items-center justify-center">0</span>
            </button>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mx-4 my-2 text-gray-500"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C13.09 4.81 14.76 4 16.5 4 19.58 4 22 6.42 22 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z" />
              </svg>
            </div>
            
            <Link href="/login" className="text-sm  text-lime-600 hover:underline mr-3">
              Login
            </Link>
            <span className="text-sm  text-lime-600 hover:underline mr-3">
              Hi {session?.user?.name} !
            </span>
            <button className="text-sm  text-lime-600 hover:underline" onClick={() => signOut()}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <nav className="border-y">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  href="/category/1"
                  className="text-gray-900 hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/category/2"
                  className="text-gray-900  hover:underline"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/category/3"
                  className="text-gray-900  hover:underline"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/category/4"
                  className="text-gray-900 hover:underline"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {open && <ShoppingCart/>}
    </div>
  );
};

export default Navbar;
