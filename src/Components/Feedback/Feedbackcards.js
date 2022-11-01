import React from 'react'
import './Feedback.css'

const Feedbackcards = ({feebkname, feedbkcomment, feedabkurl}) => {
  return (
    <div className='oba-feeback-container'>
        <div className='feedback-image' style={{ backgroundImage: `url(${feedabkurl})`}}/>
        <div className='feedbk-container-right'>
            <span id='feedback-text-title'>{feebkname}</span>
            <span id='feedback-text'>{feedbkcomment}</span>
        </div>
    </div>
  )
}

export default Feedbackcards