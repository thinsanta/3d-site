import React from 'react'

const About = () => {

  return (
    <section id='about' className='mt-11 text-4xl mx-auto w-full h-[120vh]'>
      <div className='w-fit mx-auto'>
        About me
      </div>
      <div className='text-2xl text-gray-400 mx-auto mt-24 flex w-full justify-center align-middle gap-x-5'>
        <div className="w-[300px] h-[300px] overflow-hidden rounded-full">

          <img src={'./assets/self_portrait.jpg'}>
          </img>
        </div>
        <div className='w-[650px]'>
          I'm a skilled developer who likes to think outside the box. I can deliver high quality code while also being the one
          who came up with the idea for an improvement. If you want someone who only centers a div then I am not your guy, I am the on who will center that div
          but I will also create a CI/CD pipeline for the project. My passion is being a flexible colleague who works on the best stack for the project
          so we can deliver something special together.

          <div className='mt-4'>
            Dont't wait, contact me now and have a coffee/tea with me!
          </div>
        </div>

      </div>
      <div className='flex justify-around w-full mt-32 align-middle'>
        <div>
          <div>
            Primary skills
          </div>
          <div className='flex flex-col gap-4 flex-wrap h-72 gap-x-14 mt-12'>
            <span className=' text-base bg-red-500 px-3 py-1 items-center rounded-md w-fit'>
              Javascript
            </span>
            <span className='text-base bg-emerald-500  px-3 py-1 items-center rounded-md w-fit'>
              HTML / CSS
            </span>
            <span className='text-base bg-blue-500  px-3 py-1 items-center rounded-md w-fit'>
              React
            </span>
            <span className='text-base bg-indigo-500 px-3 py-1 items-center rounded-md w-fit'>
              Google Cloud
            </span>
            <span className='text-base bg-yellow-500 px-3 py-1 items-center rounded-md w-fit'>
              AWS
            </span>
            <span className='text-base bg-green-500 px-3 py-1 items-center rounded-md w-fit'>
              DevOps
            </span>
            <span className='text-base bg-orange-500 px-3 py-1 items-center rounded-md w-fit'>
              Typescript
            </span>
            <span className='text-base bg-pink-500 px-3 py-1 items-center rounded-md w-fit'>
              Git
            </span>
            <span className='text-base bg-yellow-500 px-3 py-1 items-center rounded-md w-fit'>
              Docker
            </span>
            <span className='text-base bg-gray-500  px-3 py-1 items-center rounded-md w-fit'>
              Nodejs
            </span>
            <span className='text-base bg-rose-500  px-3 py-1 items-center rounded-md w-fit'>
              Golang
            </span>
            <span className='text-base bg-cyan-500  px-3 py-1 items-center rounded-md w-fit'>
              React Native
            </span>
          </div>

        </div>
        <div>
          <div>
            Secondary skills
          </div>
          <div className='flex flex-col gap-4 flex-wrap h-72 gap-x-14 mt-12'>
            <span className='text-base bg-emerald-500  px-3 py-1 items-center rounded-md w-fit'>
              Vuejs
            </span>
            <span className='text-base bg-blue-500  px-3 py-1 items-center rounded-md w-fit'>
              Azure
            </span>
            <span className='text-base bg-orange-500  px-3 py-1 items-center rounded-md w-fit'>
              AI
            </span>
            <span className='text-base bg-gray-500  px-3 py-1 items-center rounded-md w-fit'>
              PHP
            </span>
            <span className='text-base bg-yellow-500  px-3 py-1 items-center rounded-md w-fit'>
              MySQL
            </span>
            <span className='text-base bg-indigo-500  px-3 py-1 items-center rounded-md w-fit'>
              Java / Kotlin
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About