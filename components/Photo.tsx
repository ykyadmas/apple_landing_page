import Image from 'next/image'
import React from 'react'

const PhotoPage = () => {
  return (
    <div className='mt-4'>
        <div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
  <Image src='/watch.jpg' alt='' width={700} height={200} className=' min-h-screen'/>
  </div> 
  <div className="carousel-item">
  <Image src='/airpod.jpg' alt='' width={700} height={200} className=' min-h-screen'/>
  </div> 
  <div className="carousel-item">
  <Image src='/ipade2.jpg' alt='' width={700} height={100} className=' min-h-screen'/>
  </div> 
  <div className="carousel-item">
  <Image src='/macbook.jpg' alt='' width={700} height={200} className=' min-h-screen'/>
  </div> 
</div>
    </div>
  )
}

export default PhotoPage