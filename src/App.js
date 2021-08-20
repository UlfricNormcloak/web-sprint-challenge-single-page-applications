import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
//import * as yup from 'yup';
import Home from './Home';
import PizzaForm from './PizzaForm';

const initialFormValues = {
 
  ///// DROPDOWN /////
  size: '',
  ///// Dropdown /////
  sauce: '',
  ///// CHECKBOXES /////
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatoes: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  /////Text Input/////
  specialInstructions: ''
  
}
const initialFormErrors = {
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatoes: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  specialInstructions: ''
}


//const initialFriends = []
const initialDisabled = true

  
  
  
  return (
    <div className='App'>
      <nav>
         <h1 className='store-header'>Lambda Eats</h1>
         <div className='nav-links'>
          <Link to="/">Home</Link> 
         </div>
      </nav>

      <PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>


  )

export default App;
