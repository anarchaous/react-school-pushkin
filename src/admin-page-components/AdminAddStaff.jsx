import React, { useState } from 'react';
import axios from 'axios';

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
        formData.append('statusid', statusid); // Используем выбранный статус
        formData.append('birthday', birthday);
        formData.append('contact', contact);
        formData.append('quote', quote);

        // Добавляем файл аватара, если он был выбран
        if (avatar) {
            formData.append('avatar', avatar);
        }

        try {
            const response = await axios.post('https://pushkin-production.up.railway.app/api/staffs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // jt
                    'Accept': '*/*',
                    'Connection': 'keep-alive'
                }
            });
            console.log('Response:', response.data);
            alert("added succesfully")
            setFio('');
            setAvatar(null);
            setBirthday('');
            setContact('');
            setQuote('');
            setStatus('');            // Добавьте здесь логику обработки успешного ответа
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
                        value={fio}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter full name"
                    />

                    <label className="block mt-4 mb-2 font-bold text-gray-800">Date of Birth</label>
                    <input
                        type="text"
                        onChange={(e) => setBirthday(e.target.value)}
                        value={birthday}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label className="block mt-4 mb-2 font-bold text-gray-800">Contact (Phone Number)</label>
                    <input
                        type="tel"
                        onChange={(e) => setContact(e.target.value)}
                        value={contact}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter phone number"
                    />

                    <label className="block mt-4 mb-2 font-bold text-gray-800">Status</label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                value="3" // Изменено на 3
                                checked={statusid === "3"}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            Директор
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="4" // Изменено на 4
                                checked={statusid === "4"}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            Зам. Директор
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="5" // Изменено на 5
                                checked={statusid === "5"}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            Учитель
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="6" // Изменено на 6
                                checked={statusid === "6"}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            Остальной персонал
                        </label>
                    </div>

                    <label className="block mt-4 mb-2 font-bold text-gray-800">Quote</label>
                    <textarea
                        onChange={(e) => setQuote(e.target.value)}
                        value={quote}
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
