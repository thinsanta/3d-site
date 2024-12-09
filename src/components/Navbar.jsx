import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

  const aboutMe =  () =>{
    console.log("clicked about me")
  }
  return (
    <div className=' relative mx-[auto] left-0 right-0 z-50'>
      <nav className='py-10 text-2xl'>
        <ul className='flex justify-center'>
          <li className='mx-5 justify-center'>
            <Link activeClass='active' smooth spy to='home'>
              Home
            </Link>
          </li>
          <li className='mx-5 justify-center'>
            <Link activeClass='active' smooth spy to='projects'>
              Projects
            </Link>
          </li>
          <li className='mx-5 justify-center'>
            <Link activeClass='active' smooth spy to='about' onClick={aboutMe}>
              About Me
            </Link>
          </li>
          <li className='mx-5 justify-center'>
            <Link activeClass='active' smooth spy to='contact'>
              Contact Me
            </Link>
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar