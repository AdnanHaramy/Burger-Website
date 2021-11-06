import React from 'react';
import '../blog/blog.scss'
import BlogCard from '../blogcard/blogcard';
class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            blogs: [
                {
                    title: 'App Development',
                    color: 'red',
                    id: 1,

                },
                {
                    title: 'Design',
                    color: 'green',
                    id: 2,
                },
                {
                    title: 'Research',
                    color: 'orange',
                    id: 3,
                },
            ],
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className='blogSectionContainer' >
                    <h1 className='blogHeading1' >From Our Blog</h1>
                    <h2 className='blogHeading2'>Get latest update</h2>
                    <div className="blogCardContainer" >
                        {
                            this.state.blogs.map(blog => (
                                < BlogCard
                                    key={blog.id}
                                    title={blog.title}
                                    color={blog.color}
                                />
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default Blog;