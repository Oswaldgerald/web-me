import React from 'react'
import './Testimonials.css'
import { TestimonialsData } from "../../data/TestimonialsData"
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'


const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const transition = { type: 'spring', duration: 3 }
    const tLength = TestimonialsData.length;
    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >
                    {TestimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {TestimonialsData[selected].name}
                    </span>{" "}
                    - {TestimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, X: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, X: 0 }}
                >
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, X: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, X: 0 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={TestimonialsData[selected].image} alt="" />
                <div className='arrows'>
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1);
                        }}
                        src={leftArrow} alt="" />
                    <img
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}
                        src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials

