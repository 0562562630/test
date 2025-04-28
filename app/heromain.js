"use client";
import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import Link from "next/link";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Hero() {
   const slides = [
      { url: '/images/thumbnail_image.png' },
      { url: '/images/image2.png' },
      { url: '/images/image3.png' },
   ];

   const [currentIndex, setCurrentIndex] = useState(0);
   const [menuOpen, setMenuOpen] = useState(false);
   const [checkInDate, setCheckInDate] = useState(new Date());
   const [checkOutDate, setCheckOutDate] = useState(new Date());
   const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
   const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
   const [showLocationDropdown, setShowLocationDropdown] = useState(false);

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

   const handleCheckInDateChange = (date) => {
      setCheckInDate(date);
      setShowCheckInCalendar(false);
   };

   const handleCheckOutDateChange = (date) => {
      setCheckOutDate(date);
      setShowCheckOutCalendar(false);
   };

   const handleLocationClick = () => {
      setShowLocationDropdown(!showLocationDropdown);
   };

   return (
      <div className='max-w-full h-[700px] w-full mx-auto py-1 px-4 relative my-1 font-serif'>
         <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full bg-center bg-cover duration-500 flex flex-col justify-between'
         >
            {/* Navbar */}
            <nav className="relative p-5 flex justify-between items-center md:w-full ">
               <Link href="/">
                  <div className="flex items-center hover:text-slate-500">
                     <div className="lg:size-6 md:size-5 sm: size-3 bg-[#4B443E] rounded-full"></div>
                     <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold">Boarding</h1>
                  </div>
               </Link>

               {/* زر القائمة الجانبية (يظهر فقط في الشاشات الصغيرة والمتوسطة) */}
               <div className="md:hidden">
                  <button onClick={toggleMenu} className="text-white text-2xl">
                     ☰
                  </button>
               </div>

               {/* روابط القائمة - تظهر فقط في الشاشات الكبيرة */}
               <div className="hidden md:flex space-x-6 text-black">
                  <Link href="/">Home</Link>
                  <Link href="#room">Room</Link>
                  <Link href="#contact">Contact Us</Link>
                  <Link href="#blog">Blog</Link>
                  <Link href="#about">About Us</Link>
               </div>

               <button className="hidden md:block bg-[#BB8012] text-white rounded-full py-2 px-6">
                  Book Now
               </button>
            </nav>

            {/* القائمة الجانبية - تظهر فقط عند الضغط في الشاشات الصغيرة والمتوسطة */}
            <div className={`rounded-3xl absolute top-16 left-0 w-full bg-[#faf3e6] text-black flex flex-col items-center space-y-6 py-5 transition-transform duration-300 ${menuOpen ? "block" : "hidden"} md:hidden`}>
               <Link href="/" onClick={toggleMenu}>Home</Link>
               <Link href="#room" onClick={toggleMenu}>Room</Link>
               <Link href="#contact" onClick={toggleMenu}>Contact Us</Link>
               <Link href="#blog" onClick={toggleMenu}>Blog</Link>
               <Link href="#about" onClick={toggleMenu}>About Us</Link>
               <button className="bg-[#BB8012] text-white rounded-full py-2 px-6">
                  Book Now
               </button>
            </div>

            {/* المحتوى الرئيسي */}
            <div className="flex flex-col justify-end w-full p-5 max-w-screen-2xl mx-auto space-y-10">
               <h1 className="font-bold tracking-tighter text-center text-white lg:text-6xl md:text-4xl sm:text-3xl text-2xl">
                  Find Your Hotel & Many More, Touch The Dream!
               </h1>
               <p className="lg:text-2xl md:text-xl sm:text-lg text-center font-bold font-mono">
                  "Al-Raha Hotel" offers comfortable rooms and recreational facilities, making it ideal for stays.
               </p>
               <div className="flex flex-col md:flex-row justify-around space-y-4 md:space-y-0">
               <div className="flex justify-center relative">
    <button onClick={handleLocationClick} className="lg:px-20 bg-white text-gray-500 rounded-full py-2 px-4 text-center cursor-pointer md:text-xl flex items-center justify-center w-full max-w-xs">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        Location
    </button>
    {showLocationDropdown && (
        <div className="absolute top-16 z-50 bg-white shadow-md rounded-md">
            <ul className="p-2">
                <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer" onClick={() => window.open('https://www.google.com/maps/dir//%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+12212%E2%80%AD/@24.6956586,46.7536619,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e2f033bc3fba997:0xfd1e84a9bb80fcc5!2m2!1d46.6836215!2d24.6956749?entry=ttu', '_blank')}>
                    Riyadh
                </li>

                <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer" onClick={() => window.open('https://www.google.com/maps/dir//%D9%81%D9%86%D8%AF%D9%82+%D8%AF%D8%A7%D8%B1+%D8%A7%D9%84%D8%A5%D9%8A%D9%85%D8%A7%D9%86+%D8%A5%D9%86%D8%AA%D8%B1%D9%83%D9%88%D9%86%D8%AA%D9%8A%D9%86%D9%86%D8%AA%D8%A7%D9%84,+Unit+No:10,+2657%D8%8C+%D8%A8%D8.%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9+42311%E2%80%AD/@24.4714869,39.6499196,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15bdbc0001cc6023:0x1354912a0baf8c14!2m2!1d39.60872!2d24.4714144?entry=ttu', '_blank')}>
                Medina
                </li>

                <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer" onClick={() => window.open('https://www.google.com/maps/dir//%D9%81%D9%86%D8%AF%D9%82+%D8%B4%D9%8A%D8%B1%D8%A7%D8%AA%D9%88%D9%86+%D8%AC%D8%AF%D8%A9%D8%8C+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D9%83%D9%88%D8%B1%D9%86%D9%8A%D8%B4+%D8%A7%D9%84%D9%81%D8%B1%D8%B9%D9%8A%D8%8C+%D8%A7%D9%84%D8%B4%D8%A7%D8%B7%D8%A6%D8%8C+%D8%AC%D8%AF%D8%A9+21424%E2%80%AD/@21.6142514,39.1497839,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15c3dbb3f4235d87:0x3f2a8d7c3d538976!2m2!1d39.1085843!2d21.6141767?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D', '_blank')}>
                Jeddah
                </li>



                <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer" onClick={() => window.open('https://www.google.com/maps/dir//%D9%81%D9%86%D8%AF%D9%82+%D8%AC%D8%A8%D9%84+%D8%B9%D9%85%D8%B1+%D8%AC%D9%85%D9%8A%D8%B1%D8%A7,+Jabal+Omar%D8%8C+Al+Shubaikah,+Ibrahim+Al-Khalil+Road%D8%8C+%D9%85%D9%83%D8%A9+24231%E2%80%AD/@21.4190241,39.8247838,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15c2056938d0d737:0xaba713e6c60c74ea!2m2!1d39.8222089!2d21.4190191?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D', '_blank')}>
                Makkah
                </li>

                <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer" onClick={() => window.open('https://www.google.com/maps/dir//%D9%81%D9%86%D8%AF%D9%82+%D8%B1%D9%88%D9%8A%D8%A7%D9%84+%D8%A7%D9%84%D8%B9%D9%84%D8%A7+%D8%B4%D9%82%D9%82+%D9%81%D9%86%D8%AF%D9%82%D9%8A%D9%87%D8%8C+Unnamed+Road%E2%80%AD/@26.5622289,38.0019985,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15a5ab6919fc7727:0x781d8fb94ab45a23!2m2!1d37.9607989!2d26.5621581?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D', '_blank')}>
                Alula
                </li>




            </ul>
        </div>
    )}
</div>
                  <div className="flex justify-center relative">
                     <button onClick={() => setShowCheckInCalendar(!showCheckInCalendar)} className="lg:px-20 bg-white text-gray-500 rounded-full py-2 px-4 text-center cursor-pointer md:text-xl flex items-center justify-center w-full max-w-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                        Check in
                     </button>
                     {showCheckInCalendar && (
                        <div className="absolute top-16 z-50 w-[220px] sm:w-[300px] md:w-[400px] lg:w-[450px]">
                           <Calendar onChange={handleCheckInDateChange} value={checkInDate} />
                        </div>
                     )}
                  </div>
                  <div className="flex justify-center relative">
                     <button onClick={() => setShowCheckOutCalendar(!showCheckOutCalendar)} className="lg:px-20 bg-white text-gray-500 rounded-full py-2 px-4 text-center cursor-pointer md:text-xl flex items-center justify-center w-full max-w-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>
                        Check out
                     </button>
                     {showCheckOutCalendar && (
                        <div className="absolute top-16 z-50 w-[220px] sm:w-[300px] md:w-[400px] lg:w-[450px]">
                           <Calendar onChange={handleCheckOutDateChange} value={checkOutDate} />
                        </div>
                     )}
                  </div>
                  <div className="flex justify-center">
                     <button className="lg:px-20 bg-[#BB8012] text-white rounded-full py-2 px-4 text-center cursor-pointer md:text-xl flex items-center justify-center w-full max-w-xs">
                        Search Now
                     </button>
                  </div>
               </div>
               <div className='flex justify-center'>
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
