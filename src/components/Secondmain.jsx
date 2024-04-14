import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return(
    <div className="card hover:scale-[1.1] duration-200 hover:mx-4 hover:cursor-pointer w-[500px] border-blue-800 border-solid border-2 h-60 p-4 flex justify-between">
      <h1 className='font-bold'>{props.name}</h1>
      <div className="logo border-2  w-[200px] h-[200px] bg-no-repeat bg-center">
        <img src={props.image} alt="img" />
      </div>
    </div>
  )
}

export default function Secondmain() {
  return (
    <div className='min-w-screen min-h-screen  flex flex-col items-center'>
      <div className=" header w-full h-24 flex items-center py-6 px-20">
        <div className="navbar w-full font-bold text-gray-600 flex justify-between" style={{ marginRight: '20px' }}>
          <Link to="/teachers" className='hover:text-gray-800 duration-200'>Руководство</Link>
          <Link className='hover:text-gray-800 duration-200'>Ученики</Link>
          <Link className='hover:text-gray-800 duration-200'>Новости</Link>
          <Link className='hover:text-gray-800 duration-200'>История школы</Link>
          <Link className='hover:text-gray-800 duration-200'>Открытые уроки</Link>
        </div>
      </div>

      <div className="flex-grow min-w-full flex items-center justify-center">
        <div className="cards w-full h-full flex gap-4 p-6 flex-wrap justify-center">
          {/* Содержимое карточек */}
          <Card name="Директор" image="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png"/>
          <Card name="Зам.Директора" image="https://static.vecteezy.com/system/resources/previews/011/634/397/non_2x/man-coder-development-programming-computer-free-vector.jpg"/>
          <Card name="Учителя" image="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1711584000&semt=sph"/>
          <Card name="Ученики" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToY2EMipkbZAmBXzELnPKdzRHqZtZ9lzVd2us2cTblhg&s"/>
        </div>
      </div>
    </div>
  )
}
