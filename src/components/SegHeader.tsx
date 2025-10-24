import React from 'react'

function SegHeader({title} : {title?: string}) {
  return (
    <div className='flex justify-center items-center font-bold text-5xl py-10 bg-base-100'>
      <h1 className='text-white border-b-2 border-green-400 pb-2'>{title}</h1>
    </div>
  )
}

export default SegHeader