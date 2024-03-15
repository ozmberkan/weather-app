import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Form({ setInfo }) {

    const [city, setCity] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const apiKey = "c53e1a627609184e9edf62bca977a159";
        const BaseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`

        axios.get(BaseURL).then(res => {
            setInfo(res.data)
            console.log(res.data);
        })
    }

    return (
        <div className=' flex flex-col justify-center items-center w-1/2 mx-auto p-5 rounded bg-zinc-100'>
            <h1 className='font-bold font-mono text-3xl mb-4'>Hava Durumu</h1>
            <form onSubmit={handleChange}>
                <div>
                    <input
                        onChange={e => setCity(e.target.value)}
                        type="text" placeholder='Şehri Giriniz'
                        className='w-[400px]  border-b border-zinc-700 bg-transparent placeholder:text-zinc-300 focus:outline-none'
                    />
                </div>
                <div className=' mt-2 p-2 flex justify-center items-center'>
                    <button type='submit' className='bg-yellow-200 w-full p-2 rounded text-yellow-700 hover:bg-opacity-55 transition-colors' >Verileri Getir</button>
                </div>
            </form>
        </div>
    )
}
