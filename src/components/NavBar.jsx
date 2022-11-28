import React from 'react'
import Logout from './Logout'

function NavBar() {
  return (
    <div className="flex flex-row h-12 md:h-10 justify-end items-center mx-2">
      <Logout />
    </div>
  )
}

export default NavBar
