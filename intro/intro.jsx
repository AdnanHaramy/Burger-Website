import React from 'react';
import '../intro/intro.scss';
import Layer1 from '../images/layer1.png'
const Intro = () => (
    <React.Fragment>
        <h1>Build Trust First</h1>
        <h2>Control your buisness with a single tap </h2>
        <div className="introCardContainer">
            <div className="introCard">
                <div className="introCardImageContainer">
                    <img src={Layer1} alt="" className="introCardImage" />
                </div>
                <h1 className='introCardHeading' >Complete Buisness Control</h1>
                <p className='introCardParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="introCard">
                <div className="introCardImageContainer">
                    <img src={Layer1} alt="" className="introCardImage" />
                </div>
                <h1 className='introCardHeading' >Complete Buisness Control</h1>
                <p className='introCardParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="introCard">
                <div className="introCardImageContainer">
                    <img src={Layer1} alt="" className="introCardImage" />
                </div>
                <h1 className='introCardHeading' >Complete Buisness Control</h1>
                <p className='introCardParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </React.Fragment>
)
export default Intro;