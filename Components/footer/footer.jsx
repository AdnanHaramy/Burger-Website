import React from 'react';
import Logo from '../images/Rou copy.png'
import '../footer/footer.scss'
const Footer = () => (
    <div className='footerContainer'>
        <div className="footerLogo">
            <ul>
                <li> <img className='footerImg' src={Logo} alt="" /> </li>
                <li  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit natus <br />
                    Tenetur  odio qui quod ea placeat non necessatibus odit, sint?
                </li>
            </ul>
        </div>
        <div className="about">
            <ul>
                <li className='footerHeading' >About</li>
                <li>About US</li>
                <li>Services</li>
                <li>Our Story</li>
                <li>Support</li>
            </ul>
        </div>
        <div className="service">
            <ul>
                <li className='footerHeading' >Service</li>
                <li>Development</li>
                <li>Consultancy</li>
                <li>Maintenance</li>
                <li>Design</li>
            </ul>
        </div>
        <div className="getInTouch">
            <ul  >
                <li className='footerHeading' >Get In touch</li>
                <li> adnan@gmail.com </li>
                <li> +963945357295 </li>
                <li> Aleppo, Syria</li>
            </ul>
        </div>
    </div>
)
export default Footer;