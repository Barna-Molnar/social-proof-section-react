import React from 'react';
import './testimonialBox.scss';

function TestimonialBox({ obj, alignment }) {
  console.log(alignment);
  return (
    <div
      className="card__container"
      style={{
        alignSelf: alignment === 'center' ? 'center' : `flex-${alignment}`,
      }}
    >
      <div className="card__header">
        <img src={obj.imgURL} alt="" className="card__header__img" />
        <div className="card__header__title">
          <h4>{obj.name}</h4>
          <p>{obj.statement}</p>
        </div>
      </div>
      <div className="card__body">
        <p>{obj.text}</p>
      </div>
    </div>
  );
}

export default TestimonialBox;
