import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import { Link } from "react-router-dom";
import TeachersMain from "../teachers-page-components/TeachersMain";
import './Teachers.css'

function SecondHeader() {
    return(
        <div className="secondheader flex justify-center items-center w-full h-16 bg-blue-900 text-white"> 
            <div className="navbar font-bold">
                <Link className="mr-12">Директор</Link>
                <Link className="mr-12">Замдиректора</Link>
                <Link className="mr-12">Учителя</Link>
            </div>
        </div>
    )
}



function Teachers() {
    return(
        <div className="Teachers min-w-full min-h-full flex items-center overflow-x-hidden  flex-col">
            <div className="w-full">
                <Header />
            </div>
            <SecondHeader />
            <TeachersMain />
        </div>
    )
}

export default Teachers;