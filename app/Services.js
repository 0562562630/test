import React from 'react';

function Services() {
    return (
        <div className='max-w-screen-2xl mx-auto p-5'>
            <h1 className='text-2xl md:text-5xl  md:text-left text-black mt-8 font-bold font-serif'>
                What Services We Give You!
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-8'>
                {servicesData.map((service, index) => (
                    <div key={index} className='bg-[#9F885E] p-6 rounded-3xl text-white h-44 flex flex-col justify-between '>
                        <div className='flex items-center'>
                            <div className='size-16 bg-[#73665A] rounded-full flex justify-center items-center text-xl font-bold '>
                         <h1 className='text-white font-serif text-nowrap pl-28   '>{service.title}</h1>
                            </div>
                        </div>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const servicesData = [
    { title: 'Free Wifi', description: 'Enjoy free internet eccess throughout the hotel during your stay.' },
    { title: 'Easy Booking', description: 'The hotel offers a quick booking process for a comfortable experience.' },
    { title: 'Restaurants', description: 'The hotel provides diverse food service with various restaurants to satisfy all tastes.' },
    { title: 'Swimming pool', description: 'The hotel has a wonderful swimming pool for a relaxing and refreshing experience.' },
    { title: 'Beauty & Hotel', description: 'The hotel has a unique design, perfect for a remarkable experience.' },
    { title: 'Support Team', description: 'The hotel support team is always available for a comfortable guest experience.' },
];

export default Services;

