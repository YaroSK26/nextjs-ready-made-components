import Sliders from '@/components/Sliders'
import Gallery from '@/components/Gallery'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-10 mb-5'>
        <Sliders></Sliders>
        
        <Gallery></Gallery>
    </div>
  )
}

export default page
