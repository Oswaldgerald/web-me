import React from 'react'
import './Testimonials.css'
import  { TestimonialsData } from "../../data/TestimonialsData"
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow  from '../../assets/rightArrow.png'


const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = TestimonialsData.length;
  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className="stroke-text">What they</span>
            <span>say about us</span>
            <span>
                { TestimonialsData[selected].review }
            </span>
            <span>
                <span style={{color: 'var(--orange)'}}>
                    {TestimonialsData[selected].name}
                </span>{" "}
                - {TestimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={TestimonialsData[selected].image} alt="" />
            <div className='arrows'>
            <img 
            onClick={()=>{
            selected===0
            ? setSelected(tLength-1)
            : setSelected((prev)=>prev-1);
            }}
            src={leftArrow} alt="" />
            <img 
            onClick={()=>{
                selected === tLength-1
                ? setSelected(0)
                : setSelected((prev)=>prev+1);
            }}
            src={rightArrow} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Testimonials

        