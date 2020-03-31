import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import './App.css';
import Header from './components/header/header.component'
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import CheckoutPage from './pages/checkout/checkout.componenet'
// Redux
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {setCurrentUser} from './redux/user/user.action'
import { selectCurrentUser} from './redux/user/user.selector'

class App extends React.Component {
    
    unsubscribefromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props
        this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    setCurrentUser ({
                            id: snapShot.id,
                            ...snapShot.data()
                        })
                    })
                
            }
        
                setCurrentUser( userAuth)
                
                
         })
    }

    comnentWillUnmount() {
        this.unsubscribefromAuth()
    }
    render() {
        return ( 
        <div className = 'App'>
            <Header/>

            <Switch>
                <Route exact path = '/' component = { HomePage }/> 
                <Route path = '/shop' component = { ShopPage }/> 
                <Route exact path = '/checkout' component = { CheckoutPage }/> 
                <Route exact path = '/signin' render = {() => this.props.currentUser ? (<Redirect to='/'/>): (<SignInAndSignUp/>)}/> 
            </Switch> 
        </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,

})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);