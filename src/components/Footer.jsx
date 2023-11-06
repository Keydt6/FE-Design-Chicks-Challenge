import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <footer>
      <div className='box__money'>
        <ul className='money'>
          <li className='normal'>
            <img src='./images/visa.png'></img>
          </li>
          <li className='normal'>
            <img src='./images/american-express.png'></img>
          </li>
          <li className='crypto'>
            <img src='./images/bitcoin-cash.png'></img>
          </li>
          <li className='crypto'>
            <img src='./images/ethereum.png'></img>
          </li>
          <li className='crypto'>
            <img src='./images/bitcoin.png'></img>
          </li>
          <li className='crypto'>
            <img src='./images/litecoin.png'></img>
          </li>
          <li className='text'>And 50+ more</li>
        </ul>
      </div>

      <div className='box__socials'>
        <ul className='socials'>
          <li>
            <img src='images/facebook.png'></img>
          </li>
          <li>
            <img src='images/instagram.png'></img>
          </li>
          <li>
            <img src='images/gorjeo.png'></img>
          </li>
          <li>
            <img src='images/discord.png'></img>
          </li>
        </ul>
        <hr></hr>
      </div>

      <div className='container__footer'>
        <div className='box__footer'>
          <img src='images/chicks-logo-large.svg' />
          <p className='email'>support@chiksgold.com </p>
        </div>

        <div className='box__footer'>
          <h2>Chicks Gold</h2>
          <p>Game</p>
          <p>About Us</p>
          <p>Blog</p>
          <p>Sitemap</p>
        </div>

        <div className='box__footer'>
          <h2>Support</h2>
          <p>Contac Us</p>
          <p>FAQ</p>
        </div>

        <div className='box__footer'>
          <h2>Legal</h2>
          <p>Pricay Policy</p>
          <p>Terms of service</p>
          <p>Copyright</p>
        </div>

        <div className='reviews'>
          <img
            src='images/clasificacion.png'
            style={{ marginRitgh: '200px' }}
          ></img>
          TrusPilot Reviews
        </div>
      </div>

      <div className='box__copyright'>
        <p>© 2017-2020 ChicksGold.com. All Rights Reserved</p>
      </div>
    </footer>
  )
}
export default Footer
