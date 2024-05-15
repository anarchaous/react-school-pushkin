import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import { Link } from "react-router-dom";
import TeachersMain from "../teachers-page-components/TeachersMain";
import './Teachers.css'
import Footer from "../components/Footer";

function SecondHeader() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <div className="secondheader flex justify-center items-center flex-col sm:flex-row w-full h-auto bg-blue-900 text-white">
            <div className="navbar font-bold ">
                <button onClick={() => scrollToSection("deputies")} className="mb-2 sm:mb-0 mr-2 sm:mr-6 text-lg sm:text-xl font-normal">Замдиректора</button>
                <button onClick={() => scrollToSection("director")} className="mb-2 sm:mb-0 mr-2 sm:mr-6 text-lg sm:text-xl font-normal">Директор</button>
                <button onClick={() => scrollToSection("teachers")} className="mb-2 sm:mb-0 mr-2 sm:mr-6 text-lg sm:text-xl font-normal">Учителя</button>
                <button onClick={() => scrollToSection("others")} className="mb-2 sm:mb-0 text-lg sm:text-xl font-normal">Остальной персонал</button>
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
            <Footer />
        </div>
    )
}

export default Teachers;