import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClassCard(props) {
  return (
    <div className="relative mr-4 mb-4 border-2 border-blue-900 group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 duration-700">
      <div className="w-56 h-72 bg-lime-400 text-gray-800">
        <div className="flex flex-row justify-between">
          <svg className="fill-current stroke-current w-8 h-8 p-2 hover:bg-lime-200  rounded-full m-1" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path className="" d="M15.8,32.9V15.8m0,0H32.9m-17.1,0L37.2,37.2m47-4.3V15.8m0,0H67.1m17.1,0L62.8,37.2m-47,29.9V84.2m0,0H32.9m-17.1,0L37.2,62.8m47,21.4L62.8,62.8M84.2,84.2V67.1m0,17.1H67.1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8">
            </path>
          </svg>
          <svg className="fill-current stroke-current w-8 h-8 p-2 m-1 hover:bg-lime-200 rounded-full" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path className="svg-stroke-primary" d="M50,17.4h0M50,50h0m0,32.6h0M50,22a4.7,4.7,0,1,1,4.7-4.6A4.7,4.7,0,0,1,50,22Zm0,32.7A4.7,4.7,0,1,1,54.7,50,4.7,4.7,0,0,1,50,54.7Zm0,32.6a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,50,87.3Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8">
            </path>
          </svg>
        </div>
      </div>
      <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-gray-800 font-bold text-xs">{props.name}</span>
        <span className="text-gray-800 font-bold text-3xl">{props.name}</span>
        <p className="text-neutral-800">Учебный класс школы им.Пушкина N37</p>
      </div>
    </div>
  );
}

export default function AdminClassList() {
  const [data, setData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [className, setClassName] = useState('');

  useEffect(() => {
    axios.get('https://pushkin.onrender.com/api/classes')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    if (className.trim() !== '') {
      axios.post('https://pushkin.onrender.com/api/classes', {
        name: className.trim(),
        staff_id: 2
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }
  }, [className]);

  const handleClassNameChange = (event) => {
    const value = event.target.value;
    setClassName(value);
  };

  return (
    <div className='flex p-2 flex-wrap w-full h-full overflow-hidden'>
      {data && data.map(classcard => (
        <ClassCard key={classcard.id} name={classcard.name} />
      ))}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <input
              type="text"
              value={className}
              onChange={handleClassNameChange}
              placeholder="Enter class name"
              className="border border-gray-300 p-2 rounded-md mb-4"
            />
            <button
              onClick={toggleDialog}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Handle adding class here
                toggleDialog();
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ml-2"
            >
              Add
            </button>
          </div>
        </div>
      )}
      <button
        title="Add New"
        onClick={toggleDialog}
        className="group cursor-pointer outline-none hover:rotate-90 duration-300 h-[50px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth="1.5"
          ></path>
          <path d="M8 12H16" strokeWidth="1.5"></path>
          <path d="M12 16V8" strokeWidth="1.5"></path>
        </svg>
      </button>
    </div>
  );
}
