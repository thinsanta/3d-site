import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='mt-[100vh]' >
            Projects
            <div className='flex flex-wrap justify-evenly gap-10 '>
                <div className='container w-[600px] h-fit rounded-lg'>  
                    <a className='w-full' href='https://kantur.se/' target='_blank'>
                        <img src={'./assets/kantur-home-min.png'} className='w-full' />
                    </a>
                    <span className='role text-4xl'>
                        Lead Web Developer
                    </span>
                    <div className='roleDesc hidden'>
                    Took a lead developing job to create a job-portal for customers to be
                    able to apply for roles.    
                    </div>             
                </div>
                <div className=' container w-[600px] h-fit rounded-lg'>  
                    <a className='w-full' href='https://vuejs-projects-2ad81.web.app/' target='_blank'>
                        <img src={'./assets/vue-live-chat-min.png'} className='w-full' />
                    </a>   
                    <span className='role text-4xl'>
                        Hobby Project
                    </span>
                    <div className='roleDesc hidden'>
                    Took a lead developing job to create a job-portal for customers to be
                    able to apply for roles.    
                    </div>             
                </div>
            </div>
        </div>
    )
}

export default Projects