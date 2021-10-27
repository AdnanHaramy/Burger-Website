import React from 'react';
import '../intro/intro.css'
import layer1 from '../images/layer1.png'
import layer2 from '../images/layer2.png'
import layer3 from '../images/layer3.png'
function Intro() {
    return <React.Fragment>
        <h1 className='introTitle' >BUILD TRUST FIRST </h1>
        <p className="introSubTitle" >Control your buisness with a single tap</p>
        <div className="parent">
            <div className="cardContainer">
                <div className="card1">
                    <div className="cardChild">
                        <img src={layer3} alt="" />
                    </div>
                    <h2>Complete Buisness Control</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card2">
                    <div className="cardChild">
                        <img src={layer2} alt="" />
                    </div>
                    <h2>Critical analytics and report</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card3">
                    <div className="cardChild">
                        <img src={layer1} alt="" />
                    </div>
                    <h2>User satisfaction guarnteed</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>

    </React.Fragment>
}
export default Intro;
