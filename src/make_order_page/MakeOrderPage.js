import React from 'react';
import Cookies from 'universal-cookie';
import {useHistory} from 'react-router-dom';
import './MakeOrderPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import OrderPizza from './OrderPizza';
import OrderSalad from './OrderSalad';
import OrderDeal from './OrderDeal';



function MakeOrder(props){

    const cookies = new Cookies();
    const item = cookies.get('item');
    const orderItems = cookies.get('orderItems');

    const history =useHistory();


    function checkOrder(){
        if(item.type === "salad"){
            return (<OrderSalad 
                item={item}
                onChange={handleOrder}
            />)
        }else if(item.type === "pizza"){
            return (<OrderPizza 
            item={item}
            onChange={handleOrder}
            />)
        }else if(item.type === "deal"){
            return (
                <OrderDeal 
                    item={item}
                    onChange={handleOrder}
                    
                />
            )
        }
    }

    function handleOrder(orderItem){
        //update the orderItems
        if(orderItems){
            cookies.set("orderItems",[...orderItems,orderItem],{path:'/'});
        }else{
            cookies.set("orderItems",[orderItem],{path:'/'});
        }
        handleCancel();
    }


    function handleCancel(){
        window.location.replace("/menu#checkout");
    }



    return(
        <div className="mo mecontent">
            <a  className="moreturn" onClick={handleCancel}>back to menu <FontAwesomeIcon icon={faCaretDown} style={{ transform: "rotate(-90deg)"}}/></a>
            <div className="mocontent">
                {checkOrder()} 
            </div>
            
        </div>
    )
}

export default MakeOrder;