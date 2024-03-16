import { useState } from 'react'
import HomePage from './pages/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import ShopDetailPage from './pages/ShopDetailPage';
import ContactPage from './pages/ContactPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import TestimonialPage from './pages/TestimonialPage';
import ErrorPage from './pages/ErrorPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Admin/home';
import AdminAddProducts from './pages/Admin/AdminAddProducts';
import AdminUpdateProducts from './pages/Admin/AdminUpdateProducts';
import { CartProvider } from "react-use-cart";


function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route> 
          <Route path="/login" element={<LoginPage/>}></Route> 
          <Route path="/signup" element={<SignUpPage/>}></Route> 
          <Route path="/shop" element={<ShopPage/>}></Route> 
          <Route path="/shopDetail" element={<ShopDetailPage/>}></Route> 
          <Route path="/contact" element={<ContactPage/>}></Route> 
          <Route path="/cart" element={<Cart/>}></Route> 
          <Route path="/checkout" element={<Checkout/>}></Route> 
          <Route path="/testimonial" element={<TestimonialPage/>}></Route> 
          <Route path="/error" element={<ErrorPage/>}></Route> 
          <Route path="/adminProducts" element={<Home/>}></Route> 
          <Route path="/adminAddProducts" element={<AdminAddProducts/>}></Route> 
          <Route path="/adminUpdateProducts/:id" element={<AdminUpdateProducts/>}></Route> 
  
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
