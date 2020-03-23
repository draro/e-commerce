import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import './App.css';
import Header from './components/header/header.component'
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';



class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
