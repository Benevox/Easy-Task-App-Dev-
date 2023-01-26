import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Onboard({ headText, bodyText, illustrator, proceed, progress }) {

    const navigate = useNavigate();

    return (
        <div className="container bg-white h-screen w-screen p-5 flex flex-col justify-around">
            <div className='flex flex-row gap-2'>
                <div className={`w-9 h-2 rounded-full ${progress === 'one' ? "bg-primary-100" : "bg-soft-dark"}`}></div>
                <div className={`w-9 h-2 rounded-full ${progress === 'two' ? "bg-primary-100" : "bg-soft-dark"}`}></div>
                <div className={`w-9 h-2 rounded-full ${progress === 'three' ? "bg-primary-100" : "bg-soft-dark"}`}></div>
                <div className={`w-9 h-2 rounded-full ${progress === 'four' ? "bg-primary-100" : "bg-soft-dark"}`}></div>
            </div>
            <div>
                <h1 className="text-2xl font-black text-darkest my-5">{headText}</h1>
                <p className='text-soft-dark my-5'>{bodyText}</p>
            </div>
            <div className='min-w-full h-16 flex justify-between'>
                <div className='rounded-xl h-15 w-32 grid place-items-center border'>
                    <Link className='font-bold text-xl' to={navigate(-1)}>
                        Back
                    </Link>
                </div>
                <div className='bg-primary-100 rounded-xl h-15 w-32 grid place-items-center'>
                    <Link className='text-basic-white font-bold text-xl' to={proceed ? `/onboarding/${progress}` : `/dashboard`}>
                        {proceed ? "Continue" : "Get Started"}
                    </Link>
                </div>
            </div>
            <div className='mt-10'>
                <img src={illustrator} alt="personal girl illustration" />
            </div>

        </div>);
};

export default Onboard