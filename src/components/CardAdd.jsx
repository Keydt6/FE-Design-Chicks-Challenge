import React from 'react'
import '../styles/body.css'

function CardAdd({ title = '', price = 0 }) {
  return (
    <div className='card'>
      <p className='onsale'>
        <b className='b'>•</b> ON SALE{' '}
        <input className='input-a' type='number' value={1} readOnly />
      </p>
      <div className='stock'>In Stock</div>
      <img src='images/escudo.jpg'></img>
      <div style={{ display: 'flex' }}>
        <h1>{title}</h1>{' '}
        <i
          className='fa fa-car'
          aria-hidden='true'
          style={{ marginLeft: '45px', color: 'green' }}
        ></i>
      </div>
      <ul className='list-price'>
        <li>
          <p className='price'>${price}</p>
        </li>
        <li>
          <p className='price-touch'>$19.99</p>
        </li>
      </ul>
      <p className='text-description'>lorem ipsum </p>
      <div className='buttons'>
        <button className='btn-cancel'> DETAILS</button>
        <button className='btn'>
          ADD <i className='fa fa-shopping-cart'></i>
        </button>
      </div>
    </div>
  )
}
export default CardAdd
