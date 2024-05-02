import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-router-dom';

export default function AdminAddStaff() {

    const [fio, setFio] = useState('');
    const [birthday, setBirthday] = useState('');
    const [quote, setQuote] = useState('');
    const [contact, setContact] = useState('');
    const [statusid, setStatus] = useState('');
    const [avatar, setAvatar] = useState(null); // Состояние для файла аватара

    // Счетчик для отслеживания текущего максимального ID
    const [maxId, setMaxId] = useState(2);

    // Функция для увеличения счетчика ID
    const increaseId = () => {
        setMaxId(prevId => prevId + 1);
    };

    // Обработчик события выбора файла
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('fio', fio);
        formData.append('statusid', 2);
        formData.append('birthday', birthday);
        formData.append('contact', contact);
        formData.append('quote', quote);
        formData.append('statusid', statusid)

        // Добавляем файл аватара, если он был выбран
        if (avatar) {
            formData.append('avatar', avatar);
        }

        try {
            const response = await axios.post('https://pushkin.onrender.com/api/staffs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // jt
                    'Accept': '*/*',
                    'Connection': 'keep-alive'
                }
            });
            console.log('Response:', response.data);
            alert("added succesfully")
            // Добавьте здесь логику обработки успешного ответа
            increaseId(); // Увеличиваем счетчик ID после успешной отправки данных
        } catch (error) {
            console.error('Error:', error.name);
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
                        type="text"
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

                    <label className="block mt-4 mb-2 font-bold text-gray-800">Status</label>
                    <input
                        type="text"
                        onChange={(e) => setStatus(e.target.value)}
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
                        onChange={handleFileChange} // Обработчик выбора файла
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
