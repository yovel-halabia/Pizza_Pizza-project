import React from 'react';
import './ChooseBox.css';

export default function ChooseBox(props){

    let imgqua ="";
    let imghalf = "";
    let halfStyle = {};
    let quarterStyle={};
    switch(props.extraPosition){
        case 'pizzaSlice1':
            imgqua="../images/menu_pic/pizza_sec/choose_box/quarter1.png";
            imghalf="../images/menu_pic/pizza_sec/choose_box/half2.png";
            if(window.innerWidth >=768 && window.innerHeight <=992){
                halfStyle = {paddingLeft:"50px"};
            }else if( window.innerHeight >=992){
                halfStyle = {paddingLeft:"70px"};
            }else{
                halfStyle = {float:'right'};
            }
            quarterStyle={right:"0",top:"0"};
            break;
        case 'pizzaSlice2':
            imgqua="../images/menu_pic/pizza_sec/choose_box/quarter2.png";
            imghalf="../images/menu_pic/pizza_sec/choose_box/half2.png";
            if(window.innerWidth >=768 && window.innerHeight <=992){
                halfStyle = {paddingLeft:"50px"};
            }else if( window.innerHeight >=992){
                halfStyle = {paddingLeft:"70px"};
            }else{
                halfStyle = {float:'right'};
            }
            quarterStyle={right:"0",bottom:"0"};
            
            break;
        case 'pizzaSlice3':
            imgqua="../images/menu_pic/pizza_sec/choose_box/quarter3.png";
            imghalf="../images/menu_pic/pizza_sec/choose_box/half1.png";
            if(window.innerWidth >=768 && window.innerHeight <=992){
                halfStyle = {paddingRight:"50px"};
            }else if( window.innerHeight >=992){
                halfStyle = {paddingRight:"70px"};
            }else{
                halfStyle = {float:'left'};
            }
            quarterStyle={left:"0",bottom:"0"};
            
            break;
        case 'pizzaSlice4':
            imgqua="../images/menu_pic/pizza_sec/choose_box/quarter4.png";
            imghalf="../images/menu_pic/pizza_sec/choose_box/half1.png";
            if(window.innerWidth >=768 && window.innerHeight <=992){
                halfStyle = {paddingRight:"50px"};
            }else if( window.innerHeight >=992){
                halfStyle = {paddingRight:"70px"};
            }else{
                halfStyle = {float:'left'};
            }
            quarterStyle={left:"0",top:"0"};
            break;

    }

    function handleClick(name){
        if(name==="cancel"){
            props.handleChoose(name);
        }
        if(name === "quarter"){
            props.handleChoose(name,[props.extraPosition]);
        }else if(name === "full"){
            props.handleChoose(name,["pizzaSlice1","pizzaSlice2","pizzaSlice3","pizzaSlice4"]);
        }else if (name === "half"){
            if(props.extraPosition === "pizzaSlice1" || props.extraPosition === "pizzaSlice2"){
                props.handleChoose(name,["pizzaSlice1","pizzaSlice2"]);
            }else{
                props.handleChoose(name,["pizzaSlice3","pizzaSlice4"]);
            }
        }
    }

    
    return(
        <div className="cbcontent" >
            <div className="cbtitle"><text>choose</text></div>
            <div className="cbcard" onClick={()=>handleClick("quarter")}>
                <div id="cbqudiv" >
                    <img id="cbqu" src={imgqua} style={quarterStyle}/>
                </div>
                
                <text>quarter</text>
            </div>
            <div  className="cbcard" onClick={()=>handleClick("half")}>
                <div style={halfStyle}>
                    <img src={imghalf} id="cbhalf" />
                </div>
                
                <text>half</text>
            </div>
            <div  className="cbcard" onClick={()=>handleClick("full")}>
                <img src='../images/menu_pic/pizza_sec/choose_box/full.png' />
                <br/>
                <text>full</text>
            </div>
            <div className="cbcancel" onClick={()=>handleClick("cancel")}><a href="#">cancel</a></div>
        </div>
        
    )
}