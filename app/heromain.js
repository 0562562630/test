"use client";
import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import Link from "next/link";

function Hero() {
   const slides = [
      { url: '/images/image1.png' },
      { url: '/images/image2.png' },
      { url: '/images/image3.png' },
   ];

   const [currentIndex, setCurrentIndex] = useState(0);
   const [menuOpen, setMenuOpen] = useState(false);

   const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
   };

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <div className='max-w-full h-[700px] w-full mx-auto py-1 px-4 relative my-1 font-serif'>
         <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full bg-center bg-cover duration-500 flex flex-col justify-between'
         >
            {/* Navbar */}
            <nav className="relative p-5  mx-auto flex justify-between items-center md:w-full">
               <Link href="/">
                  <div className="flex items-center hover:text-slate-500">
                     <div className="size-4 bg-slate-600 rounded-full"></div>
                     <h1 className="text-xl font-bold">Boarding</h1>
                  </div>
               </Link>

               {/* زر القائمة الجانبية (يظهر فقط في الشاشات الصغيرة والمتوسطة) */}
               <div className="md:hidden">
                  <button onClick={toggleMenu} className="text-white text-2xl">
                     ☰
                  </button>
               </div>

               {/* روابط القائمة - تظهر فقط في الشاشات الكبيرة */}
               <div className="hidden md:flex space-x-6 text-black ">
                  <Link href="/">Home</Link>
                  <Link href="#room">Room</Link>
                  <Link href="#contact">Contact</Link>
                  <Link href="#blog">Blog</Link>
                  <Link href="#about">About</Link>
               </div>

               <button className="hidden md:block bg-[#BB8012] text-white rounded-full py-2 px-6">
                  Book Now
               </button>
            </nav>

            {/* القائمة الجانبية - تظهر فقط عند الضغط في الشاشات الصغيرة والمتوسطة */}
            <div className={`absolute top-16 left-0 w-full bg-white text-black flex flex-col items-center space-y-6 py-5 transition-transform duration-300 ${menuOpen ? "block" : "hidden"} md:hidden`}>
               <Link href="/" onClick={toggleMenu}>Home</Link>
               <Link href="#room" onClick={toggleMenu}>Room</Link>
               <Link href="#contact" onClick={toggleMenu}>Contact</Link>
               <Link href="#blog" onClick={toggleMenu}>Blog</Link>
               <Link href="#about" onClick={toggleMenu}>About</Link>
               <button className="bg-[#BB8012] text-white rounded-full py-2 px-6">
                  Book Now
               </button>
            </div>

            {/* المحتوى الرئيسي */}
            <div className="flex flex-col justify-end w-full p-5 max-w-screen-2xl mx-auto space-y-6">
               <h1 className="font-bold tracking-tighter text-center text-white lg:text-6xl md:text-4xl sm:text-2xl">
                  Find your Hotel & Many More, Touch The Dream!
               </h1>
               <p className="text-lg text-black text-center">
                  "Al-Raha Hotel" offers comfortable rooms and recreational facilities, making it ideal for stays.
               </p>
               <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
                  <button className="bg-white text-gray-500 rounded-full py-2 px-10 text-center cursor-pointer md:text-xl flex items-center justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                     </svg>
                     Location
                  </button>
                  <button className="bg-white text-gray-500 rounded-full py-2 px-10 text-center cursor-pointer md:text-xl flex items-center justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                     </svg>
                     Check in
                  </button>
                  <button className="bg-white text-gray-500 rounded-full py-2 px-10 text-center cursor-pointer md:text-xl flex items-center justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                     </svg>
                     Check out
                  </button>
                  <button className="bg-[#BB8012] text-white rounded-full py-2 px-4 md:text-base">
                     Search Now
                  </button>
               </div>
               <div className='flex justify-center space-x-2'>
                  {slides.map((slide, slideIndex) => (
                     <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-3xl cursor-pointer rounded-full ${
                           currentIndex === slideIndex ? "text-[#BB8012]" : "text-gray-400"
                        }`}
                     >
                        <RxDotFilled />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Hero;


