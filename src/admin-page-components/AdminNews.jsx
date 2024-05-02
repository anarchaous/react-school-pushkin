import React, { useState, useEffect } from 'react';
import axios from 'axios';

function deleteNews(newsId) {
    axios.delete(`https://pushkin.onrender.com/api/news/${newsId}`)
        .then(response => {
            alert("News deleted successfully");
            // Дополнительные действия, например, обновление списка новостей
        })
        .catch(error => {
            alert("Error deleting news: " + error);
        });
}

function NewsCard(props) {
    const trimmedText = props.text.substring(0, 200) + (props.text.length > 200 ? '...' : '');

    const handleDelete = () => {
        deleteNews(props.id);
    };

    return(
        <div className="card">
            {/* {props.image.map((image, index) => (
                <img key={index} src={image.path} alt={`image_${index}`} />
            ))} */}
             <img src={props.image[0].path} alt='' />
            <div className="content">
                <a href="#">
                    <span className="title">
                        {props.title}
                    </span>
                </a>

                <p className="desc">
                    {trimmedText}
                </p>

                <a className="action" href="#">
                    {props.date}
                    <span aria-hidden="true">
                        →
                    </span>
                </a>
                <button onClick={handleDelete} className='bg-blue-900 p-2 text-white font-bold ml-2 rounded-md'>Удалить</button>
            </div>
        </div>
    );
}

function AdminNews() {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('https://pushkin.onrender.com/api/news')
          .then(response => {
            console.log(response.data);
            console.log(response); // Вывод данных в консоль
            setData(response.data); // Установка данных в состояние
          })
          .catch(error => console.error('Error fetching news:', error));
      }, []);

    return(
        <div className="adminnews flex flex-col jusitfy-center items-center">
             {data && data.map(news => <NewsCard 
                key={news.id}
                id={news.id}
                title={news.title}
                text={news.text}
                date={news.date}
                image={news.images}
            />)}
        </div>
    )
}

export default AdminNews;
