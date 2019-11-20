import React, { useState } from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton'

//import any components needed

//Import your array data to from the provided data file

function Operators(){
  const [operatorState, setOperatorState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div>
      
      { operatorState.map((operObj, index) =>{
        return <OperatorButton
        key={index}
        char={operObj.char}
        value={operObj.value}
        operObj={operObj}
        />
       }) 
      }
    </div>
  );
    }
  
export default Operators;