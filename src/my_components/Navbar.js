import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header class="text-gray-600 body-font bg-beige-secondry">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 font-bold text-xl">Ahmad .</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link class="mr-5 hover:text-gray-900" to="/" >Home</Link>
            <Link class="mr-5 hover:text-gray-900" to="about" >About Me</Link>
            <Link class="mr-5 hover:text-gray-900" to="Projects" >Projects</Link>
            <Link class="mr-5 hover:text-gray-900" to="Rapping" >Hobbies</Link>
            <Link class="mr-5 hover:text-gray-900" to="Contact" >Contact Me</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
