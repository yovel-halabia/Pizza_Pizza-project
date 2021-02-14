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

    const history= useHistory();
    
    const cookies = new Cookies();

    console.log(cookies.get('orderItems'))

    
    

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
            // add the item to order lists
            console.log(true);
        }else{
            
            cookies.set('item', item , { path: '/' });
            history.push("/make-order");
         }
    }
        
    



    return(

        <div className="mecontent">
            <Dropdown /> 
                
            <div className="mescroll">
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

                <Checkout />
            </div>
        </div>
        
    )
}

export default MenuPage;