import React from 'react'
import '../styles/body.css'
import CardAdd from './CardAdd'
import Pagination from './Pagination'

const cards = [
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  },
  {
    on_sale: 1,
    in_stock: 1,
    src: 'images/escudo.jpg',
    titulo: 'tailored_Jeans',
    price: 19.99,
    price_stock: 1,
    descripcion: 'Some_text'
  }
]

function Body() {
  return (
    <div className='container-body'>
      <h3 className='tittle'>Condimentum consectectur</h3>

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
        <div className='text-filter'>
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
