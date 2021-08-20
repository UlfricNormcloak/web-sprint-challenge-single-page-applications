import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import Home from './Home';
import PizzaForm from './PizzaForm';
import schema from './validation/formSchema';

const initialFormValues = {
  ////Text Input/////
  name: '',
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
  name: '',
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


const initialOrders = []
const initialDisabled = true


  export default function App() {

    const [orders, setOrders] = useState(initialOrders)          
    const [formValues, setFormValues] = useState(initialFormValues) 
    const [formErrors, setFormErrors] = useState(initialFormErrors) 
    const [disabled, setDisabled] = useState(initialDisabled)       

    const getOrders = () => {
      axios.get('`https://reqres.in/api/orders`')
        .then(res => {
          setOrders(res.data);
        }).catch(err => console.error(err))
    }
  
    const postNewOrder = newOrder => {
      axios.post('`https://reqres.in/api/orders`', newOrder)
        .then(res => {
            setOrders([res.data, ...orders]);
        }).catch(err => console.error(err));
  
      setFormValues(initialFormValues);
    }
  
    const validate = (name, value) => {
      yup.reach(schema, name)
        .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: '' }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
    }

    const inputChange = (name, value) => {
      validate(name, value)
      setFormValues({
        ...formValues,
        [name]: value
      })
    }

    const formSubmit = () => {
    
      const newOrder = {
        name: formValues.name.trim(),
        size: formValues.size,
        sauce: formValues.role,
        pepperoni: formValues.pepperoni.check(''),
        //hobbies: ['hiking', 'reading', 'coding'].filter(hobby => !!formValues[hobby])
      }
  
      postNewOrder(newOrder);
    }

    // useEffect(() => {
    //   getOrders()
    // }, [])
  
    // useEffect(() => {
    //   schema.isValid(formValues).then(valid => setDisabled(!valid))
    // }, [formValues])
    
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>


  )
  }
