import React, {useState} from 'react'
import '../App.css'
import OurLogo1 from '../asset/Images/logo1.png'

const Footer = ({text, buttonclkd}) => {
    const [currdate, setCurrdate] = useState(new Date())
    const [toggle, setToggle] = useState(buttonclkd)
  return (
    <div className={toggle ? "foorter-container" : "foorter-container_"}>
        <img id="footer_img" src={OurLogo1} alt="Logo" />
        <span className="copyright">{text}</span>
    </div>
  )
}

export default Footer