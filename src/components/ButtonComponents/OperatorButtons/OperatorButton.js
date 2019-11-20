import React from "react";

const OperatorButton = props => {
  return (
    <button className = "operator_Buttons">{
      props.operatorstr
    }
      
    </button>
  );
};

export default OperatorButton;
