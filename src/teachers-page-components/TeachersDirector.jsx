import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './teachers-styles/TeachersDirector.css'
import './TeacherCard.css'

export default function TeachersDirector() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://pushkin.onrender.com/api/staffs/0")
            .then(response => response.json())
            .then(
                function(data) {
                    setData(data);
                    console.log(data)
                }
            )
            .catch(error => console.log(error.name))
    }, [])

  return (
    <div className="teachercard flex">
    <div className="imgbox">
      <img src='' alt="" />
    </div>

    <div className="content flex justify-between items-center">
      <div className="details">
        <h2 className='details-h1'>Fio:</h2>
        <h2 className='details-h1'>Birthday:</h2>
        <h2 className='details-h1'>Status: </h2>
        <h2 className='details-h1'>Contacts:</h2>
        <h2 className='details-h1'>Quote:</h2>
      </div>
      <div className="info">
        <h2>Досназаров Миртурды Мамбеттурдиевич</h2>
        <h2>20.09.1974</h2>
        <h2>Директор</h2>
        <h2>+997429942</h2>
        <div className="quote ">
          <h2>teacher.quote</h2>
        </div>
        {/* <h2 className='quote bg-yellow-500'>{teacher.quote}</h2> */}
      </div>
    </div>
  </div>
);
}
