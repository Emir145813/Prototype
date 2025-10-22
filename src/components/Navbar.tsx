import React from 'react'
import { ModeToggle } from './ModeToggle'
import SearchBar from './ui/SearchBar'
import NavBarUnextended from './NavBar/NavBarUnextended'
import NavBarExtended from './NavBar/NavBarExtended'

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
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
    </>
  )
}

export default Navbar