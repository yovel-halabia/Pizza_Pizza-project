import React from 'react';
import './NavBar.css';
// import backgroundImage from '../public/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar(props){


    return(
        
        <div className="nav-bar">
            <div className="logo" />
            <div className="links">
                <a href="/menu">menu</a>
                <a href="/about-us">about us</a>
                <a href="/contact-us">contact us</a> 
            </div>

            
            <div className="phone">
                <a href="tel:971-835-875">
                    <FontAwesomeIcon icon={faPhone}/>
                    <text>+971-835-875</text>
                </a> 
            </div> 
            

            <FontAwesomeIcon onClick={()=>props.setTrue()} className="mbutton" icon={faBars}/>
            
        </div>
    )
}

export default NavBar;