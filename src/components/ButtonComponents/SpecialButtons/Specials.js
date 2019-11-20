import React, { useState } from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

function Specials(){
  const [specialState, setSpecialState] = useState(specials);
  // STEP 2 - add the imported data to state

  return (
    <div>
  
      { specialState.map((special, index) =>{
        return <SpecialButton
        key={index}
        buttontextSpecial={special}
       
        />
      }) 
    } 
    </div>
  );
  }
export default Specials;
