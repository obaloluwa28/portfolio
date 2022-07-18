import React, {useState} from 'react'
import Barcharts from './Barchart/Barcharts'
import Skills_data from '../jsondata'

const Skills = () => {
    const [incomingdata, setIncomingdata] = useState(Skills_data)
  return (
    <div className='skills-container'>
        {incomingdata.map((items) => (
            <Barcharts labels={items.lvlLabel} level={items.lvlWidth}/>
        ))}
    </div>
  )
}

export default Skills