import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'
import useSWR from 'swr'
import Card from './components/card'
import { Button } from '@nextui-org/react'

const Home = () => {
  const [xdata, setXData] = useState([])
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  // get data from api
  const { data, error, isLoading } = useSWR('/api/users', fetcher)

  if (error) return <>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}>

      <header className="">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block " href="/">
                <span className="sr-only">Home</span>
                <Image src="/x_large.jpg" alt="Logo" width={40} height={40} priority />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium hover:bg-gray-600 text-white shadow"
                  href="https://github.com/hellofaizan/xprofile" target="_blank" rel="noopener noreferrer" title='Add your 𝕏 (Twitter) Profile to this list :)'
                >
                  Contribute ⭐
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid h-screen px-4 place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-400">Error loading data to screen.</p>

          <Link
            href="https://github.com/hellofaizan/xprofile"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Report Error
          </Link>
        </div>
      </div>

    </motion.div>
  </>

  if (data) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}>

          <header className="">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                  <Link className="block " href="/">
                    <span className="sr-only">Home</span>
                    <Image src="/x_large.jpg" alt="Logo" width={40} height={40} priority />
                  </Link>
                </div>

                <div className="hidden sm:block">
                  <form className="flex items-center w-80">
                    <label for="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                      <input type="text" id="simple-search" className="border border-gray text-sm rounded-lg block w-full pl-3 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search user profile..." required></input>
                    </div>
                    <button type="submit" className="p-3 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none hover:bg-gray-600 focus:ring-gray-500">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </form>
                </div>

                <div className="flex items-center gap-4">
                  <div className="sm:flex hidden sm:gap-4">
                    <Link
                      className="rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium hover:bg-gray-600 text-white shadow"
                      href="https://github.com/hellofaizan/xprofile" target="_blank" rel="noopener noreferrer" title='Add your 𝕏 (Twitter) Profile to this list :)'
                    >
                      Contribute ⭐
                    </Link>
                  </div>
                  <div className="block sm:hidden">
                    <form className="flex items-center">
                      <label for="simple-search" className="sr-only">Search</label>
                      <div className="relative w-full">
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user profile..." required></input>
                      </div>
                      <button type="submit" className="p-3 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none hover:bg-gray-600 focus:ring-gray-500">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                      <Link href={"https://github.com/hellofaizan/xprofile"} className="p-3 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none hover:bg-gray-600 focus:ring-gray-500">
                        ⭐
                        <span className="sr-only">Contribute</span>
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {data.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((user, index) => (
                  <Card key={index} user={user} name={user.name}/>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid h-screen px-4 place-content-center">
              <div className="text-center">
                <h1 className="font-black text-gray-200 text-3xl">No profiles available 😣</h1>
                <Link
                  href="https://github.com/hellofaizan/xprofile"
                  className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
                >
                  Submit your profile
                </Link>
              </div>
            </div>
          )}


        </motion.div>
      </>
    )
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>

        <header className="">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="md:flex md:items-center md:gap-12">
                <Link className="block " href="/">
                  <span className="sr-only">Home</span>
                  <Image src="/x_large.jpg" alt="Logo" width={40} height={40} priority />
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium hover:bg-gray-600 text-white shadow"
                    href="https://github.com/hellofaizan/xprofile" target="_blank" rel="noopener noreferrer" title='Add your 𝕏 (Twitter) Profile to this list :)'
                  >
                    Contribute ⭐
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Loading */}
        <div className="grid h-screen px-4 place-content-center">
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span
            >
          </div>
        </div>

      </motion.div>
    </>
  )
}


export default Home