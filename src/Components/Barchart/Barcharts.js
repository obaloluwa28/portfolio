import React from 'react'
import './Barchart.css'

const Barcharts = ({labels, level}) => {
  return (
    <div className='barchart-container'>
        <div id="sk-label-cntainer">{labels}</div>
        <div id='sk-level-cntainer'>
            <div id='level-indicator' style={{width: `${level}`}}/>
        </div>
        <div id='sk-readings-cntainer'>{level}</div>
    </div>
  )
}

export default Barcharts