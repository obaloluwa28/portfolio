import React, {useState} from 'react'
// import Barcharts from './Barchart/Barcharts'
import Skills_data from '../jsondata'
import Skillcard from './Cards/Skillcard'

const Skills = () => {
    const [incomingdata] = useState(Skills_data)
    
  return (
    <div className='skills-container'>
        <span>SKILLS</span>
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