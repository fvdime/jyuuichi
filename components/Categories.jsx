import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex h-[80vh] gap-3 m-3">
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          <img
            className="max-h-full object-cover max-w-full rounded-lg"
            src="/1.jpg"
            alt=""
          />
          <button className="absolute h-12 p-3 top-0 left-0 right-0 m-auto cursor-pointer border-0 uppercase text-white bg-slate-700">
            <Link href="/product/1">Shoes</Link>
          </button>
        </div>
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          <img
            className="max-h-full object-cover max-w-full rounded-lg"
            src="/1.jpg"
            alt=""
          />
          <button className="absolute min-w-fit h-12 p-3 top-0 left-0 right-0 m-auto cursor-pointer border-0 uppercase text-white bg-slate-700">
            <Link href="/product/1">Shoes</Link>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          {" "}
          <img
            className="max-h-full object-cover max-w-full rounded-lg"
            src="/1.jpg"
            alt=""
          />
          <button className="absolute min-w-fit h-12 p-3 top-0 left-0 right-0 m-auto cursor-pointer border-0 uppercase text-white bg-slate-700">
            <Link href="/product/1">Shoes</Link>
          </button>
        </div>
      </div>
      <div className="flex-2">
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 flex gap-3 relative overflow-hidden">
              <img
                className="max-h-full object-cover max-w-full rounded-lg"
                src="/1.jpg"
                alt=""
              />
              <button className="absolute min-w-fit h-12 p-3 top-0 left-0 right-0 m-auto cursor-pointer border-0 uppercase text-white bg-slate-700">
                <Link href="/product/1">Shoes</Link>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 flex gap-3 relative overflow-hidden">
              {" "}
              <img
                className="max-h-full object-cover max-w-full rounded-lg"
                src="/1.jpg"
                alt=""
              />
              <button className="absolute min-w-fit h-12 p-3 top-0 left-0 right-0 m-auto cursor-pointer border-0 uppercase text-white bg-slate-700">
                <Link href="/product/1">Shoes</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          <img
            className="max-h-full object-cover max-w-full rounded-lg"
            src="/1.jpg"
            alt=""
          />
          <button className="absolute min-w-fit h-12 p-3 top-0 left-0 right-0 m-auto cursor-pointer border-0 uppercase text-white bg-slate-700">
            <Link href="/product/1">Shoes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
