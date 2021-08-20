import React from 'react'
// We'll need React Router's own version of the History API

export default function Home() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list

  const routeToShop = () => {

  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://unsplash.com/photos/xBXF9pr6LQo'
        alt=''
      />
      <button
        onClick={routeToShop}
        id="order-button"
      >
        Order now!
      </button>
    </div>
  )
}
