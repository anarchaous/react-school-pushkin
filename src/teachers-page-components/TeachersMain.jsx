import React, { useState, useEffect } from "react";
import axios from "axios";
import TeacherCard from './TeacherCard.jsx';
import './teachers-styles/TeachersMain.css'
import TeachersDirector from './TeachersDirector.jsx'
import './teachers-styles/TeachersDeputyDirector.css'

function TeachersMain(props) {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axios.get("https://pushkin-production.up.railway.app/api/staffs")
            .then(response => {
                setTeachers(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching teachers:', error);
            });
    }, []);

    return (
        <div className="mainteacher max-w-full min-w-full h-full flex flex-col items-center">
            <h1 className="font-bold directors text-blue-900 lg:text-2xl mt-4 mb-4">Директор</h1>
            <div className="flex flex-col flex-grow h-auto ">
                {teachers.map(teacher => {
                    if (teacher.status_id === 3) {
                        return <TeacherCard key={teacher.id} teacher={teacher} />;
                    }
                    return null;
                })}
            </div>
            <h1 id='deputies' className="font-bold directors text-blue-900 lg:text-2xl mt-4 mb-4">Зам.директоры</h1>

            <div className="flex flex-col flex-grow h-auto ">
                {teachers.map(teacher => {
                    if (teacher.status_id === 4) {
                        return <TeacherCard key={teacher.id} teacher={teacher} />;
                    }
                    return null;
                })}
            </div>

            <h1 id='teachers' className="font-bold directors text-blue-900 lg:text-2xl mt-4 mb-4">Учителя</h1>

            <div className="flex flex-col flex-grow h-auto">
                {teachers.map(teacher => {
                    if (teacher.status_id === 5) {
                        return <TeacherCard key={teacher.id} teacher={teacher} />;
                    }
                    return null;
                })}
            </div>

            <h1 id='others' className="font-bold directors text-blue-900 lg:text-2xl mt-4 mb-4">Остальной персонал</h1>

            <div className="flex flex-col flex-grow -auto">
                {teachers.map(teacher => {
                    if (teacher.status_id === 6) {
                        return <TeacherCard key={teacher.id} teacher={teacher} />;
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default TeachersMain;
