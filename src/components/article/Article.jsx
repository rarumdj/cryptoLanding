import React from 'react';
import './Article.css';

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='cy__blog-container__article'>
      <div className='cy__blog-container__article-img'>
        <img src={imgUrl} alt='blog' />
      </div>
      <div className='cy__blog-container__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
