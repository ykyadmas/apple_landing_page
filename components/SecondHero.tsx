import { url } from "inspector"
import Image from "next/image"
import Link from "next/link"
import React from "react"
const SecondHero = () => {
  return (
 <div className="flex min-h-screen bg-[url('/smartphone.jpg')] bg-cover">
  <div className="mx-auto mt-24">
    <div>
    <h1 className=" text-6xl font-bold text-black mb-4">iPhone 15 Pro</h1>
    <h1 className="text-black text-4xl mb-4">Titanuim. So strong. So light. So Pro.</h1>
    </div>
    <div className="mt-5">
      <Link className="text-blue-700 text-xl hover:underline" href=''>Learn More&gt;</Link>
      <Link className="text-blue-700 text-xl ml-4 hover:underline" href=''>Buy&gt;</Link>
    </div>
    <div>
    </div>
  </div>
 </div>
  )
}

export default SecondHero