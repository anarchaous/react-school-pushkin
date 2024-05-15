import React, { useState } from 'react';
import axios from 'axios';

export default function AdminAddNews() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('1'); // Начальное значение выбранной категории
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !text || images.length === 0) {
      alert("Please fill in all fields and select at least one image");
      return;
    }

    setIsSubmitting(true);

    const imageBase64Promises = images.map((image) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
          const base64Image = reader.result;
          resolve({ path: base64Image });
        };
      });
    });

    Promise.all(imageBase64Promises)
    .then((imageBase64) => {
      const newsData = {
        news: {
          title: title,
          date: date,
          text: text,
          news_category_id: parseInt(category), // Передаем выбранную категорию
        },
        images: imageBase64,
      };

        console.log("Отправляемые данные:", newsData);

        axios.post("https://pushkin-production.up.railway.app/api/news", newsData)
          .then(response => {
            console.log("Ответ от сервера:", response.data);
            alert("News created successfully");
          })
          .catch(error => {
            console.error("Ошибка при отправке запроса:", error);
            alert("Error creating news: " + error);
          })
          .finally(() => {
            setIsSubmitting(false);

            setTitle('');
            setDate('');
            setText('');
            setCategory('1');
            setImages([]);
          });
      });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      setImages([...images, ...files]);
    }
  };

  return (
    <div className='flex overflow-hidden'>
      <div className="flex flex-col w-full">
        <div className="mx-10 mt-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter title"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date:</label>
              <input
                type="text"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter date"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="text" className="block text-gray-700 font-bold mb-2">Text:</label>
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Enter news text"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="image" multiple className="block text-gray-700 font-bold mb-2">Image:</label>
              <input
                type="file"
                multiple
                onChange={handleImageChange}
              />
            </div>
            {/* Радио-кнопки для выбора категории */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Category:</label>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="1"
                    checked={category === '1'}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">Последние</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    value="2"
                    checked={category === '2'}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">Спортивные</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    value="3"
                    checked={category === '3'}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">Учебные</span>
                </label>
                {/* <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    value="4"
                    checked={category === '4'}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">Достижения</span>
                </label> */}
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    value="4"
                    checked={category === '4'}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">События и мероприятия</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting && 'cursor-not-allowed opacity-50'}`}
              disabled={isSubmitting}
            >
              Add News
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
