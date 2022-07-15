import React, {useState} from 'react'
import "./togglebuttn.css"
import { BiSun } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";

const Togglebutton = ({currentState}) => {
    const [modee, setModee] = useState(true)
    
    const toggleState = () =>{
        currentState(setModee(!modee))
    }

    return (
        <div className='navbar-contain'>
            <div className= {modee ? "toggle_contain" : "toggle_contain_inv"} onClick={toggleState}>
                {modee ? <span id="darkmode">DARK</span> : <span id="lightmode">LIGHT</span> }
            </div>
            <div className= "toggle_contain_scrn" onClick={toggleState}>
                {modee ? <span id="darkmode"><BsMoonFill id="contrast_icon"/></span> : <span id="darkmode"><BiSun id="contrast_icon"/></span> }
            </div>
        </div>
        
    );
}

export default Togglebutton