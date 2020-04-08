import React from 'react';
import {ProductList} from 'Pages/ProductList';
import React from "react";
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
          <Route path='/' component={ProductList}>

          </Route>
        </Switch>
      </Router>
  );
}

export default App;
