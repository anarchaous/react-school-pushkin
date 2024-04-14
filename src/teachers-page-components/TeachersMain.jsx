import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TeachersDirector from "./TeachersDirector";

function TeachersMain(props) {

    return(
        <div className="mainteacher min-w-full h-screen  flex flex-col items-center" >
            <h1 className="font-bold text-blue-900 lg:text-2xl mt-4 mb-4">Директор</h1>
            <TeachersDirector />
            <h1 className="font-bold text-blue-900 lg:text-2xl mt-4 mb-4">Зам.директоры</h1>
        </div>
    )
}

export default TeachersMain;