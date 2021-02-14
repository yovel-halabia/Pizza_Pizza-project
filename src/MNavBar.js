import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './MNavBar.css';




function MNavBar(props){


    return(
        <div className={props.navClick?"mnav-bar":"hidden"}> 
            <FontAwesomeIcon onClick={()=>{props.setFalse()}} className="itimes" icon={faTimes}/>
            <div className="mlinks">
                <div>
                    <a className={props.getLocation === "menu" ?"acolor":"ma"} href="/menu">menu </a>
                </div>
                <div>
                    <a className={props.getLocation === "about_us" ?"acolor":"ma"} href="/about-us">about us</a>
                </div>
                <div>
                    <a className={props.getLocation === "contact_us" ?"acolor":"ma"} href="/contact-us">contact us</a>
                </div>
            </div>


        </div>
    )
}

export default MNavBar;