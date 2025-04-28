"use client";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { CiFacebook, CiTwitter, CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

function About() {
    return (
        <div className='max-w-full w-full mx-auto py-10 px-4 relative'>
            <div className="flex flex-col md:flex-row justify-between bg-[#F5ECDB] rounded-t-lg w-full mx-auto max-w-screen-2xl mt-8 p-6">
                <div className="flex flex-col w-full md:w-1/2 space-y-6">
                    <div className="text-[#BB8012] text-2xl">
                        <div className="flex items-center justify-center sm:justify-center md:justify-start">
                            <div className="lg:size-6 md:size-5 sm:size-4 size-4 bg-[#4B443E] rounded-full mr-2" />
                            <div className='font-serif font-bold'>Boarding</div>
                        </div>
                        <div className=" flex flex-col items-center md:items-start mt-2">
                            <div className='font-Fustat list-disc flex items-center justify-center sm:justify-center md:justify-start'>
                                <div className="flex justify-center md:justify-start items-center space-x-1 mt-2 mb-4 mr-11">
                                    <CiLocationOn className='text-[#BB8012] text-2xl' />
                                    <button className="font-bold text-black text-center cursor-pointer sm:text-md md:text-xl flex items-center justify-center transition duration-300 ease-in-out hover:bg-[#BB8012] hover:text-white">
                                        Riyadh
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-4 mt-2 mb-4">
                            <CiFacebook className='text-[#BB8012] text-2xl' />
                            <FaXTwitter className='text-[#BB8012] text-2xl' />
                            <FaInstagram className='text-[#BB8012] text-2xl' />
                            <FaWhatsapp className='text-[#BB8012] text-2xl' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:w-md space-x-0 md:space-x-28">
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
                            <Link href="/" className="">Alula</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#BB8012] p-6 text-black max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="text-black text-lg text-center md:text-left mb-4 md:mb-0">
                    Copyright © 2025. All Rights Reserved Boarding
                </div>
                <div className="flex items-center text-center">
                    <div className="text-black text-lg">Privacy Policy</div>
                    <div className="mx-2"> | </div>
                    <div className="text-black text-lg">Terms & Conditions</div>
                </div>
            </div>
        </div>
    );
}

export default About;