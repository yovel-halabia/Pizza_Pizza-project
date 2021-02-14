import React from 'react';
import './DropDown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';




function DropDown(){

    return(
        <div  class="dropdown show dr">
            <a href="#"  className="dropdown-button drbtn"   id="dropdownMenuLink" data-toggle="dropdown">
                dropdown <FontAwesomeIcon className="drop-icon" icon={faCaretDown}/>
            </a>


            <div class="dropdown-menu drme" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#pizza">PIZZA</a>
                <hr/>
                <a class="dropdown-item" href="#deals">DEALS</a>
                <hr/>
                <a class="dropdown-item" href="#salad">SALAD</a>
                <hr/>
                <a class="dropdown-item" href="#desserts">DESSERTS</a>
                <hr/>
                <a class="dropdown-item" href="#beverages">BEVERAGES</a>
                <hr/>
                <a class="dropdown-item" href="#checkout">CHECKOUT</a>
            </div>
        </div> 
    )
}
 
export default DropDown;