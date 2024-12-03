import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='py-10 text-2xl'>
      <ul className='flex justify-center'>
        <li className='mx-5 justify-center'>
          <Link activeClass='active' smooth spy to='home'>
            Home
          </Link>
        </li>
        <li className='mx-5 justify-center'>
          <Link activeClass='active' smooth spy to='about'>
            About
          </Link>
        </li>
        <li className='mx-5 justify-center'>
        <Link activeClass='active' smooth spy to='projects'>
            Projects
          </Link>
        </li>
        <li className='mx-5 justify-center'>
          <Link activeClass='active' smooth spy to='contact'>
            Contact me
          </Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar