import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import './SelectAdress.css';
import streetList from './street_list_json.json';
import cityList from  './city_list_json.json'



export default function SelectAddress(props) {
    const [city,setCity]= React.useState();
    const [street,setStreet]= React.useState();
    const [option, setOption] =React.useState();
    const [arrayCity,setArrayCity]  =React.useState([]);
    const [arrayStreet ,setArrayStreet] =React.useState([]);
    const [validation, setValidation] = React.useState({bool:false,content:""});
    const [disable ,setDisable] = React.useState(false);



    function handleClick(){
      if(!city || !street || !option){
        setValidation({bool:true,content:"you must fill all fieldS "});
        setTimeout(()=>setValidation({bool:false}), 3000);
        
      }else{
       props.onSelectAddressReturn(city + " " + street + " " + option); 
      }
      
    }

   

    function onCityClose(e,r){
      if(r){

        if((city === "אור יהודה") || (city === "קרית אונו") || (city === "יהוד")
        ||(e.target.innerText === "אור יהודה")||(e.target.innerText === "קרית אונו")||(e.target.innerText === "יהוד")){
          setDisable(false);
        }else{
          setValidation({bool:true,content:"your city is out of range"});
          setTimeout(()=>setValidation({bool:false}), 3000);
          setDisable(true);
        }
      }
    } 

    
    function handleCityChange(e,value){
      setCity(value);
      setArrayCity(cityList.map((item)=>item.city).filter(item=>item.includes(city)));
    }

    function handleStreetChange(e,value){
      if(!city){
        setValidation({bool:true,content:"you dont chose city"});
        setTimeout(()=>setValidation({bool:false}), 3000);
        setDisable(true);
      }
      setStreet(value);
      setArrayStreet(streetList.map((item)=>item).filter(item => item.city===city && item.street.includes(street)).map(item=>item.street));
    }

    function handleOptionChange(e){
      setOption(e.target.value);
    }


    return (
        <div className={props.className + " sdcontent"}>


          <Autocomplete
            id="free-solo-city"
            onInputChange={handleCityChange}
            freeSolo
            options={arrayCity}
            onClose={onCityClose}
            renderInput={(params) => (
            <TextField {...params}  label="city" margin="normal" variant="outlined" />
            )}
          />

          


          <Autocomplete
            id="free-solo-street"
            onInputChange={handleStreetChange}
            freeSolo
            options={arrayStreet}
            disabled={disable}
            renderInput={(params) => (
            <TextField {...params}  label="street" margin="normal" variant="outlined"/>
            )}
          />


          <TextField onChange={handleOptionChange} disabled={disable}  label="floor/department/entery" margin="normal" variant="outlined" />
          
          <Collapse in={validation.bool}>
            <Alert severity="error">{validation.content}</Alert>
          </Collapse>

          <button onClick={handleClick}>OK</button> 
        </div>
    )
}
