import React from 'react';
import '../blog/blog.scss'
const Blog = () => (
    <React.Fragment>
        <section>
            <h1>From Our Blog</h1>
            <h2>Get latest update</h2>
            <div className="blogCard">
                <h3 className="appDevelopment">App Development</h3>
                <h4>When The Music turns off the light</h4>
                <h4 className="dummyText">Lorem ipsum dolor sit amet.</h4>
            </div>
            <div className="blogCard">
                <h3 className="Design" >Design</h3>
                <h4>When The Music turns off the light</h4>
                <h4 className="dummyText">Lorem ipsum dolor sit amet.</h4>
            </div>
            <div className="blogCard">
                <h3 className="research" >Research</h3>
                <h4>When The Music turns off the light</h4>
                <h4 className="dummyText">Lorem ipsum dolor sit amet.</h4>
            </div>
        </section>
    </React.Fragment>
)
export default Blog;