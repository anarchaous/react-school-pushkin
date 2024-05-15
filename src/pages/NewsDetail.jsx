import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

export default function NewsDetail() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://pushkin-production.up.railway.app/api/news/${id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error('Error fetching news detail:', error));
    }, [id]);

    return (
        <div className='ndetails min-h-screen'>
            <Header />

            <div className="main flex flex-col items-center p-4">
                {data && (
                    <div className="news-details-container max-w-screen-lg w-full bg-white border-2 border-gray-400 shadow-xl rounded-md overflow-hidden">
                        <div className="news-header bg-transparent p-4">
                            <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
                            <p className="text-gray-600 mt-2">{data.date}</p>
                        </div>
                        <div className="news-body p-4">
                            {data.images && (
                                <div className="img-container mb-4">
                                    {data.images.map((image, index) => (
                                        <img key={index} src={image.path} alt={`Image ${index + 1}`} className="w-full h-auto mb-2 max-w-full" />
                                    ))}
                                </div>
                            )}
                            <div className="text-lg text-gray-800 leading-relaxed">
                                {data.text}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
