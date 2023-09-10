import React from 'react'

const MyIntro = () => {
  return (
    <>
    <div>
      <section className="bg-blue-200 text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">An Optimistic and Self Motivated guy
              <br className="hidden lg:inline-block" />with an insatiable thirst for knowledge and wisdom.
            </h1>
            <p className="mb-8 leading-relaxed">A Computer science student at National Institute of technology Jamshedpur.
              Coding Enthusiast, Developer, Rapper, Writer
              And I like making Vlogs. </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="K.png" />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900">My Education</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Currently I'm pursuing my Post Graduation degree in Computer Applications from NIT Jamshedpur.</p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className="text-indigo-500 w-13 h-13 mb-3 inline-flex">
                  <img src="National_Institute_of_Technology,_Jamshedpur_Logo.png" alt="Logo" />
                </div>
                <h2 className="title-font font-medium text-3xl text-gray-900">NIT Jamshedpur</h2>
                <p className="leading-relaxed">MCA</p>
                <p className="leading-relaxed">2023-2026</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className="text-indigo-500 w-15 h-15 mb-3 inline-block">
                  <img src="kmc logo.jpeg" alt="Logo" />
                </div>
                <h2 className="title-font font-medium text-3xl text-gray-900">Kirori Mal College, DU</h2>
                <p className="leading-relaxed">B.Sc.(Hons.) Chemistry</p>
                <p className="leading-relaxed m-1">7.9/10.0</p>
                <p className="leading-relaxed">2020-2023</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className="text-indigo-500 w-13 h-auto mb-3 inline-block">
                  <img src="dpsLogo.png" alt="Logo" />
                </div>
                <h2 className="title-font font-medium text-2xl text-gray-900">DPS Maruti Kunj, Gurugram</h2>
                <p className="leading-relaxed">12th - PCM</p>
                <p className="leading-relaxed m-1">95.33%</p>
                <p className="leading-relaxed">2020</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className="text-indigo-500 w-13 h-auto mb-3 inline-block">
                  <img src="dpsLogo.png" alt="Logo" />
                </div>
                <h2 className="title-font font-medium text-2xl text-gray-900">DPS Mewat Model School, Nuh</h2>
                <p className="leading-relaxed">1oth</p>
                <p className="leading-relaxed m-1">92%</p>
                <p className="leading-relaxed">2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <hr className='my-14'/>
    </>
  )
}

export default MyIntro
