import React from "react";
import "./AddButton.css";

function AddBtn(props){
    return(
        <button className = "add-btn" {...props}>
            Add To DB
        </button>
    );
}

export default AddBtn; 