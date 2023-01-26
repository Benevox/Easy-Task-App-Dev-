import React from 'react'
import DashHeader from '../../components/common/DashHeader'
import profilePic from '../../assets/images/profilepics.png'
import postPlus from "../../assets/icons/postplus.svg"
import DashOption from '../../components/common/DashOption'
import brush from '../../assets/icons/brush.svg'
import cake from '../../assets/icons/cake.svg'
import repair from '../../assets/icons/cake.svg'
import cook from '../../assets/icons/cake.svg'
import recommend from '../../assets/images/recommend.png'
import profile from '../../assets/icons/profile.svg'
import chat from '../../assets/icons/message-text.svg'
import search from '../../assets/icons/search-normal.svg'
import task from '../../assets/icons/task-square.svg'
import home from '../../assets/icons/home.svg'

function Dashboard() {
    return (
        <div className='container h-screen w-screen flex flex-col'>
            <DashHeader name={"John Odey"} profilePic={profilePic} />
            <h1 className='text-4xl p-5'>Work less, Let’s <br />
                <span className='font-bold'>Get your Job Done.</span></h1>
            <div className='bg-primary-100 m-5 flex gap-4 p-5 rounded-xl'>
                <img src={postPlus} alt='plus icon' />
                <span className='font-bold text-2xl text-basic-white'>Post my Job</span>
            </div>
            <div className='flex flex-row gap-5 p-5'>
                <DashOption icon={repair} jobType={"Repair Laptop"} />
                <DashOption icon={cook} jobType={"Cooking"} />
                <DashOption icon={cake} jobType={"Baker"} />
                <DashOption icon={brush} jobType={"Painting"} />
            </div>
            <div className='flex flex-row p-5'>
                <img src={recommend} alt='recommend' />
            </div>
            <div className='fixed bottom-0 w-full h-26 flex justify-around py-5 border-t-2 border-light-line'>
                <div className='flex flex-col gap-1 items-center'>
                    <img src={home} alt="home icon" className='w-6 h-6' />
                    <span className='text-primary-100 text-xs'>Home</span>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <img src={task} alt="task icon" className='w-6 h-6' />
                    <span className='text-soft-dark text-xs font-bold '>My Jobs</span>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <img src={search} alt="search icon" className='w-6 h-6' />
                    <span className='text-soft-dark text-xs font-bold '>Search</span>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <img src={chat} alt="chat icon" className='w-6 h-6' />
                    <span className='text-soft-dark text-xs font-bold '>Chat</span>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <img src={profile} alt="profile icon" className='w-6 h-6' />
                    <span className='text-soft-dark text-xs font-bold '>Pofile</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard