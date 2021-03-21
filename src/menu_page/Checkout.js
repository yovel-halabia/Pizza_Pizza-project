import React from 'react';
import {useHistory} from 'react-router-dom';
import './Checkout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCar, faStoreAlt,  faShoppingCart, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import SelectAddress from './SelectAddress';
import OrderItem from './OrderItem';

function Checkout(props){

    const [dropdown , setDropdown] = React.useState({name:"choose your option", icon:""});
    const [selectClass , setSelectClass] = React.useState({pickupClass:"hidden" ,deliveryClass:"hidden"});
    const [deliveryAddress , setDeliveryAdress] = React.useState({class:"hidden",address:"select delivery address"});
    const [orderItems,setOrderItems]= React.useState([]);
    const [validation, setValidation] = React.useState({bool:false, content:""});
    const [isCheckout , setIsCheckout] = React.useState(false);
    const [checkInput,setCheckInput] = React.useState(["","","","","",]);
    const [selectedDate, handleDateChange] = React.useState(new Date());
    const [finishOrderValidation, setFinishOrderValidation] = React.useState({finish:false,loading:false,done:false});



    React.useEffect(()=>{setOrderItems(props.orderItems); },[props.orderItems]);


    const amount = ()=>{ 
        let amount=0;
        if(orderItems){
            orderItems.map(item=>{
            amount+=parseInt(item.cost);
            console.log(amount)
            })
        }
        
        return amount;
    }

    let isempty = true;
    if(orderItems){
        isempty=false;
    }
    
    const localStorage=window.localStorage;
    const history= useHistory();

    React.useEffect(()=>{
        if(selectClass.pickupClass === ""){
            setDeliveryAdress({class:"hidden",address:"select delivery address"});
        }
    },[selectClass.pickupClass]);

    function handleCheckDelivery(){
        setDropdown({name:"Delivery", icon:faCar});
        setSelectClass({pickupClass:"hidden" ,deliveryClass:""})
    }

    function handleCheckPickup(){
        setDropdown({name:"Pickup", icon:faStoreAlt});
        setSelectClass({pickupClass:"" ,deliveryClass:"hidden"})
    }

    function openSelectAdress(){
        setDeliveryAdress((prev)=>{return{...prev,class:""}});
    }

    function onSelectAddressReturn(add){
        setDeliveryAdress({class:"hidden",address:add+ " (click to set)"});
    }

    function onCancel(index){
        localStorage.setItem('orderItems',JSON.stringify(orderItems.filter((item,itemIndex)=>itemIndex !== index)));
        setOrderItems(prev=>prev.filter((item,prevIndex)=>prevIndex !== index));

    }

    function onEdit(index,item){
        localStorage.setItem('item',JSON.stringify(item))
        localStorage.setItem('index',JSON.stringify(index));
        history.push("/make-order");
    }

    function checkOrderItems(){
        if(orderItems){
            if(orderItems.length>0){
                return (
                    <div>
                        {orderItems.map((item,index)=><OrderItem item={item} index={index} onCancel={onCancel}
                        onEdit={onEdit} isCheckout={isCheckout}
                        />)}

                        <h4 className="coamount">amount:{amount()}₪</h4>
                    </div>

                )
            }else{
                return(
                    <div className="coempty-cart">
                        <FontAwesomeIcon className="cocart-icon"  icon={faShoppingCart}/>
                        <br/>
                        <text>Cart is empty. Add menu items.</text> 
                    </div>
                ) 
            }
            
        }else{
                return(
                <div className="coempty-cart">
                    <FontAwesomeIcon className="cocart-icon"  icon={faShoppingCart}/>
                    <br/>
                    <text>Cart is empty. Add menu items.</text> 
                </div>
                )
        }
    }

    function goToCheckout(){
        if(orderItems.length===0 ){
            setValidation({bool:true,content:"you must choose somting to order"});
            setTimeout(()=>setValidation({bool:false}), 3000);
        }else if(selectClass.pickupClass === "hidden" && selectClass.deliveryClass === "hidden"){
            setValidation({bool:true,content:"you dont choose your delivery option"});
            setTimeout(()=>setValidation({bool:false}), 3000);
        }else if(deliveryAddress.address === "select delivery address"&& selectClass.deliveryClass != "hidden"){
            setValidation({bool:true,content:"you dont choose your delivery address"});
            setTimeout(()=>setValidation({bool:false}), 3000);
        }else{
            props.onCheckout(true);
            setIsCheckout(true);
        }
    }

    function returnFromCheckout(){
        props.onCheckout(false);
        setIsCheckout(false);
    }

    function inputValidation(e,index){
        setCheckInput(prev=>prev.map((item,itemIndex)=>{if(itemIndex===index){return true}else{return item}}));
        if(!e.target.value){
            setCheckInput(prev=>prev.map((item,itemIndex)=>{if(itemIndex===index){return false}else{return item}}));
        }
        
    }

    function finishOrder(){
        if(checkInput.some(item=>item === "")|| checkInput.some(item=>item === false)){
            setFinishOrderValidation(prev=>{return{...prev,finish:true}});
            setTimeout(()=>setFinishOrderValidation(prev=>{return{...prev,finish:false}}),2000);
        }else{
            setFinishOrderValidation(prev=>{return{...prev,loading:true}});
            setTimeout(()=>setFinishOrderValidation(prev=>{return{...prev,loading:false}}),2000);
            setTimeout(()=>setFinishOrderValidation(prev=>{return{...prev,done:true}}),2000);
            setTimeout(()=>{setFinishOrderValidation(prev=>{return{...prev,done:false}});window.location.replace("/home");localStorage.clear();},4000);
        }
    }


  



    return(
        <div>
            <a className="creturn" onClick={returnFromCheckout}>return <FontAwesomeIcon icon={faCaretDown} style={{ transform: "rotate(-90deg)"}}/></a>
            <h5 id="checkout">CHECKOUT</h5>

            <div  class="dropdown show codr">
                <a   className="dropdown-button"   id="dropdownMenuLink" data-toggle="dropdown">
                    <FontAwesomeIcon icon={dropdown.icon}/> {dropdown.name}  <FontAwesomeIcon className="drop-icon" icon={faCaretDown}/>
                </a>

                {/* get the css from dropdown component */}
                <div class="dropdown-menu codrme" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" onClick={handleCheckDelivery}><FontAwesomeIcon icon={faCar}/> Delivery</a>
                    <hr/>
                    <a class="dropdown-item"  onClick={handleCheckPickup}><FontAwesomeIcon  icon={faStoreAlt}/> Pickup</a>
                </div>
                
            </div> 
            
            <div className="coselect">
                <a className={selectClass.deliveryClass} onClick={openSelectAdress}><FontAwesomeIcon icon={faMapMarkerAlt}/> {deliveryAddress.address}</a>
                <SelectAddress className={deliveryAddress.class} onSelectAddressReturn={onSelectAddressReturn}/>   
                <text className={selectClass.pickupClass}>The order will be ready between 20-30 minutes after ordering</text>
            </div>
            

            <h6 className="cooreder-title" >YOUR ORDER</h6>

            {checkOrderItems()}

            
            <Collapse in={validation.bool}>
            <Alert severity="error">{validation.content}</Alert>
            </Collapse>

            {!isCheckout&&
                <div className="cobtn" onClick={goToCheckout}>
                    <text>go to checkout</text>
                </div>
            }

            {isCheckout&&
                <div>
                <h1 className="copayment">PAYMENT</h1>
                <TextField error={checkInput[0]===false&&true} helperText={checkInput[0]===false&&"you fill the filed"}  onChange={(e)=>inputValidation(e,0)} className="cotf"  label="Full Name" margin="normal" variant="outlined" />
                <TextField error={checkInput[1]===false&&true} helperText={checkInput[1]===false&&"you fill the filed"}  onChange={(e)=>inputValidation(e,1)} className="cotf" label="Email" margin="normal" variant="outlined" />
                <TextField error={checkInput[2]===false&&true} helperText={checkInput[2]===false&&"you fill the filed"}  onChange={(e)=>inputValidation(e,2)} className="cotf" label="Phone" margin="normal" variant="outlined" />
                <TextField error={checkInput[3]===false&&true} helperText={checkInput[3]===false&&"you fill the filed"}  onChange={(e)=>inputValidation(e,3)} className="cotfcn"  label="Card Number"  margin="normal" variant="outlined" />
                <TextField error={checkInput[4]===false&&true} helperText={checkInput[4]===false&&"you fill the filed"}  onChange={(e)=>inputValidation(e,4)} className="cotfcvv" label="CVV" margin="normal" variant="outlined" />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                  className="cotf"
                  variant="outlined"
                  inputVariant="outlined"
                  label="Card Date"
                  helperText="Start from year selection"
                  onChange={handleDateChange}
                  value={selectedDate}
                  views={["month", "year"]}
                  />
                </MuiPickersUtilsProvider>
                </div>
            }

            {isCheckout&&
                <div>
                    {finishOrderValidation.loading&&<CircularProgress color="inherit" />}
                    <Collapse in={finishOrderValidation.finish}>
                        <Alert severity="error">you must to fill all fileds</Alert>
                    </Collapse>
                    <Collapse in={finishOrderValidation.done}>
                        <Alert severity="success">the order sent successfully to the restaurant</Alert>
                    </Collapse>
                    <div className="cobtn" onClick={finishOrder}>
                        <text>checkout</text>
                    </div>
                </div>
                
            }
        
        </div>
    )
}

export default Checkout;