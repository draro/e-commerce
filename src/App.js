import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import './App.css';
import Header from './components/header/header.component'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }
    unsubscribefromAuth = null

    componentDidMount() {
        this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                })

            } else {
                this.setState({ currentUser: userAuth })
            }
        })
    }

    comnentWillUnmount() {
        this.unsubscribefromAuth()
    }
    render() {
        return ( 
        <div className = 'App'>
            <Header currentUser = { this.state.currentUser }/>

            <Switch>
                <Route exact path = '/' component = { HomePage }/> 
                <Route path = '/shop' component = { ShopPage }/> 
                <Route path = '/signin' component = { SignInAndSignUp }/> 
            </Switch> 
        </div>
        );
    }
}

export default App;