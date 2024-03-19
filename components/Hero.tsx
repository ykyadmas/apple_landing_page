import Image from "next/image"
import Link from "next/link"
import React from "react"
const Home = () => {
  return (
 <div className="flex min-h-screen bg-[url('/smarthphone.png')] bg-cover">
  <div className="mx-auto mt-24 ml-[500px]">
    <div>
    <h1 className=" text-6xl font-bold text-white mb-4">iPhone 15 Pro</h1>
    <h1 className=" text-gray-200 text-4xl mb-4">Titanuim. So strong. So light. So Pro.</h1>
    </div>
    <div className="mt-5">
      <Link className="text-blue-700 text-xl hover:underline" href=''>Learn More&gt;</Link>
      <Link className="text-blue-700 text-xl ml-4 hover:underline" href=''>Buy&gt;</Link>
    </div>
  
  </div>
  
 </div>
  )
}

export default Home