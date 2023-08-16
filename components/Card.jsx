import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({item}) => {
  return (
    <Link href={`/product/${item.id}`}>
      <div className='w-[250px] flex flex-col gap-3 mb-12'>
        <div className='w-full h-[400px] relative overflow-hidden group inline-block'>
          <Image src={item?.image} alt='' fill className='object-cover'/>
          <Image src={item?.image2} alt='' fill className='object-cover'/>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='font-medium text-lg underline'>{item?.title}</h2>
          {/* <h1>{item?.description}</h1> */}
          <h3 className='font-semibold '>$ {item.price}</h3>
          {/* <h3 className='font-semibold '>$ {item.category}</h3> */}

        </div>
      </div>
    </Link>
  )
}

export default Card