import React from 'react'
import './Card.css'

const Card = ({name, language, janr, rating, premiere, image}) => {
  return (
    <>
      <div className='card__wrapper'>
        <img className='card__image' src={image} alt="" />
        <div className='card__contant'>
          <h1 className='card__title'>{name}</h1>
          <div className='card__info'>
            <p className='card__subtitle'>{language}</p>
            <p className='card__trailer'>{janr}</p>
            <p className='card__premiere'>{premiere}</p>
          </div>
        </div>
      </div>
    </>
   
  )
}

export default Card