import React, { useLayoutEffect, useRef } from 'react';
import "../App.css";
import './news-page-styles/newsphoto.css';

export default function Newsphoto() {
  const hRef = useRef(null);

  useLayoutEffect(() => {
    const text = hRef.current.innerText;
    gsap.from(hRef.current, {
      opacity: 0,
      x: -130,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="newsphoto min-w-screen min-h-96 flex justify-center items-center">
      <h1 ref={hRef} className='newsphoto-title text-3xl font-bold text-white'>
        В школе №37 им. Пушкина растут таланты, светят знания.
      </h1>
    </div>
  );
}
