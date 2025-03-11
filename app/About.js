"use client";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function About() {
    return (
        <div className='max-w-full mx-auto py-8 px-4 relative bg-black'>

            <div className="flex flex-col md:flex-row bg-[#F5ECDB] rounded-t-lg w-full mx-auto max-w-screen-2xl mt-8 bg-slate-500">

                <div className="flex flex-col items-center w-full md:w-1/2 p-4">
                    <div className="text-[#BB8012] text-2xl font-serif font-bold">
                        About Us
                    </div>
                    <div className="text-black text-xl my-4">
                        <ul className='list-disc list-inside'>
                            <li>Name: Alraha Hotel.</li>
                            <li>Location: Riyadh.</li>
                        </ul>
                        <div className="flex justify-center space-x-4 my-6">
                            <FaFacebook className='text-[#BB8012] text-2xl' />
                            <FaTwitter className='text-[#BB8012] text-2xl' />
                            <FaInstagram className='text-[#BB8012] text-2xl' />
                            <FaWhatsapp className='text-[#BB8012] text-2xl' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-full md:w-1/2 p-4 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="text-[#BB8012] text-2xl text-center">
                        <div className='font-serif font-bold'>Offers</div>
                        <div className="text-black my-4 flex flex-col space-y-2">
                            <Link href="/">Payment</Link>
                            <Link href="/">Pricing</Link>
                            <Link href="/">Subscription</Link>
                            <Link href="/">Customers</Link>
                            <Link href="/">Reviews</Link>
                        </div>
                    </div>

                    <div className="text-[#BB8012] text-2xl text-center">
                        <div className='font-serif font-bold'>Company</div>
                        <div className="text-black my-4 flex flex-col space-y-2">
                            <Link href="/">About Us</Link>
                            <Link href="/">Recent News</Link>
                            <Link href="/">Contact Us</Link>
                            <Link href="/">Conditions</Link>
                            <Link href="/">Reviews</Link>
                        </div>
                    </div>

                    <div className="text-[#BB8012] text-2xl text-center">
                        <div className='font-serif font-bold'>City</div>
                        <div className="text-black my-4 flex flex-col space-y-2">
                            <Link href="/">Riyadh</Link>
                            <Link href="/">Medina</Link>
                            <Link href="/">Jeddah</Link>
                            <Link href="/">Makka</Link>
                            <Link href="/">Alula</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#BB8012] p-6 text-black max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between'>
                <div className="text-black text-lg mb-4 md:mb-0">
                    Copyright@2025. All Rights Reserved Boarding
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