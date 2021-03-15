import React, {useState} from "react";
import "./BPM.css";
import {Col, Row, Container} from "../Grid/index";

function BPMInput(){
   
    const [full, setFull] = useState(null);
    const [half, setHalf] = useState(null);
    const [quart, setQuart] = useState(null);
    const [eighth, setEighth] = useState(null);
    const [sixteen, setSixteen] = useState(null);
    const [thirtytwo, setThirtyTwo] = useState(null);
    const [sixtyfour, setSixtyFour] = useState(null);

    function Calculate(){
        let inputVal = document.getElementById("BPM").value;
        console.log(inputVal);
        let fullNote = document.getElementById("fullNote");
        let halfNote = document.getElementById("halfNote");
        let quartNote = document.getElementById("quartNote");
        let eighthNote = document.getElementById("eighthNote");
        let sixteenNote = document.getElementById("sixteenthNote");
        let thirtytwoNote = document.getElementById("thirtysecondNote");
        let sixtyfourNote = document.getElementById("sixtyfourthNote");

        fullNote.value = (240/inputVal)*1000;
        halfNote.value = (120/inputVal) * 1000;
        quartNote.value = (60/inputVal) * 1000;
        eighthNote.value = (30/inputVal) * 1000;
        sixteenNote.value = (15/inputVal) * 1000;
        thirtytwoNote.value = (7.5/inputVal)* 1000;
        sixtyfourNote.value = (3.75/inputVal) * 1000;
        console.log(fullNote.value);
        let fullNoteVal = fullNote.value;
        let halfNoteVal = halfNote.value;
        let quartNoteVal = quartNote.value;
        let eighthNoteVal = eighthNote.value;
        let sixteenNoteVal = sixteenNote.value;
        let thirtytwoNoteVal = thirtytwoNote.value;
        let sixtyfourNoteVal = sixtyfourNote.value;

        setFull(fullNoteVal);
        setHalf(halfNoteVal);
        setQuart(quartNoteVal);
        setEighth(eighthNoteVal);
        setSixteen(sixteenNoteVal);
        setThirtyTwo(thirtytwoNoteVal);
        setSixtyFour(sixtyfourNoteVal);
        }

return (
 <div className="Calculator"> 
 <div className="firstRow">
     <Row>
     {/* <Col size="lg"> */}
         <div className="BPMtext">BPM:</div>

         {/* </Col> */}
         {/* <Col size="lg"> */}
         <input id="BPM" className="BPMInput noteLength"></input>
        {/* </Col> */}
        {/* <Col size="lg"> */}
        
            <div className="noteLength">
                1/64Note (ms)
                <p className = "msValue"  id ="sixtyfourthNote">{sixtyfour}</p>
            </div>
        {/* </Col> */}
        {/* <Col size="lg"> */}
        <div className="noteLength">
                1/32Note (ms)
                <p className = "msValue"  id ="thirtysecondNote">{thirtytwo}</p>
            </div>
        {/* </Col> */}
        {/* <Col size="lg"> */}
        <div className="noteLength">
                1/16Note (ms)
                <p className = "msValue" id ="sixteenthNote">{sixteen}</p>
            </div>
        {/* </Col> */}
        </Row>
        </div>
        <div className="secondRow"> 
        <Row >
        {/* <Col size="lg"> */}
        <div id ="calcPosition">
         <button id = "calcButton" onClick={Calculate}>Calc </button>
        </div>
        {/* </Col> */}
        {/* <Col size="lg"> */}
        <div className="noteLength">
                1/8Note (ms)
                <p className = "msValue"  id = "eighthNote">{eighth}</p>
            </div>
        {/* </Col> */}
        {/* <Col size="lg"> */}
        <div className="noteLength">
                1/4Note (ms)
                <p className = "msValue"  id = "quartNote">{quart}</p>
            </div>
            {/* </Col> */}
        {/* <Col size="lg"> */}
            <div className="noteLength">
                1/2Note (ms)
            <p id = "halfNote">{half}</p>
            </div>
            {/* </Col> */}
            {/* <Col  size="lg"> */}
            <div className="noteLength">
                FullNote (ms)
                <p className = "msValue"  id = "fullNote"> {full}</p>
            <div>
            </div>
            </div>
            {/* </Col> */}
             
     </Row>
     </div> 
</div>  
)
}

export default BPMInput;
