import React from 'react'
import {NavLink} from 'react-router-dom'
const  Navbar=()=> {
  return (
    <div>
      <nav>
        <ul className='left'>
          <li><NavLink to='/'>AL-BARI</NavLink></li>
        </ul>
        <ul className='right'>
          <li>
            <NavLink to='/cart'><span className='ShoppingCart'><i className='fas fa-cart-plus'></i></span></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
