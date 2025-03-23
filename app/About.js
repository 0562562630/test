"use client";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function About() {
    return (
        <div className='max-w-full w-full mx-auto py-10 px-4 relative'>

            <div className="flex flex-col md:flex-row justify-between bg-[#F5ECDB] rounded-t-lg w-full mx-auto max-w-screen-2xl mt-8 p-6">
                <div className="flex flex-col w-full md:w-1/2 space-y-6">
                    <div className="text-[#BB8012] text-2xl">
                        <div className='font-serif font-bold'>About Us</div>
                        <div className="text-black text-xl my-4">
                            <ul className='list-disc pl-5'>
                                <li>Name: Alraha Hotel.</li>
                                <li>Location: Riyadh.</li>
                            </ul>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <FaFacebook className='text-[#BB8012] text-2xl' />
                            <FaTwitter className='text-[#BB8012] text-2xl' />
                            <FaInstagram className='text-[#BB8012] text-2xl' />
                            <FaWhatsapp className='text-[#BB8012] text-2xl' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:w-1/2 space-x-0 md:space-x-12">
                    <div className="text-[#BB8012] text-2xl text-center mb-6">
                        <div className='font-serif font-bold'>Offers</div>
                        <div className="text-black my-4 flex flex-col space-y-2">
                            <Link href="/" className="">Payment</Link>
                            <Link href="/" className="">Pricing</Link>
                            <Link href="/" className="">Subscription</Link>
                            <Link href="/" className="">Customers</Link>
                            <Link href="/" className="">Reviews</Link>
                        </div>
                    </div>

                    <div className="text-[#BB8012] text-2xl text-center mb-6">
                        <div className='font-serif font-bold'>Company</div>
                        <div className="text-black my-4 flex flex-col space-y-2">
                            <Link href="/" className="">About Us</Link>
                            <Link href="/" className="">Recent News</Link>
                            <Link href="/" className="">Contact Us</Link>
                            <Link href="/" className="">Conditions</Link>
                            <Link href="/" className="">Reviews</Link>
                        </div>
                    </div>

                    <div className="text-[#BB8012] text-2xl text-center mb-6">
                        <div className='font-serif font-bold'>City</div>
                        <div className="text-black my-4 flex flex-col space-y-2">
                            <Link href="/" className="">Riyadh</Link>
                            <Link href="/" className="">Medina</Link>
                            <Link href="/" className="">Jeddah</Link>
                            <Link href="/" className="">Makkah</Link>
                            <Link href="/" className="">AlUla</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#BB8012] p-6 text-black max-w-screen-2xl mx-auto flex justify-between items-center'>
                <div className="text-black text-lg">
                    Copyright © 2025. All Rights Reserved Boarding
                </div>
                <div className="flex space-x-6">
                    <div className="text-black text-lg">Privacy Policy</div>
                    <div className="text-black text-lg">Terms & Conditions</div>
                </div>
            </div>
        </div>
    );
}

export default About;