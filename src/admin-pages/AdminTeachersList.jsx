import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../teachers-page-components/TeacherCard.jsx'

function TeacherCard(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDelete = (id) => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow"
    };
    
    fetch(`https://pushkin-production.up.railway.app/api/staffs/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    // const requestOptions = {
    //   method: "DELETE",
    //   redirect: "follow"
    // };

    // fetch("https://pushkin.onrender.com/api/staffs/" + id, requestOptions)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Failed to delete teacher");
    //     }
    //     return response.text();
    //   })
    //   .then((result) => {
    //     console.log(result);
    //     // Дополнительная логика после успешного удаления, например, обновление списка учителей
    //   })
    //   .catch((error) => console.error(error));

    // // Проверяем, существует ли путь к изображению, и если да, пытаемся его удалить
    // if (imagePath) {
    //   fetch(imagePath, { method: 'DELETE' })
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error('Failed to delete image');
    //       }
    //       console.log('Image deleted successfully');
    //     })
    //     .catch(error => console.error('Error deleting image:', error));
    // }
  };

  const handleEdit = () => {
    // Обработка изменения информации о преподавателе
    console.log("Edit");
  };

  return (
    <div className="teacherCard mt-2 rounded-lg mr-4 flex w-[250px] h-[350px] border-2 border-gray-900 relative">
      <div className="button absolute top-0 right-0">
        <button onClick={toggleMenu} className="bg-gray-200 rounded-md p-2">
          ⋮
        </button>
        {isMenuOpen && (
          <div className="dropdown-menu absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
            <button onClick={() => handleDelete(props.id)} className="block w-full py-2 px-4 text-left hover:bg-gray-100">
              Удалить
            </button>
            <button onClick={handleEdit} className="block w-full py-2 px-4 text-left hover:bg-gray-100">
              Изменить
            </button>
          </div>
        )}
      </div>
      <div className="contain flex flex-col items-center">
        <img
          src={props.image ? props.image.path : ''}
          className="w-[100px] h-[100px] border-2 border-black mt-4 rounded-full mb-2"
          alt="teacher"
        />
        <h1 className="mb-2">{props.fio}</h1>
        <h1 className="mb-2">{props.contact}</h1>
        <h1 className="mb-2">{props.status_id}</h1>
        <p className="ml-4">{props.quote}</p>
      </div>
    </div>
  );
}

export default function AdminTeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const url = 'https://pushkin-production.up.railway.app/api/staffs';
    axios.get(url, { timeout: 10000 }) // Установите тайм-аут в 10 секунд (или любое другое подходящее значение)
      .then(response => {
        console.log(response.data);
        setTeachers(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='flex p-2 h-full overflow-hidden flex-wrap'>
      {teachers.map(teacher => (
        <TeacherCard 
          key={teacher.id}
          id={teacher.id}
          image={teacher.image}
          fio={teacher.fio}
          contact={teacher.contact}
          quote={teacher.quote}
          status_id={teacher.status_id}
        />
      ))}

      {teachers.map(teacher => (<TeacherCard key={teacher.id} teacher={teacher} />))}
    </div>
  );
}
