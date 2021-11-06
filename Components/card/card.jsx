import React from 'react';
import '../card/card.scss'
const Card = ({ title, imageUrl, color }) => (
    <div className='cardContainer'>
        <div className="imageContainer">
            <img src={imageUrl} alt="" />
        </div>
        <div className="textContainer">
            <h1 className={`${color} cardContainerHeading`} >{title}</h1>
            <h2 className='cardContainerHeading2' >Lorem ipsum dolor sit amet</h2>
            <p className='cardContainerParagraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, eum.</p>
            <div className="viewProjectContainer">
                View Project
            </div>
        </div>
    </div>
)
export default Card;