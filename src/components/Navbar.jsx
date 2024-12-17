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
          <div className='flex right-0 absolute mr-36 gap-6'>
            <a href='https://github.com/thinsanta' target='_blank'>
              <img className='w-[40px] h-[40px]' src={GithubLogo} />
            </a>
            <a href='https://www.linkedin.com/in/fatlum-haliti-5a9b4170/' target='_blank'>
              <img className='w-[45px] h-[40px]' src={'./assets/linkedin.png'} />
            </a>
        </div>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar