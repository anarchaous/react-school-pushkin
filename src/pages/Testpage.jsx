import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Testpage.css';

function TeacherCard({ teacher }) {
  return (
    <div className="teachercard flex">
      <div className="imgbox">
        <img src={teacher.image.path} alt="" />
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
          <h2>{teacher.fio}</h2>
          <h2>{teacher.birthday}</h2>
          <h2>{teacher.status.name}</h2>
          <h2>{teacher.contact}</h2>
          <div className="quote ">
            <h2>{teacher.quote}</h2>
          </div>
          {/* <h2 className='quote bg-yellow-500'>{teacher.quote}</h2> */}
        </div>
      </div>
    </div>
  );
}

export default function Testpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://pushkin.onrender.com/api/staffs')
      .then(response => {
        setData(response.data);
      });
  }, []);

  return (
    <div className="testpage flex flex-col justify-center items-center">
      {data.map(teacher => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
}
