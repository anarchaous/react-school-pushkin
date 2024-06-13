import React from "react";
import './newsmain.css'
import { Link } from "react-router-dom";

function NewsCard(props) {
  const trimmedText = props.text.substring(0, 200) + (props.text.length > 200 ? '...' : '');

  return(
    <div className="card">
      <Link to={`/news/${props.id}`}>
        <img className="card-img" src={props.image[0].path} alt="image" />
        <div className="content">
          <span className="title">{props.title}</span>
          <p className="desc">{trimmedText}</p>
          <span className="action">{props.date}</span>
        </div>
      </Link>
    </div>
  );
}


export default NewsCard;