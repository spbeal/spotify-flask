import React from 'react'
// import Uidaho from '../../assets/universityofidaho.png'
// import GRC from '../../assets/10996469_web1_4002128_web1_logo-grc.jpg'


 function logSome  () {
  return (
    console.log("Hello world!")
  )
}

const Learn = () => {
  return (
    <div name='learn' className='w-full h-screen bg-white'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full md:text-center'>
        <div>
          <p className=" mt-2 mb-3 text-2xl pt-1 font-extrabold tracking-tight text-text-color sm:text-4xl flex">  We learning boys </p>
        </div>
      </div>
    </div>
  )
}

export default Learn