import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar flex-1 bg-black justify-center fixed">
      <Link href='' className="btn btn-ghost  text-white">icon</Link>
      <Link href='' className="btn btn-ghost  text-white">store</Link>
      <Link href='' className="btn btn-ghost  text-white">mac</Link>
      <Link href='' className="btn btn-ghost  text-white">iPad</Link>
      <Link href='' className="btn btn-ghost  text-white">iPhone</Link>
      <Link href='' className="btn btn-ghost  text-white">Watch</Link>
      <Link href='' className="btn btn-ghost  text-white">Vision</Link>
      <Link href='' className="btn btn-ghost  text-white">AirPods</Link>
      <Link href='' className="btn btn-ghost  text-white">Entertainment</Link>
      <Link href='' className="btn btn-ghost  text-white">Accessories</Link>
      <Link href='' className="btn btn-ghost  text-white">Support</Link>
      <Link href='' className="btn btn-ghost  text-white">Your Item Icone</Link>
  </div>
  )
}

export default Navbar