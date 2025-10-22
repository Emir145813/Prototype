import Link from 'next/link'
import React from 'react'

function NavBarUnextended() {
  return (
    <div className='inline md:hidden'>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
        </div>
        <ul
          tabIndex={-1}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <Link href={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/callus'}>
              Call US
            </Link>
          </li>
          <li>
            <Link href={'/aboutus'}>
              About US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBarUnextended