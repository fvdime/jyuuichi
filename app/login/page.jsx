import Login from '@/components/Login'
import React from 'react'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {

  const session = await getServerSession(authOptions)

  if(session) redirect('/')

  return (
    <div>
      <div className="relative py-4 my-11">
        <div className="relative container m-auto px-6 text-gray-500  md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl shadow-custom ">
              <div className="px-6 py-4">
                <div className="flex min-h-full flex-col justify-center">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
                      Login To Your Account
                    </h2>
                  </div>

                  <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Login />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page