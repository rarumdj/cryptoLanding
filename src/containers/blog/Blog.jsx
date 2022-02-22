import React from 'react';
import { Article } from '../../components';
import './Blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './import';

const Blog = () => {
    return (
    <div className='cy__blog section__padding' id='blog'>
        <div className='cy__blog-heading'>
            <h1 className='gradient__text'>A lot is happening, <br />We are blogging about it.</h1>
        </div>
        <div className='cy__blog-container'>
            <div className='cy__blog-container__groupA'>
                <Article imgUrl={blog01} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
            </div>
            <div className='cy__blog-container__groupB'>
                <Article imgUrl={blog02} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
                <Article imgUrl={blog03} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
                <Article imgUrl={blog04} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
                <Article imgUrl={blog05} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
            </div>
        </div>
    </div>
        );
};

export default Blog;
