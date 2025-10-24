import React from 'react'
import SegHeader from './SegHeader'
import Image from 'next/image'
import Container from './container'

function AbouUS() {
  return (
    <div className='bg-base-100'>
      <SegHeader title='About US'/>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 py-20'>
          <div className='flex justify-center flex-col items-center'>
            <div className='w-full md:w-1/2'>
              <h1 className='font-bold text-green-500 text-4xl mb-5'>
                About Our Company
              </h1>
              <p className='text-xl text-white/80 font-medium'>
                Welcome to our company! We are dedicated to providing the best services to our customers. Our team is passionate about innovation and excellence, striving to exceed expectations in everything we do. Thank you for choosing us as your trusted partner.
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src='/PNG/aboutus.png'
              alt='About US'
              width={400}
              height={400}
            >
            </Image>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AbouUS