import React from 'react';
import './Checkout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCar, faStoreAlt,  faShoppingCart, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

function Checkout(){

    const [dropdown , setDropdown] = React.useState({name:"choose your option", icon:""});
    const [selectClass , setSelectClass] = React.useState({pickupClass:"hidden" ,deliveryClass:"hidden"});

    function handleCheckDelivery(){
        setDropdown({name:"Delivery", icon:faCar});
        setSelectClass({pickupClass:"hidden" ,deliveryClass:""})
    }

    function handleCheckPickup(){
        setDropdown({name:"Pickup", icon:faStoreAlt});
        setSelectClass({pickupClass:"" ,deliveryClass:"hidden"})
    }



    return(
        <div>
            <h5 id="checkout">CHECKOUT</h5>
            <div  class="dropdown show codr">
            <a   className="dropdown-button"   id="dropdownMenuLink" data-toggle="dropdown">
                <FontAwesomeIcon icon={dropdown.icon}/> {dropdown.name}  <FontAwesomeIcon className="drop-icon" icon={faCaretDown}/>
            </a>

            {/* get the css from dropdown component */}
            <div class="dropdown-menu codrme" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" onClick={handleCheckDelivery}><FontAwesomeIcon icon={faCar}/> Delivery</a>
                <hr/>
                <a class="dropdown-item"  onClick={handleCheckPickup}><FontAwesomeIcon  icon={faStoreAlt}/> Pickup</a>
            </div>
            </div> 
            
            <div className="coselect">
                <a className={selectClass.deliveryClass} href="#"><FontAwesomeIcon icon={faMapMarkerAlt}/> select delivery address</a>
                <text className={selectClass.pickupClass}>The order will be ready between 20-30 minutes after ordering</text>
            </div>
            

            <h6 className="cooreder-title" >YOUR ORDER</h6>

            <div className="coempty-cart">
              <FontAwesomeIcon className="cocart-icon"  icon={faShoppingCart}/>
              <br/>
              <text>Cart is empty. Add menu items.</text> 
            </div>

            {/* add oreders dive here */}
            

            <div className="cobtn">
                <a href="#" onClick="" >go to checkout</a>
            </div>
        
        </div>
    )
}

export default Checkout;