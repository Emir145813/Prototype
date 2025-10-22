import React from 'react'
import { IChildren } from './interfaces'

function Container({children} : IChildren) {
  return (
    <div className='w-[80%] m-auto'>
      {children}
    </div>
  )
}

export default Container