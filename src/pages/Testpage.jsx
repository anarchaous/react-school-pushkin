import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваша логика обработки входа здесь
    console.log('Email:', email);
    console.log('Password:', password);
    (email == 'adolf_hitler' && password == '14881488') ? navigate('/adminpage/admin-news') : alert('Неправильный логин или пароль')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkblue">
      <div className="max-w-md border-2 border-black w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-black">Авторизация</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black">Электронная почта</label>
            <input
              type="text"
              id="email"
              className="mt-1 p-2 w-full rounded border border-gray-300"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-black">Пароль</label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full rounded border border-gray-300"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded hover:bg-gray-800"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
