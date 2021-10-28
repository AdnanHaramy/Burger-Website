import React from 'react';
import '../portfolio/portfolio.css'
import Development from '../images/Development.jpg'
function Portfolio() {
    return <React.Fragment>
        <h1 className="introTitle">Our Projects</h1>
        <p className="introSubTitle">Check the real innovation of problem solving </p>
        <div className="portfolioCard" >
            <div className="portfolioCardChild1">
                <img id="porffolioCardImage" src={Development} alt="" />
            </div>
            <div className="portfolioCardChild2">
                <h2 id="portfolioCardHeading" >Development</h2>
                <p id="portfolioCardParagraph" >Lorem ipsum dolor sit amet.</p>
                <p id="portfolioCardSubParagraph"> Lorem ipsum dolor sit amet <br />
                    consectetur adipisicing elit. Alias ex optio eos.</p>
                <div className="portfolioCardButton">
                    View Project
                </div>
            </div>
        </div>
    </React.Fragment>;
}
export default Portfolio;