import React from 'react'
import notification from '../../assets/icons/notification.svg'

function DashHeader({ name, profilePic }) {
    return (
        <header className="bg-gray-800 p-3 flex justify-between items-center">
            <div className='flex flex-row items-center gap-5'>
                <img src={profilePic} alt="Profile" className="w-12 h-12 rounded-full" />
                <h1 className="text-white font-medium">{name}</h1>
            </div>
            <div className="relative">
                <button className="bg-transparent rounded-full p-2">
                    <img src={notification} alt="notification bell" />
                </button>
            </div>
        </header>
    )
}

export default DashHeader