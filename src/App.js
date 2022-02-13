import React from 'react'
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

import { Provider, useSelector } from "react-redux";
import store from "./store/index";

//screen
import { WelcomeScreen } from './screen/welcomeScreen'
import { uiScreen } from './screen/uiScreen'
function App() {
    return (
      <Router>
        <Provider store={store}>
          <Switch>
            {/* <LoginProtectedRoute exact path="/" authLogin={authLogin}>
            <Login loginFunction={loginFunction} />
          </LoginProtectedRoute> */}
            {/* <Route exact path="/register">
            <UserRegister />
          </Route> */}
            <Route
              exact
              path="/"
              // authLogin={authLogin}
              component={WelcomeScreen}
            />
            <Route
              exact
              path="/home"
              // authLogin={authLogin}
              component={uiScreen}
            />
            {/* <ProtectedRoute
            path="/admin/product"
            authLogin={authLogin}
            component={CreateProduct}
          />
          <ProtectedRoute
            path="/admin/product-list"
            authLogin={authLogin}
            component={ProductList}
          />
          <ProtectedRoute
            path="/admin/order-list"
            authLogin={authLogin}
            component={OrderList}
          />
          <ProtectedRoute
            path="/tracking"
            authLogin={authLogin}
            component={TrackOrder}
          />
          <ProtectedRoute
            path="/product-list"
            authLogin={authLogin}
            component={ProductListFarmer}
          />
           <ProtectedRoute
            path="/show/order"
            authLogin={authLogin}
            component={OrderListFarmer}
          /> */}
          </Switch>
        </Provider>
      </Router>
    );
  }

export default App;
