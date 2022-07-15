import React,{useState} from 'react'
import './Contact.css'
import { FaHandshake } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const Contactus = () => {
  const [toggle, setToggle] = useState(true)
  const [values, setValues] = useState({
    email: "",
    sender: "",
    message: "",
  })

  const handleChange = (e) =>{
    if(e.target.name === "email"){
      setValues(values.email = e.target.value)
      console.log(`Email: ${e.target.value}`)
    }

    if(e.target.name === "sendername"){
      setValues(values.email = e.target.value)
      console.log(`Email: ${e.target.value}`)
    }

    if(e.target.name === "message"){
      setValues(values.email = e.target.value)
      console.log(`Email: ${e.target.value}`)
    }
  }

  return (
    <div className="buttom-main-contain">
          <div className="sideproj_title_contain" >
            <span className={toggle ? "sideproj_title" : "sideproj_title_"}>Get In Touch</span>
          </div>
          <div className="buttm-contain">
            <div className={toggle ? "shakeicon" : "shakeicon_"}>
              <FaHandshake id="shake-icon"/>
              <span id="si-thnk">Thank You</span>
              <span id="si-thnk-2">Any Question or Queries?</span>
            </div>
            <div className={toggle ? "emailmsgs" : "emailmsgs_"}>
              <div className="top-container">
                <div className={toggle ? "top-left" : "top-left_"}>
                  <span id='label'>Email</span>
                  <input type='email' onChange={handleChange} name="email" value={values.email}  id="field"/>
                </div>

                <div className={toggle ? "top-right" : "top-right_"}>
                  <span id='label'>Name</span>
                  <input  type='text' onChange={handleChange} name="sendername" value={values.sender} id="field" />
                </div>
              </div>
              <div className={toggle ? "mess-buttn" : "mess-buttn_"}>
                  <span id='label'>Message</span>
                  <textarea  type='text' onChange={handleChange} name="message" value={values.message} id="field1" />
              </div>
              <div className="submit_container">
                  <input type="submit" id="submit-button"/>
              </div>
            </div>
          </div>
    </div> 
  )
}

export default Contactus