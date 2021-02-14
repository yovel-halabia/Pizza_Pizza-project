import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
import './OrderDrink.css';
import {items} from '../data.js';


function OrderDrink(props){

    const [choose , setChoose] = React.useState();
    const [bigClass , setBigClass] = React.useState(["" ,"" ,"","","",""]);

    function createItem(item , index){
        return(
            <div>
                <img id={item.id} className={"odimg "+bigClass[index]} src={item.image} onClick={()=>handleItemClick(item,index)}/>  
            </div>
        )
    }

    function handleItemClick(item,index){
        let array = ["" ,"" ,"","","",""];
        array[index]="big"
        setBigClass(array);
        setChoose(item);
        
    }

    function handleClick(){
        const orderItem={name:choose.name, cost:choose.cost};
        props.onChange(orderItem);
    }



    return(
        <div className={props.className == "hidden"?"hidden":""}>
            <ScrollContainer className="scroll-container oddrinks">
                {items.filter(function(item){return item.type === "drink"}).map(createItem)}
            </ScrollContainer>
            <div className="mobtn" onClick={handleClick}>
            <a>DONE</a>
            </div>   
            
        </div>


        
    )
}

export default OrderDrink;