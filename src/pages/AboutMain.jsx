import React from 'react';
import Footer from '../components/Footer';

export default function AboutMain() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-lg shadow-xl p-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img src='https://avatars.mds.yandex.net/get-altay/9793917/2a0000018c07b15c2b46d16a14c1ce03c6f3/L_height' alt="Школа" className="w-full rounded-lg border-2 border-gray-500" />
              <img src='https://avatars.mds.yandex.net/get-altay/9663145/2a0000018a427519165310b23926c1ed8409/L_height' alt="Школа" className="w-full rounded-lg border-2 border-gray-500 mt-4" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-4xl font-bold mb-6">О нашей школе</h1>
              <p className="text-xl leading-relaxed mb-4">
                Школа №37 имени Александра Пушкина - это престижное учебное заведение, которое находится в сердце города Нукуса. 
                Мы гордимся нашей богатой историей и стремимся обеспечить высококачественное образование каждому нашему ученику.
              </p>
              <p className="text-xl leading-relaxed mb-4">
                Наша школа уделяет особое внимание не только академическому успеху, но и развитию личности. 
                Мы поддерживаем индивидуальный подход к каждому ученику, помогая им раскрыть свой потенциал и достичь успеха в различных сферах жизни.
              </p>
              <p className="text-xl leading-relaxed mb-4">
                В нашей школе работают высококвалифицированные преподаватели, которые с любовью и профессионализмом подходят к обучению.
                Мы предлагаем разнообразные образовательные программы, способствующие всестороннему развитию наших учеников.
              </p>
              <p className="text-xl leading-relaxed">
                Приходите в нашу школу и станьте частью нашей дружной и вдохновляющей образовательной семьи!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
