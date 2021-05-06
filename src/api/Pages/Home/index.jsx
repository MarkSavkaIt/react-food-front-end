import React from 'react'
import MenuPage from './MenuPage/MenuPage'
import Order from './Order/Order'

import './home.css'

const Home = () => {
   
   return (
      <div className="home">
         <MenuPage/>
         <Order/>
      </div>
   )
}

export default Home