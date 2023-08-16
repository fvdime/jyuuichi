// "use client"

// import React, { useEffect, useState } from 'react'
import Card from "./Card";
// import { getProducts } from '@/lib/helper'
// import axios from 'axios'

// const getProduct = async () => {
//   try {

//   const res = await fetch('http://localhost:3000/api/products', {
//   cache: 'no-store',
//   })

//   console.log(res)
//   if(!res.ok) {
//     throw new Error("Failed to fetch products")
//   }

//   return res.json()

//   } catch (error) {
//     console.log("Failed to loading products: ", error)
//   }
// }

const FeaturedProducts = () => {
  // const [data, setData] = useState()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3000/api/products")
  //       setData(res.data.data)
  //     } catch (error) {
  //       console.log('Error fetching data:', error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // const{data} = await getProduct();

  const data = [
    {
      id: 1,
      image: "/1.jgp",
      image2: "/2.jpg",
      title: "oma oma god",
      isNew: true,
      price: 100,
    },
    {
      id: 2,
      image: "/3.jpg",
      image2: "/4.jpg",
      title: "im super shy super shy",
      isNew: true,
      price: 120,
    },
    {
      id: 3,
      image: "/2.jpg",
      image2: "/1.jpg",
      title: "queen card i m hot ",
      isNew: true,
      price: 200,
    },
    {
      id: 4,
      image: "/4.jpg",
      image2: "/3.jpg",
      title: "all my body cake",
      isNew: true,
      price: 300,
    },
  ];

  return (
    <div className="my-24 mx-48">
      <div className="flex justify-around items-center mb-14">
        <h1 className="flex-2 uppercase"> products</h1>
        <p className="flex-3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
          sapiente laborum?
        </p>
      </div>
      <div className="flex justify-around">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
