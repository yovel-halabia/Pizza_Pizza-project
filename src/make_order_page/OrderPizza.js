import React from 'react';
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import './OrderPizza.css';
import {extras , pizza_slices} from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import ChooseBox from './ChooseBox';

function OrderPizza(props){
    const [chooseBox , setChooseBox] = React.useState({display:false,extraPosition:"",extra:""});
    const [orderExtras , setOrderExtras] = React.useState([]);
    const [pizzaSliceExtras , setPizzaSliceExtras] = React.useState({pizzaSlice1:[],pizzaSlice2:[],pizzaSlice3:[],pizzaSlice4:[]});
    const [alertMessage , setAlertMessage] = React.useState({display:false , content:""})

    function createExtra(extra, index){
        return(
            <Draggable draggableId={extra.name} index={index}>
                {(provided,snapshot) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                        <img style={{width:extra.width, height:extra.height}} src={extra.image}/>    
                        <br/>
                        <text className={snapshot.isDragging&&"hidden"}>{extra.name}</text>
                    </div>   
                )}
            </Draggable>    
        )
    }

    function handleClick(){
        const extrasArray = orderExtras.map((item)=>{return item.name});
        const orderItem ={name:props.item.name, cost:props.item.cost , extras:extrasArray};
        props.onChange(orderItem , props.id);
    }

    function onDragEnd(result){
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }else if(destination.droppableId != "extras-container"){
            setChooseBox({display:true,extraPosition: destination.droppableId,extra:draggableId});
        }    
    }

    function handleChoose(name,sliceExtras){
        setChooseBox({display:false});

        if(name==="cancel"){
            return;
        }

        const checkChoose = orderExtras.some((orderExtra)=>orderExtra.name === name+" "+chooseBox.extra&&
        orderExtra.slices[0]===sliceExtras[0]);

        if(orderExtras.length === 3){
            setAlertMessage({display:true,content:"you can only add 3 extras"});
            setTimeout(()=>{ setAlertMessage({display:false}); }, 2000);
            return;
        }else if(checkChoose){
            setAlertMessage({display:true,content:"this extra allready exist"});
            setTimeout(()=>{ setAlertMessage({display:false}); }, 2000);
            return;
        }else{

            sliceExtras.forEach((sliceExtra)=>{

                setPizzaSliceExtras((prev)=>{
                    const {[sliceExtra]: extraArray} = prev;
                    return{
                        ...prev,
                        [sliceExtra]:[ ...extraArray , chooseBox.extra]
                    }
                })

            });
            setOrderExtras((prev)=>[...prev,{name: name + " "+ chooseBox.extra,slices:sliceExtras}]);

        }    
    }

    function removeOrderExtra(orderExtra){

        let extra =orderExtra.name.split(' ');
        if(extra.length===3){
            extra[1] = extra[1]+" "+extra[2];
        }
        orderExtra.slices.forEach((slice)=>{
            setPizzaSliceExtras((prev)=>{
                let {[slice]:extraArray}=prev;
                
                return{
                    ...prev,
                    [slice]:[...extraArray.filter((item)=>item!==extra[1])]
                }
            });
        })          



        setOrderExtras((prev)=> prev.filter((item)=> item.name !== orderExtra.name || item.slices[0] !== orderExtra.slices[0]));
    }

    function extraOnPizza(pizza_slice){
        
        let arrayExtra = [];
        let arrayPosition=[];
        for (let i = 0; i <12;){
            arrayPosition[i]=0;
            arrayPosition[i+1]=24;
            arrayPosition[i+2]=48;
            i+=3;
        }

        const {[pizza_slice]:pizzaSlice} = pizzaSliceExtras;

        for(let i=0 ; i < 12 ; i++){
            if(pizzaSlice.length === 1){
                arrayExtra.push(pizzaSlice[0]);
            }else if(pizzaSlice.length === 2){
                if(i<6){
                    arrayExtra.push(pizzaSlice[0]);
                }else if(i<12){
                    arrayExtra.push(pizzaSlice[1]);
                }
            }else if(pizzaSlice.length === 3){
                if(i<3){
                arrayExtra.push(pizzaSlice[0]);
                }else if(i<6){
                arrayExtra.push(pizzaSlice[1]);
                }else if(i<12){
                arrayExtra.push(pizzaSlice[2]);
                }
            }


            let width = Math.floor((Math.random() *25)+arrayPosition[i]).toString();
            let height = Math.floor(Math.random() * 90).toString();


            while((width <=20 && height>=80)||(width>20 && width<=40 && height>=70)||(width>40 && width<=60 && height>=60)||
            (width>60 && width<=70 && height>=40) || (width>70 && width<=80 && height>=30) ){
                height = Math.floor(Math.random() * 90).toString();
            }
            


            if(pizza_slice === "pizzaSlice1"){
                arrayPosition[i]={bottom:height+"px",left:width+"px"};
            } else if(pizza_slice === "pizzaSlice2"){
                arrayPosition[i]={top:height+"px",left:width+"px"};
            }else if(pizza_slice === "pizzaSlice3"){
                arrayPosition[i]={top:height+"px",right:width+"px"};
            }else if(pizza_slice === "pizzaSlice4"){
                arrayPosition[i]={bottom:height+"px",right:width+"px"};
            }
            
        }
        arrayExtra = arrayExtra.map((extra)=>extra.replace(" ","_"));

        return(
            arrayExtra.map((extra,index) =><img style={arrayPosition[index]} src={"../images/extras/"+extra+".png"}/>)
        )
    }

return(

    <div className={props.className === "hidden"?"hidden":"opgrid"}>
        <DragDropContext onDragEnd={onDragEnd}>

                <div className="optitle">
                    <h3>{props.item.name}</h3>
                </div>
                {chooseBox.display&&<ChooseBox extraPosition={chooseBox.extraPosition} handleChoose={handleChoose}/>}
                <div className="oppizza">
                    
                    <div className="pizza-container">
                        {pizza_slices.map((pizza_slice, index) => {
                        return (
                        <div>
                            <Droppable key={index} droppableId={pizza_slice}>
                            {(provided, snapshot) => {
                            return (
                                <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={snapshot.isDraggingOver? pizza_slice + " " + "lighting": pizza_slice}
                                >
                                    
                                </div>
                            );
                            }}
                            </Droppable>
                            <div className={pizza_slice}>
                            {extraOnPizza(pizza_slice)}
                            </div>
                        </div>
                        );
                        })}
                    </div>
                    <img  src="../images/menu_pic/pizza_sec/pizza.png" style={{with:"250px",height:"250px"}}/>
                    
                </div>
                
                <div className="opextras">
                    <text>Drag & Drop</text>
                    <Droppable droppableId="extras-container">
                    {(provided)=>(
                    <div ref={provided.innerRef} {...provided.droppableProps} className="opdrag">
                        {extras.map(createExtra)}
                        {provided.placeholder}
                    </div>)}
                    </Droppable>
                </div>
            
        </DragDropContext>

        <div className="opmanageextras">
            <text>3 extras max</text>
            {orderExtras.map((orderExtra)=>{
                return(<div ><text>{orderExtra.name}</text><FontAwesomeIcon onClick={()=>removeOrderExtra(orderExtra)} icon={faTimes}/></div>)
            })}
            
        </div>

        <div className="opalerts">
            <Collapse in={alertMessage.display}>
            <Alert severity="error">{alertMessage.content}</Alert>
            </Collapse>
        </div>

        

        <div className="opbtn mobtn" onClick={handleClick}>
            <a>DONE</a>
        </div>
    </div>    

)
}

export default OrderPizza;