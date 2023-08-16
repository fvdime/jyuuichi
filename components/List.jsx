import React from "react";
import Card from "./Card";

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

const List = () => {
  const data = [
    {
      id: 1,
      image: "/1.jpg",
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
    {
      id: 5,
      image: "/1.jpg",
      image2: "/2.jpg",
      title: "oma oma god",
      isNew: true,
      price: 100,
    },
    {
      id: 6,
      image: "/3.jpg",
      image2: "/4.jpg",
      title: "im super shy super shy",
      isNew: true,
      price: 120,
    },
    {
      id: 7,
      image: "/2.jpg",
      image2: "/1.jpg",
      title: "queen card i m hot ",
      isNew: true,
      price: 200,
    },
    {
      id: 8,
      image: "/4.jpg",
      image2: "/3.jpg",
      title: "all my body cake",
      isNew: true,
      price: 300,
    },
  ];

  // const{data} = await getProduct();

  return (
    <div className="flex justify-between flex-wrap overflow-hidden">
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
