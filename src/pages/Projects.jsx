import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='mt-[100vh]' >
            Projects
            <div className='flex flex-wrap justify-evenly'>
                <div className='w-[600px] h-fit bg-white rounded-lg'>  
                    <a className='w-full' href='https://vuejs-projects-2ad81.web.app/' target='_blank'>
                        <img src={'./assets/kantur-home-min.png'} className='w-full' />
                    </a>                  
                </div>
                <div className='w-[600px] h-fit bg-white rounded-lg'>  
                    <a className='w-full' href='https://vuejs-projects-2ad81.web.app/' target='_blank'>
                        <img src={'./assets/vue-live-chat-min.png'} className='w-full' />
                    </a>                  
                </div>
            </div>
        </div>
    )
}

export default Projects