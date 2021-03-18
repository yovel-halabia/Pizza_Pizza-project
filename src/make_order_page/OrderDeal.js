import React from 'react';
import "./OrderDeal.css";
import {items} from '../data';
import OrderPizza from './OrderPizza';
import OrderDrink from './OrderDrink';
import ChooseSalad from './ChooseSalad';
import OrderSalad from './OrderSalad';

function OrderDeal(props){
    const [chosenSaladItem, setChosenSaladItem] = React.useState(items[7]);
    const [orderDealItem , setOrderDealItem] = React.useState({id:props.item.id,deal:true,type:"deal",name:props.item.name,cost:props.item.cost, extras:[]});
    let array = [];
    switch(props.item.id){
        case 3:
             //2 FAMILY TRAY L + DRINK
            array= [{display: '',name:items[1].name,done:false},{display: 'hidden',name:items[1].name,done:false},{display: 'hidden',name:"DRINK",done:false}];
            break;
        case 4:
            //3 FAMILY TRAY L + DRINK
            array= [{display: '',name:items[1].name,done:false},{display: 'hidden',name:items[1].name,done:false},{display: 'hidden',name:items[1].name,done:false},{display: 'hidden',name:"DRINK",done:false}];
            break;
        case 5:
            //3 FAMILY TRAY XL + DRINK
            array= [{display: '',name:items[2].name,done:false},{display: 'hidden',name:items[2].name,done:false},{display: 'hidden',name:items[2].name,done:false},{display: 'hidden',name:"DRINK",done:false}];
            break;
        case 6:
            //FAMILY TRAY XL + SALAD + DRINK
            array= [{display: '',name:items[2].name,done:false},{display: 'hidden',name:"SALAD",done:false},{display: 'hidden',name:"choose salad"},{display: 'hidden',name:"DRINK",done:false}];
            break;
    }
    const [orderPosition,setOrderPosition] = React.useState(array);

    const localStorage =window.localStorage;
    const item = JSON.parse(localStorage.getItem('item'));
    

    

    function checkDeal(){
        
        switch(props.item.id){
            case 3:
                //2 FAMILY TRAY L + DRINK
                return(
                    
                    <div>
                        
                        <OrderPizza
                            id={0}
                            className={orderPosition[0].display}
                            item={item.extras?item.extras[0]:items[1]}
                            onChange={goNext}
                        />
                        <OrderPizza
                            id={1}
                            className={orderPosition[1].display}
                            item={item.extras?item.extras[1]:items[1]}
                            onChange={goNext}
                        />
                        <OrderDrink
                            id={2}
                            className={orderPosition[2].display}
                            onChange={finishOrder}
                            item={item.extras&&item.extras[2]}
                        />
                    </div>
                    
                );
            case 4:
                //3 FAMILY TRAY L + DRINK
                return(                    
                    <div>
                        <OrderPizza
                            id={0}
                            className={orderPosition[0].display}
                            item={item.extras?item.extras[0]:items[1]}
                            onChange={goNext}
                        />
                        <OrderPizza
                            id={1}
                            className={orderPosition[1].display}
                            item={item.extras?item.extras[1]:items[1]}
                            onChange={goNext}
                        />
                        <OrderPizza
                            id={2}
                            className={orderPosition[2].display}
                            item={item.extras?item.extras[2]:items[1]}
                            onChange={goNext}
                        />
                        <OrderDrink
                            id={3}
                            className={orderPosition[3].display}
                            onChange={finishOrder}
                            item={item.extras&&item.extras[3]}
                        />
                    </div>
                    );
            case 5:
                //3 FAMILY TRAY XL + DRINK
                return(
                    <div>
                        <OrderPizza
                            id={0}
                            className={orderPosition[0].display}
                            item={item.extras?item.extras[0]:items[1]}
                            onChange={goNext}
                        />
                        <OrderPizza
                            id={1}
                            className={orderPosition[1].display}
                            item={item.extras?item.extras[1]:items[1]}
                            onChange={goNext}
                        />
                        <OrderPizza
                            id={2}
                            className={orderPosition[2].display}
                            item={item.extras?item.extras[2]:items[1]}
                            onChange={goNext}
                        />
                        <OrderDrink
                            id={3} 
                            className={orderPosition[3].display}
                            onChange={finishOrder}
                            item={item.extras&&item.extras[3]}
                        />
                    </div>
                    );
            case 6:
                //FAMILY TRAY XL + SALAD + DRINK
                return(
                    <div>
                        <OrderPizza
                        id={0}
                        className={orderPosition[0].display}
                        item={item.extras?item.extras[0]:items[1]}
                        onChange={goNext}
                        />
                        <ChooseSalad
                            id={1}
                            className={orderPosition[1].display}
                            onChange={goNext}
                            getChosenSaladItem={getChosenSaladItem}
                        />
                        <OrderSalad 
                            id={2}
                            item={chosenSaladItem}
                            editItem={item.extras&&item.extras[1]}
                            className={orderPosition[2].display}
                            onChange={goNext}
                        />
                        <OrderDrink
                        id={3} 
                        className={orderPosition[3].display}
                        onChange={finishOrder}
                        item={item.extras&&item.extras[3]}
                        />
                    </div>
                );
        }
    }

    function getChosenSaladItem(item){
        setChosenSaladItem(item);
    }

    function goNext(orderItem, id){
        setOrderPosition((prev)=>{
            return prev.map((item,index)=>{
                if(index === id){
                    return {...item,display:"hidden",done:true}
                }else if(index === (id+1)){
                    return {...item,display:""}
                }else{
                    return item;
                }
            })
        });

        if(orderItem){
            console.log(orderItem);
            let arrayDeal = orderDealItem.extras;
            if(orderDealItem.extras[id]){
                arrayDeal = arrayDeal.map((item,index)=>{if(index===id){return orderItem}else{return item}});
            }else if(orderItem.type === "salad"&&orderDealItem.extras[id-1]){

                arrayDeal = arrayDeal.map((item,index)=>{if(index===id-1){return orderItem}else{return item}});
                
            }else{
               arrayDeal.push(orderItem); 
            }
            setOrderDealItem(prev=>{return{...prev,extras:arrayDeal}});
        }
        
    }

    function finishOrder(orderItem){
        goNext(orderItem);
        props.onChange(orderDealItem); 
        
    }

    function renderSection(item,index){
        if(item.name != "choose salad"){
            return (
            <div onClick={()=>navInSections(index)} className="odsection">
            <text className={item.done&&"odwhite"}>{item.name}</text>
            <div className={item.done?"odbox odboxwhite":"odbox odboxblack"}></div>
            <div className={item.done&&"oddone"}></div>
            </div>
            )
        }
    }

    function navInSections(index){


        setOrderPosition((prev)=>{
            return prev.map((prevItem,prevIndex)=>{
                if(prevItem.display === ""&& index != prevIndex){
                    return {...prevItem , display: "hidden"}
                }else if(prevIndex === index){
                    return {...prevItem , display: "",done:false};
                }else if(prevIndex > index){
                    return {...prevItem,done:false};
                }else{
                    return prevItem;
                }
            });
        })


    }


    return (
        <div >
            <div className="odprogressbar">
                {orderPosition.map((item,index)=>{
                    return renderSection(item,index);  
                }
                )}
            </div>
            {checkDeal()}
        </div>
    )
}

export default OrderDeal;