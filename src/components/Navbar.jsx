import React from 'react'
import { Link } from 'react-scroll'
import GithubLogo from '../assets/github-mark-white.svg'

const Navbar = () => {

  const aboutMe =  () =>{
    console.log("clicked about me")
  }
  return (
    <div className=' relative mx-[auto] left-0 right-0 z-50'>
      <nav className='py-10 text-3xl'>
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
          <div className='flex right-0 absolute mr-36 gap-3'>
          <img className='w-[40px] h-[40px]' src={GithubLogo} />
          <img className='w-[45px] h-[40px]' src={'./assets/linkedin.png'} />
        </div>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar