import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-4 sm:ml-64 max-w-screen-xl mx-auto">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="flex flex-row">
                
                <button
                  type="button"
                  className="text-gray-700 bg-white border border-lime-300 focus:outline-none hover:bg-lime-100  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                >
                  Update
                </button>
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-red-300 focus:outline-none hover:bg-red-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <Link
          href="/admin/product/add"
          className="flex flex-row justify-center items-center self-center my-5"
        >
          <button
            type="button"
            className="text-gray-700 bg-white border border-slate-300 focus:outline-none hover:bg-slate-100  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Add New Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
