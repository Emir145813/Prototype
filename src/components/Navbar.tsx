import React from 'react'
import { ModeToggle } from './ModeToggle'
import SearchBar from './ui/SearchBar'
import NavBarUnextended from './NavBar/NavBarUnextended'
import NavBarExtended from './NavBar/NavBarExtended'
import Container from './container'

function Navbar() {
  return (
    <div className='bg-base-100 py-5'>
      <div className="navbar shadow-sm w-[80%] mx-auto">
        <div className="navbar-start">
          <div className='flex items-center'>
            <NavBarUnextended/>
            <NavBarExtended/>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Insert Branding Logo Here</a>
        </div>
        <div className="navbar-end flex gap-2">
          <SearchBar/>
          <ModeToggle/>
        </div>
      </div>
    </div>
  )
}

export default Navbar