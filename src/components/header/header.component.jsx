import React from 'react';
import {Link} from 'react-router-dom'
import './header.style.scss'
import './me.png'


const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <img src='https://genius-face.herokuapp.com/static/media/Logo.1330fb23.png' style={{width: 70, height: 70}} alt="me" className='logo'/>
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        </div>
    </div>
)
export default Header