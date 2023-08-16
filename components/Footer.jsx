import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-white shadow">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <Link href="/" className="flex items-center mb-4 sm:mb-0">
                      <span className="self-center text-2xl font-semibold whitespace-nowrap">JyuuIchiSan</span>
                  </Link>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                      <li>
                          <Link href="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
                      </li>
                      <li>
                          <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                      </li>
                      <li>
                          <Link href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                      </li>
                      <li>
                          <Link href="#" className="hover:underline">Contact</Link>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center">© 2023 <Link href="/" className="hover:underline">JyuuIchiSan™</Link>. All Rights Reserved.</span>
          </div>
      </footer>
    </div>
  )
}

export default Footer