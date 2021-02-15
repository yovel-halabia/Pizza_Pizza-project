import React from 'react';
import {items} from '../data';
import OrderPizza from './OrderPizza';
import OrderDrink from './OrderDrink';
import ChooseSalad from './ChooseSalad';
import OrderSalad from './OrderSalad';

function OrderDeal(props){
    const [orderPosition,setOrderPosition] = React.useState(["","hidden","hidden","hidden"]);
    const [chosenSaladItem, setChosenSaladItem] = React.useState(items[7]);
    const [orderDealItem , setOrderDealItem] = React.useState([]);
    
    
    

    function checkDeal(){
        
        switch(props.item.id){
            case 3:
                //2 FAMILY TRAY L + DRINK
                return(
                    
                    <div>
                        
                        <OrderPizza
                            id={0}
                            className={orderPosition[0]}
                            item={items[1]}
                            onChange={goNext}
                        />
                        <OrderPizza
                            id={1}
                            className={orderPosition[1]}
                            item={items[1]}
                            onChange={goNext}
                        />
                        <OrderDrink
                            id={2}
                            className={orderPosition[2]}
                            onChange={finishOrder}
                        />
                    </div>
                    
                );
            case 4:
                //3 FAMILY TRAY L + DRINK
                return(                    
                    <div>
                        <OrderPizza
                            id={0}
                            className={orderPosition[0]}
                            item={items[1]}
                            onChange={goNext}
                        />
                        <OrderPizza
                            id={1}
                            className={orderPosition[1]}
                            item={items[1]}
                            onChange={goNext}
                        />
                        <OrderPizza
                            id={2}
                            className={orderPosition[2]}
                            item={items[1]}
                            onChange={goNext}
                        />
                        <OrderDrink
                            id={3}
                            className={orderPosition[3]}
                            onChange={finishOrder}
                        />
                    </div>
                    );
            case 5:
                //3 FAMILY TRAY XL + DRINK
                return(
                    <div>
                        <OrderPizza
                            id={0}
                            className={orderPosition[0]}
                            item={items[2]}
                            onChange={goNext}
                        />
                        <OrderPizza
                            id={1}
                            className={orderPosition[1]}
                            item={items[2]}
                            onChange={goNext}
                        />
                        <OrderDrink
                            id={2} 
                            className={orderPosition[2]}
                            onChange={finishOrder}
                        />
                    </div>
                    );
            case 6:
                //FAMILY TRAY XL + SALAD + DRINK
                return(
                    <div>
                        <OrderPizza
                        id={0}
                        className={orderPosition[0]}
                        item={items[2]}
                        onChange={goNext}
                        />
                        <ChooseSalad
                            id={1}
                            className={orderPosition[1]}
                            onChange={goNext}
                            getChosenSaladItem={getChosenSaladItem}
                        />
                        <OrderSalad 
                            id={2}
                            item={chosenSaladItem}
                            className={orderPosition[2]}
                            onChange={goNext}
                        />
                        <OrderDrink
                        id={3} 
                        className={orderPosition[3]}
                        onChange={finishOrder}
                        />
                    </div>
                );
        }
    }

    function getChosenSaladItem(item){
        setChosenSaladItem(item);
    }

    function goNext(orderItem, id){
        let array = ["hidden","hidden","hidden","hidden"];
        array[id+1]="";
        setOrderPosition(array);
        if(orderItem){
            let arrayDeal = orderDealItem;
            arrayDeal.push(orderItem);
            setOrderDealItem(arrayDeal);
        }
        
    }

    function finishOrder(orderItem){
        goNext(orderItem);
        props.onChange(orderDealItem); 
        
    }





    return (
        <div >
            {checkDeal()}
        </div>
    )
}

export default OrderDeal;