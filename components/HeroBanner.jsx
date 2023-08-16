"use client"

import Image from 'next/image'
import React, {useState} from 'react'


const HeroBanner = () => {

  const data = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg'
  ]


  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev + 1)
  }

  return (
    <div className='w-full h-auto'>
      <div className='flex w-full relative h-[500px] '>
        <Image src={data[0]} alt='' fill className='object-cover'/>
        <Image src={data[1]} alt='' fill className='object-cover'/>
        {/* <Image src={data[2]} alt='' fill className='object-cover'/>
        <Image src={data[3]} alt='' fill className='object-cover'/> */}
      </div>
      {/* <div>
        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer select-none'>
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 10 L50 50 L90 90" stroke="black" fill="none"/>
          </svg>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer select-none'>
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 10 L50 50 L90 90" stroke="black" fill="none"/>
          </svg>
        </div>
      </div> */}
    </div>
  )
}

export default HeroBanner