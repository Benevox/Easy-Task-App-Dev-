import React from 'react'
import { Link } from 'react-router-dom'
import girl from '../../assets/images/girl.png'

function Onboarding() {
  return (
    <div className="container bg-white h-screen w-screen p-7 flex flex-col justify-around">
      <div className='flex flex-row gap-2'>
        <div className={`w-9 h-2 rounded-full bg-primary-100`}></div>
        <div className={`w-9 h-2 rounded-full bg-soft-dark`}></div>
        <div className={`w-9 h-2 rounded-full bg-soft-dark`}></div>
        <div className={`w-9 h-2 rounded-full  bg-soft-dark`}></div>
      </div>
      <h1 className="text-2xl font-black text-darkest my-7">Hello Favour, Let’s get your jobs done!</h1>
      <p className='text-soft-dark my-5'>Setup your profile with your correct details so taskers know who offering their service to. </p>
      <div className='min-w-full h-16 flex justify-end'>
        <div className='bg-primary-100 rounded-xl h-15 w-34 grid place-items-center'>
          <Link to={"/onboarding/one"} className='text-basic-white font-bold text-xl p-3'>Continue</Link>
        </div>
      </div>
      <div>
        <img src={girl} alt="personal girl illustration" />
      </div>
    </div>
  )
}

export default Onboarding