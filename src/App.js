import React from 'react'
import './App.css';
import Heder from './componets/Heder/Heder';
import Shop from './componets/Heder/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './componets/Review/Review';
import Inventory from './componets/Inventory/Inventory';
import Notfound from './componets/Notfound/Notfound';
import Productdetail from './componets/Productdetail/Productdetail';
import Shipment from './componets/Shipment/Shipment';
import Login from './componets/Login/Login';

function App() {
  return (
    <div>
      <Heder></Heder>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/shipment">
            <Shipment></Shipment>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path="/product/:ProductKey">
            <Productdetail></Productdetail>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>



    </div>
  );
}

export default App;
