import React, { Fragment } from 'react'
import {NavLink}  from "react-router-dom";
import './Menu.css'

const Menu = () =>{
    return(
        <div className='container'>
          <NavLink exact className='textarea' activeClassName='active_class' to='/about'>
              About us
          </NavLink>
          <NavLink exact className='textarea' activeClassName='active_class' to='/service'>
             Service
          </NavLink>
          <NavLink exact className='textarea' activeClassName='active_class' to='/'>
             Search
          </NavLink>
          <NavLink exact className='textarea' activeClassName='active_class' to='/user'>
             User
          </NavLink>
          <NavLink exact className='textarea' activeClassName='active_class' to='/contact'>
            Contact Us
          </NavLink>
        </div>
    )
}

export default Menu