import Image from 'next/image'
import React from 'react'
import Container from './container'
import { CloudSnow } from 'lucide-react'

function HeroPage() {
  return (
    <div className='bg-base-100'>
      <Container>
        <div className=' grid grid-cols-1 md:grid-cols-2 items-center justify-between py-20'>
          <div className='w-2/3 flex flex-col gap-5 '>
            <h1 className='text-5xl font-bold text-green-400 leading-tight'>
              Start Your Start Up Journey With Us !
            </h1>
            <p className='text-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores assumenda, eveniet consectetur dolores nemo in labore obcaecati ipsam nulla maxime aliquid ab fuga fugit laboriosam iusto ducimus tenetur est voluptatem.
            </p>
          </div>
          <div className='flex justify-end'>
            <Image
              src='https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-company-milestones-timeline-infographic-business-to-success-png-image_12685611.png'
              alt='Here Image'
              width={360}
              height={360}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroPage