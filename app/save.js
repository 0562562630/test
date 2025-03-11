"use client";
import React from 'react';

function Save() {
    return (
        <div className='bg-[#BB8012] rounded-lg w-full max-w-md h-auto mx-auto flex flex-col mt-8 p-4'>
            <p className="text-white text-3xl text-center my-6">
                Save Time & Save Money
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <input
                    name="query"
                    className="rounded-lg w-full md:w-7/12 p-2"
                    placeholder='Type Your Email'
                />
                <div className="bg-[#4B443E] rounded-lg text-md w-full md:w-1/3 h-[6vh] flex items-center justify-center">
                    <h1 className="text-white text-lg">
                        Subscribe Now
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Save;