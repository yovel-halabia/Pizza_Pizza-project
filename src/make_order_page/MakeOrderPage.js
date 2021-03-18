import React from 'react';
import Cookies from 'universal-cookie';
import './MakeOrderPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import OrderPizza from './OrderPizza';
import OrderSalad from './OrderSalad';
import OrderDeal from './OrderDeal';



function MakeOrder(props){

    const cookies = new Cookies();
    const item = cookies.get('item');
    let orderItems = cookies.get('orderItems');
    const index = cookies.get('index');


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
        if(orderItem && index){ 
            orderItems = orderItems.map((item,indexItem)=>{
                if(indexItem == index){
                    return orderItem;
                }else{
                    return item;
                }
            });
            cookies.set('orderItems',orderItems,{path:'/'});
            cookies.set('index',"",{path:'/'});

        }else if(orderItems){
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