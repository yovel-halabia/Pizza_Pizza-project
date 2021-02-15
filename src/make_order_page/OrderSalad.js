import React from 'react';
import './OrderSalad.css';

function OrderSalad(props){
    const [extras , setExtras] = React.useState([]);

    function handleCheck(extra){
        if(extras.includes(extra)){
            setExtras(prev => prev.filter(function(item){return item !== extra}));
        }else{
            setExtras(prev => [...prev, extra]);
        }
    }

    function handleClick(item){
        let orderExtra;
        if(extras.length === 0){
            orderExtra = ["with all"]
        }else{
            orderExtra = extras;
        }
        const orderItem={name:item.name, cost:item.cost , extras:orderExtra};
        props.onChange(orderItem , props.id);
    }

    function createExtra(extra){
        return(
            <li className="osli"><input className="oscheckbox" type="checkbox" onChange={() =>handleCheck(extra)} />{extra}</li>
        )
    }


    return( 

        <div className={props.className == "hidden"?"hidden":"osgrid"}>
        <div className="ostitle">
            <h3>{props.item.name}</h3>
        </div>

        <div className="osimg-grid">
            <img className="osimg" src={props.item.image}/>
        </div>

        <div className="oscontent">
            <ul>
                {props.item.extras.map(createExtra)}
            </ul>
        </div>

        <div className="mobtn osbtn" onClick={()=>handleClick(props.item)}>
            <a>DONE</a>
        </div>
        
        </div>
    )       
}

export default OrderSalad;