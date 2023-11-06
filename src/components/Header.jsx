import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <header className='Header'>
      <nav>
        <div className='nav-burger'>
          <button>
            <i className='fa fa-bars' aria-hidden='true'></i>
          </button>

          <img className='logo-burger' src='images/chicks-logo-large.svg' />
        </div>

        <div className='nav-burger'>
          <ul>
            <li>
              <button className='login-button'>
                {' '}
                SIGN IN <i className='fa fa-user'></i>
              </button>
            </li>
          </ul>
        </div>

        <div className='nav-left'>
          <img className='logo' src='images/chicks-logo-large.svg' />
          <ul>
            <li>
              <a href=''>
                CURRENCY <i className='fa fa-angle-down' aria-hidden='true'></i>
              </a>
            </li>
            <li>
              <a href=''>
                ITEMS <i className='fa fa-angle-down'></i>
              </a>
            </li>
            <li>
              <a href=''>
                ACOUNTS <i className='fa fa-angle-down'></i>
              </a>
            </li>
            <li>
              <a href=''>
                SERVICE <i className='fa fa-angle-down'></i>
              </a>
            </li>
            <li>
              <a href=''>
                SWAP <i className='fa fa-angle-down'></i>
              </a>
            </li>
            <li className='space'>
              <a href=''>
                SELL <i className='fa fa-angle-down'></i>
              </a>
            </li>
          </ul>
        </div>

        <div className='nav-right'>
          <ul>
            <li>
              <a href=''>
                USD <i className='fa fa-angle-down'></i>
              </a>
            </li>
            <li>
              <a href=''>
                <i className='fa-solid fa-cart-shopping'></i> CART(5)
              </a>
            </li>
            <li>
              <button className='login-button'>
                {' '}
                SIGN IN <i className='fa fa-user'></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header
