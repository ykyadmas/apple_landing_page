import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cards = () => {
  return (
<div className='grid grid-cols-2 gap-1 mt-4'>

<div className='relative'>
  <Image src='/watch.jpg' alt='' width={700} height={200} className=' min-h-screen'/>
<div>
<h1 className='absolute  top-48 left-80 text-white text-6xl'>Watch </h1>

</div>
</div>

<div className='relative'>
  <Image src='/airpod.jpg' alt='' width={700} height={200} className=' min-h-screen'/>
<div>
<h1 className='absolute  top-48 left-80 text-white text-6xl'>Airpod </h1>
</div>
</div>
<div className='relative'>
  <Image src='/ipade2.jpg' alt='' width={700} height={100} className=' min-h-screen'/>
<div>
<h1 className='absolute  top-48 left-80 text-white text-6xl'>iPad </h1>

</div>
</div>
<div className='relative'>
  <Image src='/macbook.jpg' alt='' width={700} height={200} className=' min-h-screen'/>
<div>
<h1 className='absolute  top-48 left-80 text-white text-6xl'>Macbook </h1>

</div>
</div>

</div>
  )
}

export default Cards