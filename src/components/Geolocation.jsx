import React from 'react'
import YandexMap from './YandexMap'

export default function Geolocation() {
    return (
        <div className='min-w-screen min-h-screen  flex  items-center flex-col'>
            <h1 className='text-3xl font-bold mt-10'>Геолокация</h1>
            <div className="map border border-solid border-blue-900 bg-gray-500 w-[70%] h-[500px] mt-10 overflow-hidden">
                <YandexMap />
            </div>
        </div>
    )
}