import React, {useState} from 'react'
import "./togglebuttn.css"

const Togglebutton = ({currentState}) => {
    const [modee, setModee] = useState(true)
    
    const toggleState = () =>{
        currentState(setModee(!modee))
    }

    return (
        <div className= "toggle_contain" onClick={toggleState}>
            {modee ? <span id="darkmode">DARK</span> : <span id="lightmode">LIGHT</span> }
        </div>
    );
}

export default Togglebutton