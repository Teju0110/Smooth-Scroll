import React from 'react'
import './About.css'
import aboutImg from '../Images/aboutImg.jpg'

const About = () => {
  return (
    <div id='about'>
        <div className='about_img'>
            <img src={aboutImg} alt=""/>
        </div>
        <div className='about_details'>
            <h1>About Us</h1>
            <p>We make group for workout fun, daily provide food healty & tasty,
                 meditation & yoga classes for mental pease and Medical & lifestyle lesson for free</p>
        <a href='#' className='about_btn'>Read More</a>

        </div>
    </div>
  )
}

export default About