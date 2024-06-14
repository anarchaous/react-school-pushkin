import React, { useEffect, useState } from 'react';
import './Aboutus.css';

function Aboutus() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width
    handleResize();

    // Update window width on resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

    gsap.from('.about-block.first', { opacity: 0, x: -100, duration: 1 });

    
  }, []);

  useEffect(() => {
    if (windowWidth > 768) {

      

      gsap.from('.about-block.second', {
        opacity: 0,
        x: 100,
        duration: 0.5,
        scrollTrigger: {
          markers: false,
          trigger: '.text-text-text',
          start: 'top center',
        },
      });
      

      gsap.from('.about-block.third', {
        opacity: 0,
        x: -100,
        duration: 0.5,
        scrollTrigger: {
          trigger: '.text-text-text-text',
          markers: false,
          start: 'top center',
        },
      });
    }
  }, [windowWidth]);

  useEffect(() => {
    // GSAP animation to start only when all elements are ready
    gsap.from('.about-block.first', { opacity: 0, x: -100, duration: 1 });
    gsap.from('.about-block.second', { opacity: 0, x: 100, duration: 0.5 });
    gsap.from('.about-block.third', { opacity: 0, x: -100, duration: 0.5 });
  }, []);

  return (
    <div className="about-main">
      <div className="container">
        <div className="about-block left first">
          <div className="text">
            <h1>О нашей школе</h1>
            <p>Школа №37 имени Александра Пушкина - это престижное учебное заведение, которое находится в сердце города Нукуса. 
              Мы гордимся нашей богатой историей и стремимся обеспечить высококачественное образование каждому нашему ученику.
              Наша школа уделяет особое внимание не только академическому успеху, но и развитию личности.</p>
            <p>Мы поддерживаем индивидуальный подход к каждому ученику, помогая им раскрыть свой потенциал и достичь успеха в различных сферах жизни.</p>
          </div>
          <div className="image">
            <img src='https://avatars.mds.yandex.net/get-altay/9793917/2a0000018c07b15c2b46d16a14c1ce03c6f3/L_height' alt="Школа" />
          </div>
        </div>

        <div className="about-block right second">
          <div className="image text-text-text">
            <img src='https://avatars.mds.yandex.net/get-altay/9663145/2a0000018a427519165310b23926c1ed8409/L_height' alt="Школа" />
          </div>
          <div className="text flex">
            <h1 className=''>Наша миссия</h1>
            <p className=''>Наша школа стремится не только к академическим достижениям, но и к развитию личности каждого ученика. Мы предлагаем разнообразные образовательные программы, способствующие всестороннему развитию.</p>
            <p>В нашей школе работают высококвалифицированные преподаватели, которые с любовью и профессионализмом подходят к обучению. Мы гордимся нашими выпускниками, которые добиваются успехов в различных сферах жизни.</p>
          </div>
        </div>

        <div className="about-block left third">
          <div className="text">
            <h1>Наши преподаватели</h1>
            <p>Мы гордимся нашим коллективом преподавателей, которые обладают высоким уровнем профессионализма и преданности своему делу. Каждый учитель в нашей школе стремится вдохновлять и мотивировать своих учеников.</p>
            <p>Наша школа предоставляет возможности для постоянного профессионального роста и развития преподавателей, что позволяет им использовать современные методы и подходы в обучении.</p>
          </div>
          <div className="image">
            <img className='text-text-text-text' src='https://avatars.mds.yandex.net/get-altay/11383855/2a0000018c07b16ecda27450541e04c94fa7/L_height' alt="Школа" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Aboutus;
