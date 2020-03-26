import React from 'react';
// import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
// REDUX
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartHiddem} from '../../redux/cart/cart.selector'
import { selectCurrentUser} from '../../redux/user/user.selector'
import {HeaderContainer, LogoContainer, OptionContainre,OptionLink} from './header.style'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer> 
        <LogoContainer to='/'>
            <img src='https://genius-face.herokuapp.com/static/media/Logo.1330fb23.png' style={{width: 70, height: 70}} alt="me" className='logo'/>
        </LogoContainer>
        <OptionContainre>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink className='option' to='/contact'>CONTACT</OptionLink>
        {
            currentUser ? (
            <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>)
            :
           ( <OptionLink to='/signin'>SIGN IN</OptionLink>)
        }
        <CartIcon />
        </OptionContainre>
        {
            hidden ? null : (
        <CartDropdown />)
}    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHiddem
})

export default connect(mapStateToProps)(Header)