import Image from "next/image";
import React from "react";

const ShoppingCart = () => {
  const data = [
    {
      id: 1,
      image: "/1.jpg",
      title: "oma oma god",
      desc: "hello my name is faya i feel so bad pls save me",
      price: 100,
    },
    {
      id: 2,
      image: "/3.jpg",
      title: "im super shy super shy",
      desc: "hello my name is faya i feel so bad pls save me",
      price: 120,
    },
  ];

  return (
    <div className="absolute z-10 top-20 right-5 bg-white p-5 rounded-lg shadow-md shadow-slate-800/50">
      <h1 className="text-gray-900 text-lg mb-5 border-b border-gray-300">
        Products in your cart
      </h1>
      {data.map((item) => (
        <div key={item.id} className="flex items-center gap-5 mb-5">
          <Image src={item.image} alt="" height={100} width={80} />
          <div className="">
            <h1 className="font-medium text-lg">{item.title}</h1>
            <p className="text-gray-500 mb-3 font-light">
              {item.desc?.substring(0, 100)}
            </p>
            <div className="text-lime-500">1 x ${item.price}</div>
          </div>
          <button
            type="button"
            className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ))}
      <div className="flex justify-between font-semibold mb-5">
        <span>SUBTOTAL</span>
        <span>$234</span>
      </div>
      <div className="flex flex-col font-semibold ">
        <button
          type="button"
          className="text-gray-900 hover:text-white border-2 rounded-md border-lime-500 hover:bg-lime-500 font-medium  text-sm px-5 py-1.5 text-center mb-5"
        >
          PROCEED TO CHECKOUT
        </button>
        <span className="text-red-700 hover:underline font-normal text-md self-center">
          Reset Cart
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default ShoppingCart;
