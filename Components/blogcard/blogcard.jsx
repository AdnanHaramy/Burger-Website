import React from 'react';
import '../blogcard/blogcard.scss'
const BlogCard = ({ title, color }) => (
    <div className={`blogCard`} >
        <h3 className={`${color} appDevelopment`}>{title}</h3>
        <h4>When The Music turns off the light</h4>
        <h4 className="dummyText">Lorem ipsum dolor sit amet.</h4>
    </div>
)
export default BlogCard;