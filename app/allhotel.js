"use client"
import React from 'react';
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretCircleLeftLight } from "react-icons/pi";
import { PiCaretCircleRight } from "react-icons/pi";

function AllHotel() {
    return (
        <div className='max-w-screen-2xl mx-auto p-5'>
            <div className="flex flex-wrap justify-between items-center w-full mb-6">
                <h1 className="text-2xl md:text-5xl font-bold font-serif text-black md:text-left flex-1">
                    Featured Hotels in Riyadh!
                </h1>
                <div className="flex space-x-4">
                    <PiCaretCircleLeftLight  className="text-orange-300  cursor-pointer lg:text-5xl md:text-4xl sm:text-3xl text-3xl"/>
                    <PiCaretCircleRight  className="text-gray-500 cursor-pointer  lg:text-5xl md:text-4xl sm:text-3xl text-3xl"/>
                </div>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
    {["imageRREEDD.png", "med.png", "imagejj.png"].map((image, index) => (
        <div key={index} className='relative pt-[150%] rounded-3xl overflow-hidden h-70 bg-cover bg-center' 
            style={{ backgroundImage: `url(/images/${image})` }}>
            <div className='absolute bottom-4 w-4/5 bg-white p-4 rounded-3xl mx-10'>
                <h1 className="text-gray-500 font-serif">
                    {index === 1 ? "Medina" : index === 2 ? "Jeddah" : "Riyadh"}
                </h1>
                <h2 className="text-xl font-bold font-serif">Al-Raha Hotel</h2>
                <h3 className="text-black font-serif">300+ Per Night | See More</h3>
                <div className="absolute right-4 bottom-6 text-gray-700">
                    <PiCaretRightBold size={20} />
                </div>
            </div>
        </div>
    ))}
</div>
        </div>
    );
}

export default AllHotel;
