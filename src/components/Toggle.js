import React, {useState} from "react";

// The button should say on of upon click 
function Toggle() {
  // initialize the state which returns an array
  const [isOn, setIsOn]= useState(false);

// event function 
  function handleClick(){
    // we are calling the setfuntion to update the state 
    setIsOn((isOn)=>!isOn); 
  }

  // we can also add the button background to be red and use the same state is the button is on it turns red. 

   const color = isOn ? "red" : "white";

  return <button style={{background:color}} onClick={handleClick}>{isOn?"ON":"OFF"} </button>;
}

export default Toggle;
