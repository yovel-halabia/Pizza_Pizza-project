import React from 'react';
import './DropDown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';






function DropDown(props){

    const [dropName, setDropName]= React.useState("pizza");

    React.useEffect(()=>{
        if(window.innerWidth <= 768){
            if(props.scrollPosition >= 0 && props.scrollPosition < 1000){
                setDropName("pizza");
            }else if(props.scrollPosition >=1000 && props.scrollPosition <2300){
                setDropName("deals"); 
            }else if(props.scrollPosition >= 2300 && props.scrollPosition <3300){
                setDropName("salad"); 
            }else if(props.scrollPosition >= 3300 && props.scrollPosition <4300){
                setDropName("desserts"); 
            }else if(props.scrollPosition >= 4300 && props.scrollPosition < 5600){
                setDropName("beverages"); 
            }else if(props.scrollPosition >= 5600){
                setDropName("checkout"); 
            } 
        }else if(window.innerWidth > 768&&window.innerWidth  <992){
            if(props.scrollPosition >= 0 && props.scrollPosition < 800){
                setDropName("pizza");
            }else if(props.scrollPosition >=800 && props.scrollPosition <1600){
                setDropName("deals"); 
            }else if(props.scrollPosition >= 1600 && props.scrollPosition <2300){
                setDropName("salad"); 
            }else if(props.scrollPosition >= 2300 && props.scrollPosition <3000){
                setDropName("desserts"); 
            }else if(props.scrollPosition >= 3000 && props.scrollPosition < 3700){
                setDropName("beverages"); 
            }else if(props.scrollPosition >= 3700){
                setDropName("checkout"); 
            } 
        }else if(window.innerWidth >=992){
            if(props.scrollPosition >= 0 && props.scrollPosition < 500){
                setDropName("pizza");
            }else if(props.scrollPosition >=500 && props.scrollPosition <1200){
                setDropName("deals"); 
            }else if(props.scrollPosition >= 1200 && props.scrollPosition <1700){
                setDropName("salad"); 
            }else if(props.scrollPosition >= 1700 && props.scrollPosition <2100){
                setDropName("desserts"); 
            }else if(props.scrollPosition >= 2100 && props.scrollPosition < 2500){
                setDropName("beverages"); 
            }else if(props.scrollPosition >= 2500){
                setDropName("checkout"); 
            } 
        }


    },[props.scrollPosition]);



    return(
        <div  class="dropdown show dr">
            <a href="#"  className="dropdown-button drbtn"   id="dropdownMenuLink" data-toggle="dropdown">
                {dropName} <FontAwesomeIcon className="drop-icon" icon={faCaretDown}/>
            </a>


            <div class="dropdown-menu drme" aria-labelledby="dropdownMenuLink">
                <hr/>
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