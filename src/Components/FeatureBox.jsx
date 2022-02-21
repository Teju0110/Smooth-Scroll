import React from 'react'
import './FeatureBox.css'

const FeatureBox = (props) => {
  return (
    <div className='box'>
        <div className='box_img'>
            <img src={props.image} alt=""/>
        </div>
        <div className='box_text'>
            <h2>{props.title}</h2>
        </div>

    </div>
  )
}

export default FeatureBox