import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51KMr2cJdBz5ZbKHEtqfNIJRL1VENBVxkts6JvHVbj16iMHVZWiKCfuCEfU4HqERdRnUVG6lxzewfDB57uZtUgBQP00HcliLW40');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect( () => {
    // will listen and only run when the app component loads
    auth.onAuthStateChanged( authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM convetion
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>  
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
