import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Collection from './pages/Collection.jsx';
import Cart from './pages/Cart.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Orders from './pages/Orders.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Product from './pages/Product.jsx';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>  {/* corrected closing bracket */}
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/product' element={<Product/>}/>   
        </Routes>
      </div>
    </>
  )
}






export default App
