import React from 'react';
import {items} from '../data';
import './ChooseSalad.css';


function ChooseSalad(props){
    const saladItems = items.filter(function(item){return item.type === "salad"});

    function createSaladItem(item){
        return(
            <div className="cscard">
                <img src={item.image} onClick={()=>handleClick(item)} style={{width:item.width, height:item.height}}/>
                <h5>{item.name}</h5>

            </div>
        )
    }

    function handleClick(item){
        props.onChange(null,props.id);
        props.getChosenSaladItem(item);
    }


    return (
        <div className={props.className == "hidden"?"hidden":""}>
            <h3>CHOOSE SALAD</h3>
            {saladItems.map(createSaladItem)}
        </div>
    )
}

export default ChooseSalad;