import React from 'react';
import './Item.css';


function Item(props){

    let styles ={
        width:props.item.width,
        height:props.item.height
    };

    if(props.item.id === 0 && window.screen.width >=992){
        styles={
            width:props.item.width,
            height:props.item.height,
            margin:"45px 0"
        }
    }else if(props.item.id === 1 &&window.screen.width >=992){
        styles={
            width:props.item.width,
            height:props.item.height,
            margin:"35px 0"
        }
    }


    return(
        <div className="itcard">
            <img src={props.item.image} style={styles}/>
            <h5>{props.item.name}</h5>
            <p>{props.item.cost}₪</p>
            <button onClick={()=> props.handleClick(props.item)}>ORDER NOW</button>
        </div>
    )

}

export default Item;