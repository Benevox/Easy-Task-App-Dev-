import React from 'react'
import { Link } from 'react-router-dom';
import group from '../../assets/images/group.png'

function Onboard() {

    return (
        <div className="container bg-white h-screen w-screen p-5 grid place-items-center">
            <div className="container bg-white h-screen w-screen p-5">
                <h1 className="text-2xl font-black text-darkest my-5">Hello Favour, Let’s get your jobs done!</h1>
                <p className='text-soft-dark my-5'>Setup your profile with your correct details so taskers know who offering their service to. </p>
                <div className='min-w-full h-16 flex justify-end'>
                    <div className='bg-primary-100 rounded-xl h-10 w-32 grid place-items-center'>
                        <Link className='text-basic-white font-bold text-xl'>
                            Continue >
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={group} alt="personal girl illustration" />
                </div>

            </div>
        </div>);
};

export default Onboard