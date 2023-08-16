"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [data, setData] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/category");
        setData(res.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async ({id}) => {
    try {
      const response = await axios.delete(`/api/categories/${id}`);
      if (response.status === 200) {
        setIsDeleted(true);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="p-4 sm:ml-64 max-w-screen-xl mx-auto">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category name
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
                hellloooo
              </th>
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
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <Link
          href="/admin/categories/add"
          className="flex flex-row justify-center items-center self-center my-5"
        >
          <button
            type="button"
            className="text-gray-700 bg-white border border-slate-300 focus:outline-none hover:bg-slate-100  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Add New Category
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
