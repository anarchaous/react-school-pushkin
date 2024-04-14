import React from 'react';
import { Link } from 'react-router-dom';

export default function Aboutschool() {
  return (
    <div className='min-w-screen min-h-screen  flex items-center flex-col py-6'>
      <h1 className='font-bold text-4xl'>О нашей школе</h1>

      <div className="container flex  mt-8 h-[500px] w-[900px] items-center">
      <div className="school-logo-circle mr-6 w-96 h-96 rounded-full overflow-hidden">
        <img src="https://avatars.mds.yandex.net/get-altay/9793917/2a0000018c07b15c2b46d16a14c1ce03c6f3/L_height" alt="img" className="w-full h-full object-cover" />
      </div>


        <div className="flex flex-col ml-8 mt-4">
          <p className='max-w-[400px]  font-regular'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus debitis, mollitia eum impedit tenetur autem, quod qui ullam quas sed est quos, dolores similique fugiat adipisci blanditiis non unde quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maxime nulla placeat labore dolorum nisi veniam veritatis reprehenderit ipsam, blanditiis repudiandae neque, distinctio quo sint autem corrupti. Accusantium, expedita illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, omnis praesentium ratione necessitatibus, quas dolore eum pariatur explicabo similique ea doloremque debitis aperiam? Facilis placeat molestiae unde ipsam rerum accusantium.
          </p>
        
          <Link to="/" className='bg-blue-900 p-4 w-60 text-center rounded-xl text-white font-semibold hover:bg-blue-800 duration-200 mt-4'>Хочу узнать больше!</Link>
        </div>
      </div>
    </div>
  );
}
