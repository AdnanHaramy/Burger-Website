import React from 'react';
import upload from '../images/upload.png'
import squares from '../images/squares.png'
import headphones from '../images/headphones.png'
import shoppingCart from '../images/shopping-cart.png'
import camera from '../images/video-camera.png'
import placeholder from '../images/placeholder.png'
import '../card-grid/card-grid.scss'
const CardGrid = () => (
    <div className='cardGridContainer'>
        <div className="cardGridParent1">
            <div className="cardGridChild">
                <img src={squares} alt="" className="cardGridImage" />
                <h1 className='cardGridHeading'>Business Automation</h1>
                <p className="cardGridParagraph">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="cardGridChild">
                <img src={headphones} alt="" className="cardGridImage" />
                <h1 className='cardGridHeading'>Realtime Support</h1>
                <p className="cardGridParagraph">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="cardGridParent2">
            <div className="cardGridChild">
                <img src={shoppingCart} alt="" className="cardGridImage" />
                <h1 className='cardGridHeading'>Ecommerce Support</h1>
                <p className="cardGridParagraph">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="cardGridChild">
                <img src={placeholder} alt="" className="cardGridImage" />
                <h1 className='cardGridHeading'>Location Marking</h1>
                <p className="cardGridParagraph">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="cardGridParent3">
            <div className="cardGridChild">
                <img src={camera} alt="" className="cardGridImage" />
                <h1 className='cardGridHeading'>Video Production</h1>
                <p className="cardGridParagraph">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="cardGridChild">
                <img src={upload} alt="" className="cardGridImage" />
                <h1 className='cardGridHeading'>File Upload Protocol</h1>
                <p className="cardGridParagraph">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
)
export default CardGrid;
