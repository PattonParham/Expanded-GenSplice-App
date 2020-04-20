import React, {useState, useEffect, useRef} from "react";
import {ADD_SOUND} from "./utils/actions";
import { useStoreContext } from "./utils/GlobalState";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";

import GenerateBtn from "./components/generateButton/generateButton";
import AddBtn from "./components/AddButton/AddButton";

import Header from "./components/header/header";
import {Col, Row, Container } from "./components/Grid";
import ReactPlayer from "react-player";
import BPMInput from "./components/BPMCalc/BPM";
import "./App.css";
import API from "./utils/API";
// import { checkPropTypes } from "prop-types";


const App = props => {
    

const [playingBool, setPlayingBool] = useState(false);
const [playingBoolII, setPlayingBoolII] = useState(false);
const [playingBoolIII, setPlayingBoolIII] = useState(false);
const [playingBoolIV, setPlayingBoolIV] = useState(false);
let [fade, setFade] = useState(null);
const playerOne = useRef(null);
const playerTwo = useRef(null);
const playerThree = useRef(null);
const playerFour = useRef(null);

const [formObject, setFormObject] = useState({
    inputOne: "",
    inputTwo: "",
    inputThree: "",
    inputFour: "",
    titleOne: "",
    titleTwo: "",
    titleThree: "",
    titleFour: "",
    urlOne: "",
    urlTwo: "",
    urlThree: "",
    urlFour: "",
});

const handleAddToDB = (e) =>{
    e.preventDefault();
    API.saveSound({
        title: formObject.titleOne,
        url: formObject.urlOne
    })
    .catch(err => console.log(err));
}

// const titleRef = useRef();
// const urlRef = useRef();
// const [state, dispatch] = useStoreContext();
// let url = urlRef.current.value;
// let title = titleRef.current.value;
// url = formObject.urlOne;
// title = formObject.titleOne;
// const handleAddToDB = (e) => {
//     e.preventDefault();
//    API.saveSound({
//        title: title,
//        url: url
//    })
//    .then(result =>{
//        dispatch({
//            type: ADD_SOUND,
//            sound: result.data
//        });
//    })
//    .catch(err => console.log(err));

// };

useEffect(() => {

  },[playingBool, playingBoolII, playingBoolIII, playingBoolIV]);

function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };
  const addAudio = () => {
API.saveSound(formObject.inputOne);
  }

function handleStateReset(){
    let one = true;
    if (one === true){
    setPlayingBool(false);
    one = false;
}
}
//function PBs (Play Boolean) to play the audio files
let one = false;
let two = false;
let three = false;
let four = false;
let count = 0;
function PB(){
    if (one === false){
        setPlayingBool(true);
         one = true;
    } else if (one === true){
        setPlayingBool(false);
        one = false;
    }
    console.log(playingBool);
 }


    function PBII(){
       if(two === false){
           setPlayingBoolII(true);
           two = true;
       } else if (two === true){
           setPlayingBoolII(false);
           two = false;
       }
       
    }
    function PBIII(){
        if(three === false){
            setPlayingBoolIII(true);
            three = true;
        } else if (three === true){
            setPlayingBoolIII(false);
            three = false;
        }
        
     }
    function PBIV(){
        if(four === false){
            setPlayingBoolIV(true);
            four = true;
            console.log(playingBoolIV);
        } else if (four === true){
            setPlayingBoolIV(false);
            four = false;
            console.log(playingBoolIV);
        }
        
        
     }

     function handleFade(){
        if (fade = null){
          
            setTimeout(setFade(.9), 1)
            setTimeout(setFade(.8), 2)
            setTimeout(setFade(.7), 3)
            setTimeout(setFade(.6), 4)
            setTimeout(setFade(.5), 5)
            setTimeout(setFade(.4), 6)
            setTimeout(setFade(.3), 7)
            setTimeout(setFade(.2), 8)
            setTimeout(setFade(.1), 9)
            setTimeout(setFade(0), 10)
        } else if (fade = 0 ){
            setTimeout(setFade(.1), 1)
            setTimeout(setFade(.2), 2)
            setTimeout(setFade(.3), 3)
            setTimeout(setFade(.4), 4)
            setTimeout(setFade(.5), 5)
            setTimeout(setFade(.6), 6)
            setTimeout(setFade(.7), 7)
            setTimeout(setFade(.8), 8)
            setTimeout(setFade(.9), 9)
            setTimeout(setFade(null), 10)
        }


     }

     function getRndInteger(min, max){
        return Math.floor(Math.random() * (max-min) + min)
    }

    const GoldenZoneOne = () =>{

    }

    const generateAudio = (event) => {
        



     let wait = parseInt(formObject.inputOne);
     console.log(wait);
     let waitII = parseInt(formObject.inputTwo);
     let waitIII = parseInt(formObject.inputThree);
     let waitIV = parseInt(formObject.inputFour);
     let soundDuration = playerOne.current.getDuration();
     let soundDurationTwo = playerTwo.current.getDuration();
     let soundDurationThree = playerThree.current.getDuration();
     let soundDurationFour = playerFour.current.getDuration();
     console.log(soundDuration);
     let soundLength = (soundDuration - (wait/1000));
     let soundLengthTwo = (soundDurationTwo - (waitII/1000));
     let soundLengthThree = (soundDurationThree - (waitIII/1000));
     let soundLengthFour = (soundDurationFour - (waitIV/1000));
     console.log(soundLength);
     let seekOne = getRndInteger(0, soundLength);
     console.log(seekOne);
     let seekTwo = getRndInteger(0, soundLengthTwo);
     let seekThree = getRndInteger(0, soundLengthThree);
     let seekFour = getRndInteger(0, soundLengthFour);

     let SeekOne = ()=>{
         playerOne.current.seekTo(seekOne);
     }
     let SeekTwo = ()=>{
        playerTwo.current.seekTo(seekTwo);
     }
     let SeekThree = ()=>{
        playerThree.current.seekTo(seekThree);
     }
     let SeekFour = ()=>{
        playerFour.current.seekTo(seekFour);
     }

    function generateLoop(){
        PB();
        setTimeout(handleFade, (wait - 10));
        setTimeout(SeekTwo, wait);
        setTimeout(PBII, wait);
        setTimeout(handleFade, ((wait + waitII) - 10));
        setTimeout(SeekThree,(wait + waitII));
        setTimeout(PBIII,(wait + waitII));
        setTimeout(handleFade, ((wait+waitII+waitIII) - 10));
        setTimeout(SeekFour, (wait+waitII+waitIII));
        setTimeout(PBIV, (wait+waitII+waitIII));
        setTimeout(handleFade, ((wait+waitII+waitIII+waitIV) - 10));
        setTimeout(PBIV, (wait+waitII+waitIII+waitIV));
        setTimeout(handleStateReset, (wait+waitII+waitIII+waitIV))
    }

SeekOne();
PB();
generateLoop();
setInterval(generateLoop(), (wait+waitII+waitIII+waitIV));
      
}


    return(
        <div id = "bodyDiv">
     <div>
         <Row>
         <Col size="lg" className="header">
         <Header></Header>
         </Col>

         </Row>

   

    </div>

 <Container fluid className="mainContainer">
     <Row>

     <Row>
         <div className="playerComponent">
         <Col size="lg">
             <Row>
                <ReactPlayer ref={playerOne} id ="playerone" className="player" height ="100px"  volume = {fade} playing={playingBool ? true : false} title={formObject.titleOne} url={formObject.urlOne}>
                </ReactPlayer>

            </Row>
            
            <Row>
            <div className="titleurlinput"  >
                <Row>
                <Col size="lg">
                <input  onChange={handleInputChange} className="titleinput" name="titleOne" value ={formObject.titleOne} placeholder="Title"></input>
                </Col>
                <Col size="lg">
                <input  onChange={handleInputChange} className="urlinput" name="urlOne" value={formObject.urlOne} placeholder="url"></input>
                </Col>
              <AddBtn id ="AddOne" onClick={handleAddToDB}></AddBtn>
              </Row>
            </div>
            </Row>
            <Row>
                <ReactPlayer ref={playerTwo} id ="playertwo" className="player" height ="100px" volume = {fade} playing={playingBoolII ? true : false} title={formObject.titleTwo} url={formObject.urlTwo}>
                </ReactPlayer>
            </Row>
            <Row>
            <div className="titleurlinput">
                <Row>
                <Col size="lg">
                <input onChange={handleInputChange} className="titleinput" name="titleTwo" value ={formObject.titleTwo} placeholder="Title"></input>
                </Col>
                <Col size="lg">
                <input onChange={handleInputChange} className="urlinput" name="urlTwo" value ={formObject.urlTwo} placeholder="url"></input>
                </Col>
              <AddBtn ></AddBtn>
              </Row>
            </div>
            </Row>
            <Row>
                <ReactPlayer ref={playerThree} id ="playerthree" className="player" height ="100px" volume = {fade} playing={playingBoolIII ? true : false} title={formObject.titleThree} url={formObject.urlThree}>
                </ReactPlayer>
            </Row>
            <Row>
            <div className="titleurlinput">
                <Row>
                <Col size="lg">
                <input onChange={handleInputChange} className="titleinput" name="titleThree" value ={formObject.titleThree} placeholder="Title"></input>
                </Col>
                <Col size="lg">
                <input onChange={handleInputChange} className="urlinput" name="urlThree" value ={formObject.urlThree} placeholder="url"></input>
                </Col>
              <AddBtn></AddBtn>
              </Row>
            </div>
            </Row>
            <Row>
                <ReactPlayer ref={playerFour} id ="playerfour" className="player" height ="100px" volume = {fade} playing={playingBoolIV ? true : false}title={formObject.titleFour} url={formObject.urlFour}>   
                </ReactPlayer>
            </Row>
            <Row>
            <div className="titleurlinput">
                <Row>
                <Col size="lg">
                <input onChange={handleInputChange} className="titleinput" name="titleFour" value ={formObject.titleFour} placeholder="Title"></input>
                </Col>
                <Col size="lg">
                <input onChange={handleInputChange} className="urlinput" name="urlFour" value={formObject.urlFour} placeholder="url"></input>
                </Col>
              <AddBtn></AddBtn>
              </Row>
            </div>
            </Row>
         </Col>  
         </div>
     </Row>
     <Col size="lg">
             <Row>
             
         <BPMInput></BPMInput>
             </Row>
             <Row>
            
             <div className="inputSize">
            <Row>
            <Col size="sm">
             <input id = "inOne" onChange={handleInputChange} name= "inputOne" value={formObject.inputOne} className="Input" placeholder="Enter value in ms"></input>
             </Col>
             <Col size="sm">
                 <Row>
                 <input className="maxmin"></input>
                 </Row>
                 <Row>
                 <input className="maxmin"></input>
                 </Row>

             </Col>
             <Col size="sm">
             <Row>
                 <input className="ms"></input>
            </Row>
             </Col>
             </Row>
             </div>
             </Row>
             <Row>
             <div className="inputSize">
             <input id = "inTwo" onChange={handleInputChange} name= "inputTwo" value={formObject.inputTwo} className="Input" placeholder="Enter value in ms"></input>
             </div>
             </Row>
             <Row>
             <div className="inputSize">
             <input id = "inThree" onChange={handleInputChange} name= "inputThree" value={formObject.inputThree} className="Input" placeholder="Enter value in ms"></input>
             </div>
             </Row>
             <Row>
             <div className="inputSize" >
             <input id = "inFour" onChange={handleInputChange} name = "inputFour" value={formObject.inputFour} className="Input" placeholder="Enter value in ms"></input>
             </div>
             </Row>
             <Row>
            
        <div className="GenerateBtnLabel">
            <p className="infinitysymbol">∞</p>
            
        </div>
        
        
        <GenerateBtn onClick= {generateAudio}></GenerateBtn>
       
        
            </Row>
         </Col>

</Row>
 </Container>

        </div>
       
    
        // <Router>
        //     <div>
        //         <Route path="/" component={Main} />
        //     </div>
        // </Router>
    );
}

export default App;