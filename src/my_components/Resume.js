import React from 'react'

const Resume = () => {
  return (
    <>
     <div className='h-screen'>
      <a
        href="Front-End Resume.pdf" // Replace with the actual path to your resume PDF file
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click here to see my Resume 
      </a>
    </div>
    </>
  )
}

export default Resume
