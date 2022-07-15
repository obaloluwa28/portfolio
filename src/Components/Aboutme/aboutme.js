import React, {useState} from 'react'
import '../Cards/cards.css'
import mypix from '../../asset/Images/myPix.png'
import vector from '../../asset/Images/vector.png'
import vector_ from '../../asset/Images/vector2_.png'

const Aboutme = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className='Aboutme_body_container'>
              {/* {toggle ? <img src={vector} alt="altimg" /> : <img src={vector_} alt="altimg" />} */}
                <img id="mypix" src={mypix} alt="mypix"/>
                <div id="myprofile_container">
                  <span id='myprofiledetaile'>
                    Hi, I’m Oduyemi Obaloluwa a First-Class graduate of Computer Engineering from Ladoke Akintola University of Technology, Nigeria. I'm an innovative purpose-driven professional with experience in web-design, development and software development across industries. Equipped with record of success in consistently identifying and providing the technological needs of companies through ingenious innovations.
                    I'm very passionate about emerging technologies like 5G & IoT, Robotics & Autonomous Vehicles, Web 3.0 & Block-Chain.
                    I currently work as a Software Engineer with Sabre Coporation - a foremost GDS Powering Travel solutions in the World.
                  </span>
                </div>
            </div>
  )
}

export default Aboutme