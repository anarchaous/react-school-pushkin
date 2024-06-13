import React from "react";
import './Main.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";

function Main() {
    const mainRef = useRef(null)

    useLayoutEffect(() => {
        gsap.context(() => {
            const tl = gsap.timeline({repeat: 0})
            tl.from('.Main', {backgroundColor: "rgba(255, 255, 255, 0)"})
            tl.from('.future', {x: -100, opacity: 0})
            tl.from('.second-h1', {x: -100, opacity: 0})
            tl.fromTo('.btn', {opacity: 0}, {opacity: 100})
        }, mainRef)
    }, [])

    return(
        <div ref={mainRef} className="Main flex justify-center items-center flex-col">
            <h1 className="future text-white text-4xl font-bold uppercase sm:mb-2 lg:mb-4">Создаем будущее сегодня. </h1>
            <h1 className="second-h1 text-white text-4xl font-bold uppercase sm:mb-4 lg:mb-4">Вместе-сила!</h1>
            <Link href="" to='/news' className= "btn bg-white p-4 rounded-xl font-semibold text-blue-900">Читать новости</Link>
        </div>
    )
}

export default Main;