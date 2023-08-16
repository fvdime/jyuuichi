import React from "react";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid">
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="/1.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30  rounded-xl top-0 right-0"
              >
                Shoe
              </Link>
            </button>
          </div>
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="2.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30  rounded-xl top-0 right-0"
              >
                Shoe
              </Link>
            </button>
          </div>
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="3.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30  rounded-xl top-0 right-0"
              >
                Shoe
              </Link>
            </button>
          </div>
        </div>
        <div className="grid">
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="/3.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30  rounded-xl top-0 right-0"
              >
                Shoe
              </Link>
            </button>
          </div>
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="/4.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30  rounded-xl top-0 right-0"
              >
                Shoe
              </Link>
            </button>
          </div>
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="/1.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30  rounded-xl top-0 right-0"
              >
                Shoe
              </Link>
            </button>
          </div>
        </div>
        <div className="grid">
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="/2.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30  rounded-xl top-0 right-0"
              >
                Shoe
              </Link>
            </button>
          </div>
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="/3.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30  rounded-xl top-0 right-0"
              >
                Shoe
              </Link>
            </button>
          </div>
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="/4.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30 rounded-xl top-0 right-0"
              >
                Shoe
              </Link>
            </button>
          </div>
        </div>
        <div className="grid">
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="/1.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30  rounded-xl top-0 right-0"
              >
                Shoe
              </Link>
            </button>
          </div>
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="/2.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30  rounded-xl top-0 right-0"
              >
                Shoe
              </Link>
            </button>
          </div>
          <div className="relative">
            <img className="h-auto max-w-full rounded-lg" src="/3.jpg" alt="" />
            <button>
              <Link
                href="/"
                className="absolute h-10 pb-2 pt-2 px-4 cursor-pointer border-0 uppercase text-white text-light bg-lime-300/30 rounded-xl top-0 right-0 "
              >
                bag
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
