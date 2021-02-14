import React from 'react';
import './Item.css';


function Item(props){

    let styles ={
        width:props.item.width,
        height:props.item.height
    };


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