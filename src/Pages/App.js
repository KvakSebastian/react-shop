import React from 'react';
import {ProductList} from 'Pages/ProductList';
import {ProductDetails} from 'Pages/ProductDetails';
import {Basket} from 'Pages/Basket';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      //<ProductList />
      <Router>
        <Switch>
          <Route path='/' component={ProductList} exact />
          <Route path='/details' component={ProductDetails} />
          <Route path='/basket' component={Basket} />

        </Switch>
      </Router>
  );
}

export default App;
