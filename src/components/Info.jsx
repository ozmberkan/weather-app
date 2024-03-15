import React from 'react';

export default function Info({ info }) {
    const { main, weather, name, feels_like, temp } = info;

    return (
        <div id='info' className='bg-zinc-100 bg-opacity-80 h-[300px] flex justify-center items-center gap-x-5 p-4'>


            <div className=' bg-zinc-200/50 w-[500px] h-full  flex justify-center items-center flex-col rounded'>
                <div className='flex text-[30px] justify-center items-center gap-x-5  gap-y-5 flex-col'>
                    {weather && weather.length > 0 ? (<p className='text-xl'>{weather[0].description}</p>) : null}
                </div>
            </div>
            <div className='flex flex-col bg-zinc-200/50 w-[500px] h-full justify-center items-center rounded'>
                <p className='font-medium font-sans text-6xl mb-5'>{name}</p>
                <div className='flex text-[30px] justify-center items-center gap-x-5 gap-y-5'>
                    {main && main.temp ? (<p className='text-xl'>Sıcaklık : {main.temp} °C</p>) : null}
                </div>
            </div>
            <div className=' bg-zinc-200/50 w-[500px] h-full  flex justify-center items-center flex-col rounded'>
                <div className='flex text-[30px] justify-center items-center gap-x-5'>
                    {main && main.feels_like ? (<p className='text-xl'> Hissedilen : {main.feels_like}</p>) : null}
                </div>
            </div>

        </div>
    );
}
