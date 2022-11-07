import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from 'framer-motion'



const Hero = () => {
  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerHeight<=768 ? true: false
  return (
    <div className='code'>
      <div className="blur code-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? "178px": "238px" }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>Veni vidi vinci : Gadi Bullah</span>
        </div>
        {/* hero heading */}
        <div className="hero-code">
          <div>
            <span>Fix </span>
            <span className='stroke-text'>the cause,</span>
          </div>
          <div>
            <span>
              Not the Symptom
            </span>
          </div>
          <div>
            <span>
              Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Projects</span>
          </div>
          <div>
            <span>+100</span>
            <span>Dreams</span>
          </div>
          <div>
            <span>+50</span>
            <span>IDEs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join me</button>
        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className="code-rate">
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="code-image" />
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className="code-image-back" />

        {/* Calories */}
        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className="calories"
        >

          <img src={Calories} alt="" />
          <div>
            <span>Calories Burn</span>
            <span>2.3 Cal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default Hero
