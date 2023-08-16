'use client'
 
import { useParams } from 'next/navigation'
import List from '@/components/List'
import Image from 'next/image'
import React, { useState } from 'react'

const Category = () => {

  const categoryId = parseInt(useParams().id)

  // const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <div className='flex px-8 py-14'>
      <div className='flex flex-2 flex-col sticky h-[100%] top-12'>
        <div className=''>
          <h2 className='font-medium text-lg mb-2'>Product categories</h2>
          <div className='mb-1'>
            <input type="checkbox" id='1' value={1} className='mr-2'/>
            <label htmlFor="1">Shoes</label>
          </div>
          <div className='mb-1'>
            <input type="checkbox" id='2' value={2} className='mr-2'/>
            <label htmlFor="2">Bag</label>
          </div>
          <div className='mb-1'>
            <input type="checkbox" id='3' value={3} className='mr-2'/>
            <label htmlFor="3">Makeup</label>
          </div>
        </div>
        {/* <div>
          <h2>Filter by Price</h2>
        </div> */}
        <div>
          <h2 className='font-medium text-lg mt-3'>Sort by</h2>
          <div className='mb-1'>
            <input type="radio" name="price" id="asc" value='asc' onChange={(e) => setSort('asc')} className='mr-2'/>
            <label htmlFor="asc" >Price (Lowest first)</label>
          </div>
          <div className='mb-1 '>
            <input type="radio" name="price" id="desc" value='desc' onChange={(e) => setSort('desc')} className='mr-2'/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='flex-1 ml-5'>
          {/* <Image src='/1.jpg' alt='' height={200} width={1000}  className='object-cover'/> */}

          <List categoryId={categoryId} sort={sort}/>
      </div>
    </div>
  )
}

export default Category