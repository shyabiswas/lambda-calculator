import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from "./NumberButton";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
function Numbers(){
const [numberState, setnumbers] = useState(numbers)
  // STEP 2 - add the imported data to state
//  This return is a function
  return (
    <div>
      {numberState.map((numberObj, index) =>{
      return <NumberButton
      key={index}
      stringOfnumbers={numberObj}
      
      />
      }) 
  }
      
    </div>
  );
}

export default Numbers;
