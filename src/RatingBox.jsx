import React from 'react';
import './ratingBox.scss';

function RatingBox({ text }) {
  return (
    <div className="ratingBox__container">
      <div className="container__stars">
        <img src="/images/icon-star.svg" alt="star" />
        <img src="/images/icon-star.svg" alt="star" />
        <img src="/images/icon-star.svg" alt="star" />
        <img src="/images/icon-star.svg" alt="star" />
        <img src="/images/icon-star.svg" alt="star" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default RatingBox;
