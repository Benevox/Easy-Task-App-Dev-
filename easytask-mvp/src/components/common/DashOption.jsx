import React from "react";


function DashOption({ icon, jobType }) {
    return (
        <div className="flex flex-col gap-3 items-center">
            <div className="border border-primary-100 rounded-full p-3 w-16 h-16 grid place-items-center">
                <img src={icon} alt={jobType} />
            </div>
            <p className="text-xs font-bold">{jobType}</p>
        </div>
    );
}

export default DashOption