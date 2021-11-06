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
            <div className="cardGridChild1">
                <div className="cardChildImgContainer">
                    <img className='cardChildImg' src={squares} alt="" />
                </div>
                <h1 className='cardGridHeading'>Buisness Automation</h1>
                <p className='cardGridParagraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, delectus.</p>
            </div>
            <div className="cardGridChild1">
                <div className="cardChildImgContainer">
                    <img className='cardChildImg' src={headphones} alt="" />
                </div>
                <h1 className='cardGridHeading'>Realtime Support</h1>
                <p className='cardGridParagraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, delectus.</p>
            </div>
        </div>
        <div className="cardGridParent2">
            <div className="cardGridChild1">
                <div className="cardChildImgContainer">
                    <img className='cardChildImg' src={shoppingCart} alt="" />
                </div>
                <h1 className='cardGridHeading'>E-Commerce Support</h1>
                <p className='cardGridParagraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, delectus.</p>
            </div>
            <div className="cardGridChild1">
                <div className="cardChildImgContainer">
                    <img className='cardChildImg' src={placeholder} alt="" />
                </div>
                <h1 className='cardGridHeading'>Location Marking</h1>
                <p className='cardGridParagraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, delectus.</p>
            </div>
        </div>
        <div className="cardGridParent3">
            <div className="cardGridChild1">
                <div className="cardChildImgContainer">
                    <img className='cardChildImg' src={camera} alt="" />
                </div>
                <h1 className='cardGridHeading'>Video Production</h1>
                <p className='cardGridParagraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, delectus.</p>
            </div>
            <div className="cardGridChild1">
                <div className="cardChildImgContainer">
                    <img className='cardChildImg' src={upload} alt="" />
                </div>
                <h1 className='cardGridHeading'>File Upload Protocol</h1>
                <p className='cardGridParagraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, delectus.</p>
            </div>
        </div>
    </div>


)
export default CardGrid;