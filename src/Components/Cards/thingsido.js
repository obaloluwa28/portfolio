import React, {useState, useEffect} from 'react'
import figma from '../../asset/Images/Figma.png'
import reacts from '../../asset/Images/React.png'
import backend from '../../asset/Images/nodejs.png'
import IOT from '../../asset/Images/IoT.png'
import './cards.css'

const imgurls = [
    {id: 1, tag: figma},
    {id: 2, tag: reacts},
    {id: 3, tag: backend},
    {id: 4, tag: IOT},
  ]

const Thingsido = ({colorChange, heading, text, imgid}) => {
  console.log(`colorChange: ${colorChange}`)
    const imgpath = (imgurls.find(m => m.id === imgid)).tag
    const [toggle, setBgcolor] = useState(colorChange)

    useEffect(() => {
      setBgcolor(colorChange)
    })

  return (
    <div className= {toggle ? "TID_Box1" : "TID_Box1_"}>
        <div className='img-logo-container'>
            <img src={imgpath} alt="NoLogo" id="mini_Icons"/>
        </div>
        
        <div className="TID_mini_container">
            <span id={toggle ? "TID_mini_sub" : "TID_mini_sub_"}>{heading}</span>
        </div>
        
        <div className="text_mini_container">
            <span id={toggle ? "text_descrpt" : "text_descrpt_"}>{text}</span>
        </div>
    </div>
  )
}

export default Thingsido