import React from 'react';
import {Link} from 'react-router-dom';
import HeaderStyled from './HeaderStyled';

export default function Header() {
  return (
    <HeaderStyled className='shadow'>
      <div className='logo'>
        <img src='' alt=''/>
      </div>
      <nav className='nav'>
       <Link
        to='/'
        className='nav__item'
       >FlaminGO</Link>
       <Link
        to='/login'
        className='nav__item'
       >Sign In</Link>
      </nav>
    </HeaderStyled>
  )
}