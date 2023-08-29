import React from 'react'
import pizza from '../assets/olives.jpg'
import '../styles/Card.css'

const Card = () => {
  return (
    <div className='card-container'>
        <img src={pizza} alt='olive pizza' className='card-img' />
        <h1 className='card-title'>Card Title</h1>
        <p className='card-description'>This ia a card description.Add something in details here about the product.</p>
        <a href='cardPage' className='card-btn'>Learn More</a>

    </div>
  )
}

export default Card