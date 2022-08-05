import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className='code'>
          <div className="left-h">
            <Header/>
            {/* the best ad */}
            <div className="the-best-ad">
              <div></div>
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
        <div className="code-rate">
          <img src={Heart} alt=""/>
          <span>Heart rate</span>
          <span>116 bpm</span>
        </div>
        {/* hero images */}
        <img src={hero_image} alt="" className="code-image"/>
        <img src={hero_image_back} alt="" className="code-image-back"/>

        {/* Calories */}
        <div className="calories">
          <img src={Calories} alt=""/>
          <div>
          <span>Calories Burn</span>
          <span>2.3 Cal</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
