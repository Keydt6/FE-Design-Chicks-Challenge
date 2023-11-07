import React from 'react'
import '../styles/body.css'
import CardAdd from './CardAdd'
import Pagination from './Pagination'

import useData from '../hooks/useData'

function Body() {
  const { cards } = useData()
  return (
    <div className='container-body'>
      <h3 className='title'>Condimentum consectectur</h3>

      <div className='barra'>
        <select className='select_game'>
          <option> Select a game</option>
        </select>

        <input type='text' className='search' placeholder='Search..' />

        <select className='select_price'>
          <option>all</option>
        </select>

        <select className='select_type'>
          <option> all</option>
        </select>
      </div>

      <div className='container'>
        <div>
          <ul className='list-filter'>
            <li>
              {' '}
              <p>Showing 20 from 125</p>
            </li>
            <li>
              <select className='select-filter'>
                <option>Featured</option>
              </select>
            </li>
          </ul>
        </div>

        <div className='container-card'>
          {cards.map((card, idx) => (
            <CardAdd key={idx} title={card.titulo} price={card.price} />
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  )
}
export default Body
