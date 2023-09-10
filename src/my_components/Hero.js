import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font  h-screen" >
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="mypic.jpg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi, I am Ahmad Kaif
                            <br className="hidden lg:inline-block " /> Coder, Developer, Rapper & Youtuber
                        </h1>
                        <p className="mb-8 leading-relaxed">Code, Rap, and a Zeal for Learning: Embracing Boundless Creativity with Optimism. A self-motivated coder and aspiring rapper, on a relentless quest for knowledge and growth. Join me on this journey of limitless possibilities!"</p>
                        <div className="flex justify-center">
                            <button className="ml-4 inline-flex border-2 border-rose-600 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"> 
                            <a href="Front-End Resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded">
                                See my Resume
                            </a> </button>
                            <button className="ml-4 inline-flex border-2 border-rose-600 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            <a href="www.linkedin.com/in/ahmadkaif" 
                               target="_blank"
                               rel="noopener noreferrer"
                               className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded">
                                Connect With Me
                            </a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}

export default Hero
