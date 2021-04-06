import React from 'react';
import './orderItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function OrderItem(props) {

    function onCancel(){
        props.onCancel(props.index);
    }

    function onEdit(){
        props.onEdit(props.index,props.item);
    }

    if(props.item.deal){
        return(
            <div className="oicard">

            {!props.isCheckout&&<div className="oibuttons">
                <FontAwesomeIcon icon={faEdit}  onClick={onEdit}/>
                <FontAwesomeIcon className="oicancel" icon={faTimes} onClick={onCancel}/>
            </div>
            }

            <h1>{props.item.name}</h1>
            <ul>
                {props.item.extras.map(item=><li>{item.name}{item.extras.map((extra,index) => {if(item.name === "DRINK"){return ": "+extra}else if(index===0){return " adds: "+extra.name}else{return ","+extra.name+" "}})}</li>)}
            </ul> 
            <p>{props.item.cost}₪</p>
            </div>
        )
    }else if(props.item.type === "dessert" || props.item.type === "drink"){
        return (
            <div className="oicard">

                {!props.isCheckout&&<div className="oibuttons">
                   <FontAwesomeIcon className="oicancel" icon={faTimes} onClick={onCancel}/>
                </div>
                }
                
                
                <h1>{props.item.name}</h1>
                <ul>
                    {props.item.extras&&props.item.extras.map(item=><li>{item.name}</li>)}
                </ul> 
                <p>{props.item.cost}₪</p>
            </div>
            )
    
    }else{
        return (
        <div className="oicard">

            {!props.isCheckout&&<div className="oibuttons"> 
                <FontAwesomeIcon icon={faEdit}  onClick={onEdit}/>
               <FontAwesomeIcon className="oicancel" icon={faTimes} onClick={onCancel}/>
            </div>
            }
            
            
            <h1>{props.item.name}</h1>
            <ul>
                {props.item.extras&&props.item.extras.map(item=><li>{item.name}</li>)}
            </ul> 
            <p>{props.item.cost}₪</p>
        </div>
        )
    }

    
}
