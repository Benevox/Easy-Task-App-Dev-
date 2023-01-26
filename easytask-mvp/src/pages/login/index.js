import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logoblue.png'
import facebook from '../../assets/images/facebook.png'
import google from '../../assets/images/google.png'
import AuthContext from '../../contexts/AuthContext';



function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        login(data);
    };

    return (
        <div className="container bg-white h-screen w-screen p-5">
            <div className='w-100 p-5 grid place-items-end'>
                <img src={logo} alt="Easytask logo" />
            </div>
            <div className='mt-24'>
                <h1 className='text-darkest text-2xl font-bold'>Welcome</h1>
                <p className='text-dark-light'>Login into your account to get started</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} type="email" className='min-w-full h-14 border rounded-xl mt-9 p-3 border-stroke' placeholder='Email' />
                <input {...register("password")} type="password" className='min-w-full h-14 border rounded-xl mt-6 p-3 border-stroke' placeholder='Password' />
                <div className='min-w-full mt-4 flex justify-between'>
                    <span><input type={"checkbox"} />
                        <span className='ml-2 text-soft-dark'>Remember me</span></span>

                    <Link to={"/"} className="font-bold">Forgot Password?</Link>
                </div>
                <button type={"submit"} className="w-100 h-14 bg-primary-100 rounded-xl mt-7 grid place-items-center min-w-full text-basic-white font-bold" placeholder='Login'>Login</button>
            </form>
            <div className='min-w-full mt-2 flex justify-center'>
                <span className='text-soft-dark'>Not a member? </span><Link to={"/signup"} className='font-bold ml-1'>Register now</Link>
            </div>
            <fieldset class="border-t border-soft-dark mt-3">
                <legend class="mx-auto px-4 text-soft-dark">or Continue with</legend>
            </fieldset>
            <div className='grid grid-cols-2 gap-2 mt-4'>
                <Link>
                    <img src={facebook} alt="facebook logo" />
                </Link>
                <Link>
                    <img src={google} alt="google logo" />
                </Link>
            </div>
            <div className='mt-5 min-w-full'><p className='text-center text-soft-dark'>By Logging in, i agree to Easytask <Link className='text-facebook'>Terms</Link> & <Link className='text-facebook'>Conditions</Link>  & <Link className='text-facebook'>community guideline</Link> Privacy policy.</p></div>
        </div>
    )
}

export default Login