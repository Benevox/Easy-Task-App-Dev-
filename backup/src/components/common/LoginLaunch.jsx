import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logoblue.png'
import highfive from '../../assets/images/highfive.svg'


function LoginLaunch() {
  return (
    <div className="container bg-white h-screen w-screen p-5 grid place-items-center">
      <div className='w-100 p-5 grid place-items-center'>
        <img src={logo} alt="Easytask logo" />
      </div>
      <div>
        <img src={highfive} alt="high five illustration" />
      </div>
      <div>
        <h3 className='font-bold text-2xl -mt-6'>Get all your Jobs done with Trusted tasker for the Job.</h3>
      </div>
      <div className='w-100 h-14 bg-primary-100 rounded-xl mt-3 grid place-items-center min-w-full'>
        <Link to={"/login"}>
          <span className='text-xl text-basic-white font-bold'>Login</span></Link>
      </div>
      <div className='w-100 h-14 border border-primary-100 rounded-xl grid place-items-center min-w-full'>
        <Link to={"/signup"}><span className='text-xl text-primary-100 font-bold'>Signup</span></Link>
      </div>
    </div>
  )
}

export default LoginLaunch