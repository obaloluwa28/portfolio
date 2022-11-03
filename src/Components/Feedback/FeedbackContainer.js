import React,{useState, useEffect} from 'react'
import './Feedback.css'
import Feedbackcards from './Feedbackcards'
import Feedbackcomments from './Feedbackjson';

const delay = 6000;
let myIndex = 0;

const FeedbackContainer = () => {
    const [index, setIndex] = useState(0);
    const [slideImages, setSlideImages] = useState(Feedbackcomments)

    useEffect(() =>{
        setSlideImages(Feedbackcomments)
    }, [])

    useEffect(() => {
        setTimeout(() =>
            setIndex((prevIndex) =>
              myIndex === 0 ? (prevIndex === Feedbackcomments.length - 2 ? myIndex = 1 : prevIndex + 1) : (prevIndex === 0 ? myIndex = 0 : prevIndex - 1)
            ),delay);
            console.log(index)
              
            return () => {};
    }, [index]);

  return (
    <div className='topdiv-contain-container'>
            <div className="slideshow">
                <div className="oba-feedback-main-container">
                    <div className='oba-feeback-top-contn'>
                        <span>Testimonials</span>
                        <span>People I've worked with have said some nice things...</span>
                    </div>
                    <div className='oba-feeback-scroll-container' >
                        <div className='oba-feebak-container' style={{ transform: `translate3d(-${index * 20}%, 0, 0)`}}>
                            {slideImages.map((slideImage, index) => (
                                <Feedbackcards key={index} feebkname={slideImage.names} feedbkcomment={slideImage.Comment} feedabkurl={slideImage.imgurl}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="slideshowDots">
                {slideImages.map((_, idx) => (
                <div key={idx} className={`slideshowDott${index === idx ? " activee" : ""}`}></div>
                ))}
            </div>
    </div>
  )
}

export default FeedbackContainer