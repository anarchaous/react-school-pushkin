import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TeachersDirector from "./TeachersDirector";
import TeachersDeputyDirector from "./TeachersDeputyDirector";
import axios from "axios";
import './teachers-styles/TeachersMain.css'
import './teachers-styles/TeachersDeputyDirector.css'
import TeacherCard from './TeacherCard.jsx'

function TeachersMain(props) {

    // useEffect(() => {
    //     fetch("https://pushkin.onrender.com/api/staffs/2")
    //         .then(response => response.json())
    //         .then(
    //             function(data) {
    //                 setData(data);
    //                 // console.log(data)
    //             }
    //         )
    //         .catch(error => console.log(error))
    // }, [])

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://pushkin.onrender.com/api/staffs")
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data)
            })
            .catch(error => console.log(error))
    }, [])

    return(
        <div className="mainteacher mam-w-full min-w-full max-h-screen min-h-screen flex flex-col items-center" >
            <h1 className="font-bold directors text-blue-900 lg:text-2xl mt-4 mb-4">Директор</h1>
            <TeachersDirector />
            <h1 className="font-bold directors text-blue-900 lg:text-2xl mt-4 mb-4">Зам.директоры</h1>
            
            {/* {teachers.map(teacher => (
                <TeachersDeputyDirector onClick={console.log(teacher.id)}  key={teacher.id} 
                deputyQuote={teacher.quote} 
                image={teacher.image.path} 
                deputyContact={teacher.contact} 
                deputyBirthday={teacher.birthday} 
                deputyFio={teacher.fio} 
                deputyStatus={teacher.status.name} 
                />
            ))} */}

            {data.map(teacher => (
                <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
        </div>
    )
}

export default TeachersMain;