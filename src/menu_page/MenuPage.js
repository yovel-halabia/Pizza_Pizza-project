import React from 'react';
import {useHistory} from 'react-router-dom';
import Cookies from 'universal-cookie';
import './MenuPage.css';
import Dropdown from './Dropdown';
import Item from './Item';
import Checkout from './Checkout';
import {items } from "../data";


function MenuPage(props){
    //send the location to mnavbar
    props.getLocation("menu");


    const cookies = new Cookies();
    const [orderItems , setOrderItems] = React.useState(cookies.get('orderItems'));
    const [isCheckout ,setIsCheckout] = React.useState(false);
    

    const history= useHistory(); 
    

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
            if(cookies.get('orderItems')){
               cookies.set('orderItems',[...cookies.get('orderItems'),item],{path:'/'});  
            }else{
               cookies.set('orderItems',[item],{path:'/'});
            }
           
            setOrderItems(cookies.get('orderItems'));
            window.location.replace("/menu#checkout");
            

        }else{
            cookies.set('item', item , { path: '/' });
            history.push("/make-order");
         }
    }

    function onCheckout(bool){
        setIsCheckout(bool);
    }
        
    



    return(

        <div className="mecontent">
            
            {!isCheckout&&<Dropdown />}
                
            <div className="mescroll">
                
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