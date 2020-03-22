import './MediaCard.css';
import React from 'react';

export const MediaCard = (props:IMediaCardProps) => {
  return (
    <a href={props.link} className="card card-clickable" /*style={width: '18rem'}*/>
      <img src={props.imageSrc} alt={props.imageAlt} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </a>
  );
}

export default MediaCard;
