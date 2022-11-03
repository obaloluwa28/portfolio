import React, {useState, useEffect} from 'react'
// import Barcharts from './Barchart/Barcharts'
import Skills_data from '../jsondata'
import Skillcard from './Cards/Skillcard'
import './Cards/skillcard.css'

const Skills = ({toggleState}) => {
  const [incomingdata] = useState(Skills_data)
  const [toggle, setToggle] = useState(true)
  

  useEffect(() => {
    setToggle(toggleState)
  }, [toggleState])
    
  return (
    <div className='skills-container'>
        <span id={toggle ? 'labels' : 'labels_'}>SKILLS</span>
        <div className='oba-skills-sub-container'>
          {incomingdata.map((items) => (
            <Skillcard skill={items.lvlLabel} iconns={items.iconnum}/>
          ))}
        </div>
        {/* {incomingdata.map((items) => (
            <Barcharts labels={items.lvlLabel} level={items.lvlWidth}/>
        ))} */}
    </div>
  )
}

export default Skills