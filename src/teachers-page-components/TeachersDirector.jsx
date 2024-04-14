import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function TeachersDirector() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://pushkin.onrender.com/api/staffs/2")
            .then(response => response.json())
            .then(
                function(data) {
                    setData(data);
                    console.log(data)
                }
            )
            .catch(error => console.log(error))
    }, [])

  return (
    <>
      <div className="director flex items-center rounded-l-full lg:w-[800px] h-60 border-2 border-gray-400">
                <div className="photo ml-4 mr-4 w-40 h-40 rounded-full bg-gray-800"></div>

                <div className="about font-bold">
                    <h1 className="mb-2">Фио</h1>
                    <h1 className="mb-2">Должность</h1>
                    <h1 className="mb-2">Контакты</h1>
                    <h1 className="mb-2">День рождения</h1>
                    <h1 className="mb-2">О себе</h1>
                </div>

                <div className="about-info ml-16">
                    {data &&  (
                    <>
                    <h1 className="mb-2">{data.fio}</h1>
                    <h1 className="mb-2">директор</h1>
                    <h1 className="mb-2">{data.contact}</h1>
                    <h1 className="mb-2">{data.birthday}</h1>
                    <h1 className="mb-2">{/* {data.quote} */} non</h1>
                    </>
                    )}
                </div>
                
            </div>  
    </>
  )
}
