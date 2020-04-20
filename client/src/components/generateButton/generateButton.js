import React from "react";
import "./generateButton.css";

function GenerateBtn(props){
    return(
        <button className = "generate-btn" {...props}>
            Generate Audio
        </button>
    );
}

export default GenerateBtn; 