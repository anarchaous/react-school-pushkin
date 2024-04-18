import React from "react";
import './Main.css'
import { useState } from "react";

function Main() {
    return(
        <div className="Main flex justify-center items-center flex-col">
            <h1 className="text-white text-4xl font-bold uppercase sm:mb-2 lg:mb-4">Создаем будущее сегодня. </h1>
            <h1 className="second-h1 text-white text-4xl font-bold uppercase sm:mb-4 lg:mb-4">Вместе-сила!</h1>
            <a href="" className= "btn bg-white p-4 rounded-xl font-semibold text-blue-900">Читать новости</a>
        </div>
    )
}

export default Main;