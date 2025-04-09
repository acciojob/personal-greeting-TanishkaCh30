import React,{useState} from "react";



const Greeting = () =>{

    let [value,setValue] = useState();


    function displayValue(e){
        let val = e.target.value
        setValue(val);
    }


    return (
        <div>
          Enter your name : <br></br>
         <input type="text" onChange={displayValue}></input>

         <p>
           
           {value ? `Hello ${value}!` : " "}
           
            </p>
        </div>
    )
}


export default Greeting;