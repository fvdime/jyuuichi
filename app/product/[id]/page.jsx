"use client";

import Image from "next/image";
import React, { useState } from "react";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);


  const data = ["/1.jpg", "/2.jpg", "/3.jpg"];

  return (
    <div className="py-5 px-12 flex gap-12 mx-auto max-w-screen-xl">
      <div className="md:flex flex-col">
        <div className="flex flex-col">
        <img
          src={data[0]}
          alt=""
          onClick={(e) => setSelectedImage(0)}
          className="h-auto max-w-[100px] flex cursor-pointer mb-3 object-contain"
        />
        <img
          src={data[1]}
          alt=""
          onClick={(e) => setSelectedImage(1)}

          className="h-auto max-w-[100px] flex cursor-pointer mb-3 object-cover"
        />
        <img
          src={data[2]}
          alt=""
          onClick={(e) => setSelectedImage(2)}
          className="h-auto max-w-[100px] flex cursor-pointer mb-3 object-cover"
        />
        </div>
      </div>
      <div className="flex">
        <img src={data[selectedImage]} alt="" className=" object-cover w-auto h-[500px]"/>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="font-bold text-xl">oma oma god</h1>
        <span className="text-lg font-semibold text-lime-500">$199</span>
        <p className="text-justify font-light text-md text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis neque vel esse quod iusto corrupti expedita maxime, quisquam dolorum quos exercitationem excepturi illo, soluta suscipit aliquam animi dignissimos architecto error?</p>
        <div className="flex items-center justify-between gap-2 border border-lime-500 cursor-pointer">
          <button type="button" className="text-gray-900 hover:text-white hover:bg-lime-500 font-medium text-sm px-2 py-1 text-center"
          onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}
          >-</button>
          {quantity}
          <button type="button" className="text-gray-900 hover:text-white hover:bg-lime-500 font-medium  text-sm px-2 py-1 text-center" onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <div className="flex items-center justify-between ">
          <button type="button" className="text-gray-900 hover:text-white border border-lime-600 hover:bg-lime-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to Cart</button>
        </div>
        <div className="flex flex-row items-center">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 m-3 text-red-400">
          <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C13.09 4.81 14.76 4 16.5 4 19.58 4 22 6.42 22 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z" />
          </svg>
          <span className="text-red-400 hover:underline font-medium rounded-lg text-sm text-center">Add to Wishlist</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
