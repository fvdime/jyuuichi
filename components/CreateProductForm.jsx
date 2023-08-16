"use client"

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";

const CreateProductForm = () => {

  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!title || !description || !price) {
      setError("All fields are necessary!")
      return;
    }

    try {
      const response = await axios.post('/api/products', { title, description, price });
      console.log('Product created:', response.data.product);
      router.push("/admin/product")
    } catch (error) {
      console.error('Product creation failed:', error.response.data.error);
    }

  }

  return (
    <div className="max-w-screen-sm mx-auto">
      <form className="my-5" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Title
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
            placeholder="title..."
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Description
          </label>
          <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" 
          onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* <div className="mb-6">
          <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select Category
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
          >
            <option>Shoes</option>
            <option>Makeup</option>
            <option>Bag</option>
            <option>Skirt</option>
          </select>
        </div> */}
        <div className="mb-6">
          <label
            for="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Price
          </label>
          <div className="flex flex-row">
            <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">
              $
            </span>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          {/* <div className="my-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5"
              type="file"
            />
          </div> */}
        </div>
        <button
          type="submit"
          className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Create New Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
