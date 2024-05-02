import React from 'react';
import './teachers-styles/TeachersDeputyDirector.css';

function TeachersDeputyDirector({ teacher }) {
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

export default TeachersDeputyDirector
