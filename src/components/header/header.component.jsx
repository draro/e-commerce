import React from 'react';
import {Link} from 'react-router-dom'
import './header.style.scss'
import {auth} from '../../firebase/firebase.utils'
// REDUX
import {connect} from 'react-redux'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <img src='https://genius-face.herokuapp.com/static/media/Logo.1330fb23.png' style={{width: 70, height: 70}} alt="me" className='logo'/>
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
            currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
            :
           ( <Link className='option' to='/signin'>SIGN IN</Link>)
        }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)