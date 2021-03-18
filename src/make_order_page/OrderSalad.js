import React from 'react';
import './OrderSalad.css';

function OrderSalad(props){
    
    let array = [];
    let extraArray = [];
    for(let i = 0 ; i < props.item.saladExtras.length ;i++){
        array.push(false);
    }
    if(props.editItem){
        extraArray = props.editItem.extras;
        props.editItem.extras.map(item => array[item.position]= true);
    }else if(props.item.extras){
        extraArray = props.item.extras;
        props.item.extras.map(item => array[item.position]= true);
    }
    
    const [extras , setExtras] = React.useState(extraArray);
    const [ischecked , setIsChecked] = React.useState(array);

    function handleCheck(extra,index){

        if(extras.some(item=>item.name.includes(extra))){
            setExtras(prev => prev.filter(function(item){return item.name !== extra}));
        }else{
            setExtras(prev => [...prev, {name:extra , position:index}]);
        }
        setIsChecked((prev)=>{
            return prev.map((prevItem,prevIndex)=>{
                    if(prevIndex === index){
                        if(prevItem){
                            return false; 
                        }else{
                            return true;
                        }
                        
                    }else{
                        return prevItem;
                    }
                })
        });
    }

    function handleClick(item){
        let orderExtra;
        if(extras.length === 0){
            orderExtra = [{name:"with all"}]
        }else{
            orderExtra = extras;
        }
        const orderItem={name:item.name, cost:item.cost ,saladExtras:props.item.saladExtras, image:props.item.image,width:props.item.width,height:props.item.height,extras:orderExtra, type:"salad"};
        setExtras([]);
        setIsChecked((prev)=>prev.map(()=>false));
        props.onChange(orderItem , props.id);
        
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
                {props.item.saladExtras.map((extra,index)=>{
                   return <li className="osli"><input className="oscheckbox" type="checkbox" checked={ischecked[index]} onChange={() =>handleCheck(extra,index)} />{extra}</li>
                })}
            </ul>
        </div>

        <div className="mobtn osbtn" onClick={()=>handleClick(props.item)}>
            <a>DONE</a>
        </div>
        
        </div>
    )       
}

export default OrderSalad;