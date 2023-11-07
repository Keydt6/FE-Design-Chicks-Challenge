import React from 'react'
import '../styles/body.css'

function CardAdd({ title = '', price = 0 }) {
  return (
    <section className='card'>
      <div className='onsale'>
        <div className='status'>
          <p>
            <b className='b'>•</b> ON SALE
          </p>
          <p className='stock'>In Stock</p>
        </div>
        <input className='input-a' type='number' value={1} readOnly />
      </div>

      <img src='images/escudo.jpg'></img>

      <div className='card-name'>
        <h3>{title}</h3>
        <i className='fa fa-rocket' aria-hidden='true'></i>
      </div>

      <div className='card-price'>
        <span className='price'>${price}</span>
        <span className='price-touch'>${Math.floor(price * 1.2)}</span>
      </div>

      <p className='card-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>

      <div className='buttons'>
        <button className='btn btn-details'>DETAILS</button>
        <button className='btn btn-add'>
          ADD <i className='fa fa-shopping-cart'></i>
        </button>
      </div>
    </section>
  )
}
export default CardAdd
