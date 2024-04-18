import React, { useState } from 'react';
import axios from 'axios';

export default function AdminAddStaff() {

    const [fio, setFio] = useState('');
    const [birthday, setBirthday] = useState('');
    const [quote, setQuote] = useState('');
    const [contact, setContact] = useState('');
    const avatar = null;

    // Счетчик для отслеживания текущего максимального ID
    const [maxId, setMaxId] = useState(2);

    // Функция для увеличения счетчика ID
    const increaseId = () => {
        setMaxId(prevId => prevId + 1);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://pushkin.onrender.com/api/staffs', {
                // Увеличиваем текущий максимальный ID на 1 для нового элемента
                fio: fio,
                statusid: maxId + 1, 
                birthday: birthday,
                contact: contact,
                quote: quote,
                avatar: null,
            });
            console.log('Response:', response.data);
            // Добавьте здесь логику обработки успешного ответа
            increaseId(); // Увеличиваем счетчик ID после успешной отправки данных
        } catch (error) {
            console.error('Error:', error);
            // Добавьте здесь логику обработки ошибки
        }
    };

    return (
        <div className='w-full h-screen bg-gray-100'>
            <h1 className='font-bold text-2xl text-gray-800 ml-4 uppercase'>Add New Teacher</h1>

            <div className="personal-details bg-white shadow-xl w-[78%] rounded-md ml-4 mt-2">
                <div className="header rounded-md w-full h-8 bg-blue-900">
                    <h1 className='text-white font-bold text-2xl'>Personal Details</h1>
                </div>

                <div className="p-4">
                    <label className="block mb-2 font-bold text-gray-800">Full Name</label>
                    <input
                        type="text"
                        onChange={(e) => setFio(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter full name"
                    />

                    <label className="block mt-4 mb-2 font-bold text-gray-800">Date of Birth</label>
                    <input
                        type="date"
                        onChange={(e) => setBirthday(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label className="block mt-4 mb-2 font-bold text-gray-800">Contact (Phone Number)</label>
                    <input
                        type="tel"
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter phone number"
                    />

                    <label className="block mt-4 mb-2 font-bold text-gray-800">Quote</label>
                    <textarea
                        onChange={(e) => setQuote(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        rows="3"
                        placeholder="Enter quote"
                    ></textarea>

                    <label className="block mt-4 mb-2 font-bold text-gray-800">Photo</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <button
                        onClick={handleSubmit}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
