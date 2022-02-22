import React from 'react';
import './Feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='cy__features-list__feature'>
      <div className='cy__features-list__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='cy__features-list__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
