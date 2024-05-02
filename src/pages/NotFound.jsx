import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
        <p className="text-xl font-semibold mb-8 animate-pulse">Страница не найдена</p>
        <p className="text-lg mb-8">Извините, запрошенная страница не существует. Пожалуйста, вернитесь на главную страницу.</p>
        <a href="/" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold inline-block shadow-md transition duration-300 transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:animate-pulse hover:rotate-12">На главную</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
