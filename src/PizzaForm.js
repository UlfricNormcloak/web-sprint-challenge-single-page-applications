import React from 'react'

export default function PizzaForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }
    
  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Order the Pizza of Your Dreams!</h2>

        
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
          <div>{errors.pepperoni}</div>
          <div>{errors.sausage}</div>
          <div>{errors.canadianBacon}</div>
          <div>{errors.spicyItalianSausage}</div>
          <div>{errors.grilledChicken}</div>
          <div>{errors.onions}</div>
          <div>{errors.greenPepper}</div>
          <div>{errors.dicedTomatoes}</div>
          <div>{errors.blackOlives}</div>
          <div>{errors.roastedGarlic}</div>
          <div>{errors.artichokeHearts}</div>
          <div>{errors.threeCheese}</div>
          <div>{errors.pineapple}</div>
          <div>{errors.extraCheese}</div>
          <div>{errors.specialInstructions}</div>
       
        </div>
     </div>

  <div className='pizza-order inputs'>
        <h4>Begin You Order Here</h4>

       {/*////1st Text Input//////*/}
        <label>Name&nbsp;
          <input className="name-input"
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>
      
        {/* ////////// DROPDOWNS ////////// */}
    <div className="dropdowns">
          <h4>Size and Sauce</h4>

        <label>Pizza Size
          <select id="size-dropdown"
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='x-large'>X-Large</option>
          </select>
        </label>

        <label>Sauce
          <select
            onChange={onChange}
            value={values.sauce}
            name='sauce'
          >
            <option value=''>- Select an option -</option>
            <option value='originalRed'>Original Red</option>
            <option value='garlicRanch'>Garlic Ranch</option>
            <option value='bbqSauce'>BBQ Sauce</option>
            <option value='spinachAlfredo'>Spinach Alfredo</option>
          </select>
        </label>
        </div>

        {/* ////////// CHECKBOXES ////////// */}
    <div className='form-group checkboxes'>
          <h4>Toppings</h4>

          <label>Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>

          <label>Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={values.sausage}
              onChange={onChange}
            />
          </label>

          <label>Canadian Bacon
            <input
              type="checkbox"
              name="canadianBacon"
              checked={values.canadianBacon}
              onChange={onChange}
            />
          </label>

          <label>Spicy Italian Sausage
            <input
              type="checkbox"
              name="spicyItalianSausage"
              checked={values.spicyItalianSausage}
              onChange={onChange}
            />
          </label>

          <label>Grilled Chicken
            <input
              type="checkbox"
              name="grilledChicken"
              checked={values.grilledChicken}
              onChange={onChange}
            />
          </label>

          <label>Onions
            <input
              type="checkbox"
              name="onions"
              checked={values.onions}
              onChange={onChange}
            />
          </label>

          <label>Green Pepper
            <input
              type="checkbox"
              name="greenPepper"
              checked={values.greenPepper}
              onChange={onChange}
            />
          </label>

          <label>Diced Tomatoes
            <input
              type="checkbox"
              name="dicedTomatoes"
              checked={values.dicedTomatoes}
              onChange={onChange}
            />
          </label>

          <label>Black Olives
            <input
              type="checkbox"
              name="blackOlives"
              checked={values.blackOlives}
              onChange={onChange}
            />
          </label>

          <label>Roasted Garlic
            <input
              type="checkbox"
              name="roastedGarlic"
              checked={values.roastedGarlic}
              onChange={onChange}
            />
          </label>

          <label>Artichoke Hearts
            <input
              type="checkbox"
              name="artichokeHearts"
              checked={values.artichokeHearts}
              onChange={onChange}
            />
          </label>

          <label>Three Cheese
            <input
              type="checkbox"
              name="threeCheese"
              checked={values.threeCheese}
              onChange={onChange}
            />
          </label>

          <label>Pineapple
            <input
              type="checkbox"
              name="pineapple"
              checked={values.pineapple}
              onChange={onChange}
            />
          </label>

          <label>Extra Cheese
            <input
              type="checkbox"
              name="extraCheese"
              checked={values.extraCheese}
              onChange={onChange}
            />
          </label>
    </div>

        {/* ////////// TEXT INPUTS ////////// */}
        <label>Special Instructions&nbsp;
          <input id="special-text"
            value={values.specialInstructions}
            onChange={onChange}
            name='specialInstructions'
            type='text'
          />
        </label>
     </div>
   </form>
  )
};
