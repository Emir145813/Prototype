import React from 'react'
import SegHeader from './SegHeader'
import Container from './container'
import { Icon } from "@iconify/react";

function Plans() {
  return (
    <div className='bg-base-100'>
      <SegHeader title='Plans'></SegHeader>
      <Container>
        <div className='py-20 px-5 grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center'>
          <div className='bg-black rounded-3xl flex flex-col py-15 px-5 hover:scale-102 transition delay-150 duration-300 border-2 border-black ease-in-out hover:border-2 hover:border-green-500'>
            <span className='flex flex-col justify-center items-center py-10'>
              <Icon className='h-20 w-20 text-gray-400' icon="solar:medal-ribbons-star-line-duotone"/>
              <p className='text-3xl text-gray-400 font-bold'>
                Gold Plan
              </p>
            </span>
            <p className='text-justify text-xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa eum ea eligendi saepe quasi corporis laborum nisi sint quo magnam asperiores atque deserunt unde nulla, iste sunt eos aspernatur!
            </p>
          </div>
          <div className='bg-black rounded-3xl flex justify-center flex-col py-20 px-5 hover:scale-102 transition delay-150 duration-300 border-2 border-black ease-in-out hover:border-2 hover:border-green-500'>
            <span className='flex flex-col justify-center items-center py-10'>
              <Icon className='h-20 w-20 text-yellow-400' icon="solar:medal-ribbons-star-outline"/>
              <p className='text-3xl text-yellow-400 font-bold'>
                Silver Plan
              </p>
            </span>
            <p className='text-justify text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque eaque ab rerum deserunt? Blanditiis, sed placeat sequi omnis eius dolores alias ipsa veniam repellat molestiae assumenda nobis a facere!
            </p>
          </div>
          <div className='bg-black rounded-3xl flex justify-center flex-col py-15 px-5 hover:scale-102 transition delay-150 duration-300 border-2 border-black ease-in-out hover:border-2 hover:border-green-500'>
            <span className='flex flex-col justify-center items-center py-10'>
              <Icon className='h-20 w-20 text-orange-500' icon="solar:medal-ribbons-star-broken"/>
              <p className='text-3xl text-orange-500 font-bold'>
                Bronze Plan
              </p>
            </span>
            <p className='text-justify text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sed quod modi voluptatem tempora non repellat maiores. Ea, voluptas quaerat cum ducimus quisquam labore autem, deserunt explicabo fugit eveniet voluptatum.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Plans