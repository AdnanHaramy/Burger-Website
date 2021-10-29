import React from 'react';
import '../contact/contact.css'
function Contact() {
    return <React.Fragment>
        <h1 className="introTitle">Contact Us</h1>
        <p className="introSubTitle">Stay connected with us for <br />  any reason</p>
        <div className="gridContainer">
            <div className="inputContainer">
                <h2 className="contactCardHeading" >Write us a message</h2>
                <input className="inputType1" type="text" placeholder="Your Name" />
                <input className="inputType1" type="text" placeholder="Your Email" />
                <input className="inputType1" type="text" placeholder="Subject" />
                <input className="inputType2" type="text" placeholder="Write Your Message Here" />
                <div className="getStarted">
                    <p className="getStartedText" >Get Started</p>
                </div>
            </div>
            <div className="iconContainer" >
                <p>Lorem ipsum dolor, sit amet consectetur <br />
                    adipisicing elit. Ipsum, dolorem?</p>
                <div className="iconWithTextContainer">
                    <div className="circularContainer1">
                    </div>
                    <h3>Phone</h3>
                    <p className="iconText1" >0-123-456-789</p>
                </div>
                <div className="iconWithTextContainer">
                    <div className="circularContainer2">
                    </div>
                    <h3>Email</h3>
                    <p className="iconText2"  > adnanharamy@gmail.com </p>
                </div>
                <div className="iconWithTextContainer">
                    <div className="circularContainer3">
                    </div>
                    <h3>Address</h3>
                    <p className="iconText3">Aleppo , Syria</p>
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default Contact;