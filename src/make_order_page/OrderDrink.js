import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
import './OrderDrink.css';
import {items} from '../data.js';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';


function OrderDrink(props){
    let prevChoose = {name:"",position:""};
    let array = ["" ,"" ,"","","",""];
    if(props.item){
        prevChoose = {name:props.item.extras[0],position:props.item.position};
        array[props.item.position]="big";
    }

    const [choose , setChoose] = React.useState(prevChoose);
    const [bigClass , setBigClass] = React.useState(array);
    const [alertMessage, setAlertMessage] = React.useState(false);

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
        setChoose({name:item.name,position:index});
        
    }

    function handleClick(){
        if(choose.name){
            const orderItem={name:"DRINK", cost:choose.cost ,extras:[choose.name.toLowerCase()],position:choose.position};
            props.onChange(orderItem);  
        }else{
            setAlertMessage(true);
            setTimeout(()=>{ setAlertMessage(false); }, 2000);
        }
        
    }



    return(

        <div className={props.className == "hidden"?"hidden":""}>
            <ScrollContainer className="scroll-container oddrinks">
                {items.filter(function(item){return item.type === "drink"}).map(createItem)}
            </ScrollContainer>
            <div className="odalert">
            <Collapse in={alertMessage}>
            <Alert severity="error">you must to select drink</Alert>
            </Collapse>
            </div>
            <h4>{choose.name}</h4>
            <button className="mobtn" onClick={handleClick}>
            DONE
            </button>   
            
        </div>  
    )
}

export default OrderDrink;