import React from 'react'
import './teachers-styles/TeachersDeputyDirector.css'

export default function TeachersDeputyDirector(props) {
    return (
        <>
            <div className="deputy-director mb-6 flex items-center  h-auto border-2 border-gray-400">
                <div className="photo ml-4 mr-12 w-60 h-40 rounded-full bg-gray-500 ">
                    <img src={props.image} alt="" />
                </div>

                <div className="about font-bold mt-4 flex flex-col">
                    <div className="mb-4 flex justify-between">
                        <h1 className='status'>Фио:</h1>
                        <h1 className=" pr-10">{props.deputyFio}</h1>
                    </div>
                    <div className="mb-4 flex justify-between">
                        <h1 className='status'>Должность:</h1>
                        <h1 className=' pr-10'>{props.deputyStatus}</h1>
                    </div>
                    <div className="mb-4 flex justify-between">
                        <h1 className='status'>День рождения:</h1>
                        <h1 className=' pr-10'>{props.deputyBirthday}</h1>
                    </div>
                    <div className="mb-4 flex justify-between">
                        <h1 className='status'>Контакты:</h1>
                        <h1 className=' pr-10'>{props.deputyContact}</h1>
                    </div>
                    <div className="mb-4 flex justify-between">
                        <h1 className='status'>О себе:</h1>
                        <h1 className="break-words pr-6  w-[60%]">{props.deputyQuote}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
