import React from 'react'

const Testimonials = () => {
    return (
        <div id='testimonials' className='mt-11 text-4xl mx-auto w-full mb-24 pb-48'>
            <div className='w-fit mx-auto'>
                Testimonials
            </div>
            <div className='text-2xl text-gray-400 flex justify-evenly gap-x-14 mt-32 mx-auto'>
                <div>

                    <div className='w-[650px] h-[450px] overflow-hidden '>
                        <div className='flex gap-x-6'>
                            <div className="w-[80px] h-[80px] overflow-hidden rounded-full">

                                <img src={'./assets/niclas.jpg'}>
                                </img>
                            </div>
                            <div className=''>
                                <div className='text-white fatlum'>
                                    Niclas Bjuväng
                                </div>
                                <div className='text-base text-gray-400'>
                                    VP Engineering
                                </div>
                            </div>

                        </div>
                        <div className='mt-4'>
                            "Fatlum was my first employee in the Software Lab. When he stepped into the office two years ago i could never imagine his strong capabilities and collaborative skills. It didnt matter if he worked on a LLM project, a Unity/Unreal/3D project or web project, he would always dive into any context and create real value.

                            I highly recommend Fatlum to any future employer that is lucky enough to hire him."
                        </div>
                    </div>
                    <div className='w-[650px] h-[450px] overflow-hidden '>
                        <div className='flex gap-x-6'>
                            <div className="w-[80px] h-[80px] overflow-hidden rounded-full">

                                <img src={'./assets/magnus.jpg'}>
                                </img>
                            </div>
                            <div className=''>
                                <div className='text-white fatlum'>
                                    Magnus Nilsson
                                </div>
                                <div className='text-base text-gray-400'>
                                    Digital Architect and Advisor
                                </div>
                            </div>

                        </div>
                        <div className='mt-4'>
                            "I worked in the same group as Fatlum for about 1.5 years doing jobtech innovation in a fast paced setting.

                            In my experience Fatlum works with a lot of heart and drive. He is social and really good as a team member, and he is always willing to step up when needed.

                            On the tech side of things I have seen Fatlum do develop prototypes in various tech, ranging from 3D models to hardware configuration to web sites on serverless cloud. He is curious and quickly adapts, and always have ideas and perspectives on things which is a useful skill in my mind at least."
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-[650px] h-[450px] overflow-hidden '>
                        <div className='flex gap-x-6'>
                            <div className="w-[80px] h-[80px] overflow-hidden rounded-full">

                                <img src={'./assets/avatar.png'}>
                                </img>
                            </div>
                            <div className=''>
                                <div className='text-white fatlum'>
                                    Knut Mårtensson
                                </div>
                                <div className='text-base text-gray-400'>
                                    CEO - MiThings
                                </div>
                            </div>

                        </div>
                        <div className='mt-4'>
                            "Fatlum har tagit sig an sina uppgifter med stort intresse och engagemang.
                            Vi är nöjda med Fatlum som tagit eget ansvar, initiativ och visat god samarbetsförmåga.
                            Vi vill därför ge honom våra bästa rekommendationer."
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials