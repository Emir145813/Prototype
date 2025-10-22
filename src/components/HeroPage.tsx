import Image from 'next/image'
import React from 'react'
import Container from './container'

function HeroPage() {
  return (
    <>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
          <div className='w-2/3 flex flex-col gap-5'>
            <h1 className='text-5xl font-bold text-green-400'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores.
            </h1>
            <p className='text-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores assumenda, eveniet consectetur dolores nemo in labore obcaecati ipsam nulla maxime aliquid ab fuga fugit laboriosam iusto ducimus tenetur est voluptatem.
            </p>
          </div>
          <div>
            <Image
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSQy1uuq45qoF4MD0iPt1TSMakJSjSGipFu9rhI9DLKIhvl7lo8F6b9bfPg6lyv9q0A8&usqp=CAU'
              alt='Here Image'
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default HeroPage