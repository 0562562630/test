"use client"
import React from 'react';

function Room() {
    return (
        <div className='max-w-screen-2xl mx-auto px-4'>
            <div className="flex justify-between w-full p-5">
                <div className="w-full">
                    <h1 className="text-2xl md:text-5xl md:text-left text-black mt-8 font-bold font-serif">
                        Our Best Rooms!
                    </h1>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                <div className='rounded-3xl bg-[url(/images/a13410ee.jpg)] bg-cover bg-center h-[50vh] md:h-[90vh] w-full'></div>
                <div className='rounded-3xl bg-[url(/images/e5bca9bc.jpg)] bg-cover bg-center h-[60vh] md:h-[90vh] w-full'></div>
                <div className='rounded-3xl bg-[url(/images/70184530.jpg)] bg-cover bg-center h-[50vh] md:h-[60vh] w-full'></div>
                <div className='rounded-3xl bg-[url(/images/00f9f543.jpg)] bg-cover bg-center h-[40vh] md:h-[60vh] w-full'></div>
            </div>
            
            <div className='bg-orange-100 p-4 rounded-2xl mt-6 flex items-center justify-center'>
    <div className='bg-[url(/images/e5bca9bc.jpg)] bg-cover bg-center h-[40vh] md:h-[60vh] lg:h-[75vh] w-full flex items-center justify-center'>
        <div className='bg-[url(/images/imageveedio.png)] bg-no-repeat bg-center h-[15vh] md:h-[20vh] w-full max-w-md mx-auto'></div>
    </div>
</div>








    
        </div>
    );
}

export default Room