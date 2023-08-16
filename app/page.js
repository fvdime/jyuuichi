// "use client"

import FeaturedProducts from "@/components/FeaturedProducts";
import Gallery from "@/components/Gallery";
import HeroBanner from "@/components/HeroBanner";
import TrustUs from "@/components/TrustUs";
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

export default function Home() {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/api/products/');
  //     setData(response.data.reverse());
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <div>
      <HeroBanner/>
      {/* <Categories/> */}
      <FeaturedProducts/>
      <Gallery/>
      <TrustUs/>
    </div>
  )
}
