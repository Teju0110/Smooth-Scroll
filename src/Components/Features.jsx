import React from 'react'
import FeatureBox from './FeatureBox'
import feature1 from '../Images/feature1.jpg';
import feature2 from '../Images/feature2.jpg';
import feature3 from '../Images/feature3.jpg'
import feature4 from '../Images/feature4.jpg'
import './Features.css'

const Features = () => {
  return (
    <div id='features'> 
    <h1>Features</h1>
    <div className='container'>
        <FeatureBox image={feature1} title="Weight Lifting"/>
        <FeatureBox image={feature2} title="Specific Muscle "/>
        <FeatureBox image={feature3} title="Flex Your Muscle"/>
        <FeatureBox image={feature4} title="Cardio Exercise"/>
    </div>
    </div>
  )
}

export default Features