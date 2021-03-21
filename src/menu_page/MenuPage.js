import React from 'react';
import {useHistory} from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import './MenuPage.css';
import Dropdown from './Dropdown';
import Item from './Item';
import Checkout from './Checkout';
import {items } from "../data";


function MenuPage(props){
    //send the location to mnavbar
    props.getLocation("menu");


    const localStorage =window.localStorage;
    const [orderItems , setOrderItems] = React.useState(JSON.parse(localStorage.getItem('orderItems')));
    const [isCheckout ,setIsCheckout] = React.useState(false);
    const [scrollPosition, setScrollPosition] = React.useState(0);
    
    
    const history= useHistory();
    
    let height;
    if(isCheckout){
       height={height:"100%"} 
    }else{
        height={height:"91%"} 
    }
    


    //create new Item
    function createItem(item) {
        return(
            <Item 
            key={item.id}
            id={item.id}
            item={item}
            handleClick={handleClick}
            />
        )
    }

    //if order now button is clicked
    function handleClick(item){

        if(item.type === "drink" || item.type === "dessert"){
            if(JSON.parse(localStorage.getItem('orderItems'))){

                localStorage.setItem('orderItems',JSON.stringify([...JSON.parse(localStorage.getItem('orderItems')),item]));  
            }else{

                localStorage.setItem('orderItems',JSON.stringify([item]));
            }
           
            setOrderItems(JSON.parse(localStorage.getItem('orderItems')));
            window.location.replace("/menu#checkout");
            

        }else{
            localStorage.setItem('item',JSON.stringify(item));
            history.push("/make-order");
        }
    }

    function onCheckout(bool){
        setIsCheckout(bool);
    }


    function onScroll(){
       setScrollPosition(document.getElementById("scroll").scrollTop);
    }
    
    
    



    return(

        <div className="mecontent">


            
            {!isCheckout&&<Dropdown scrollPosition={scrollPosition}/>}
                
            <div className="mescroll" style={height} id="scroll" onScroll={onScroll} >
                
                {!isCheckout&&
                <div>
                <div className="mesection" id="pizza"><text>PIZZA</text></div>
                {items.filter(item => item.type.includes("pizza")).map(createItem)} 

                <div className="mesection" id="deals"><text>DEALS</text></div>
                {items.filter(item => item.type.includes("deal")).map(createItem)} 

                <div className="mesection" id="salad"><text>SALAD</text></div>
                {items.filter(item => item.type.includes("salad")).map(createItem)} 

                <div className="mesection" id="desserts"><text>DESSERTS</text></div>
                {items.filter(item => item.type.includes("dessert")).map(createItem)} 

                <div className="mesection" id="beverages"><text>BEVERAGES</text></div>
                {items.filter(item => item.type.includes("drink")).map(createItem)} 
                </div>
                }


                <Checkout id="checkout" orderItems={orderItems} onCheckout={onCheckout}/>

                
            </div>
        </div>
        
    )
}

export default MenuPage;