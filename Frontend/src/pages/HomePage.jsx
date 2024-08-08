import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import Spinner from '../components/Spinner'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import BestSellerProduct from '../components/BestSellerProduct'
import Feature from '../components/Feature'
import FeaturedProducts from '../components/FeaturedProducts'
import Fact from '../components/Fact'
import FruitShop from '../components/FruitShop'
import Hero from '../components/Hero'
import ModalSearch from '../components/ModalSearch'
import Testimonial from '../components/Testimonial'
import VegitableShopTest from '../components/VegitableShopTest'
import ButtonToTop from '../components/ButtonToTop'
//import initializeMainScript from '../script/mainFunction'
import axios from 'axios';
import ProductCard from '../components/ProductCard';



export default function HomePage() {
  
  //home pages
  const [categories, setCategories] = useState([]);
  

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/categories');
      setCategories(response.data);
      console.log('Categories API Response:', response.data);
    } catch (error) {
      handleFetchError('categories', error);
    }
  };





  const handleFetchError = (type, error) => {
    console.error(`Error fetching ${type}:`, error);
  };

  useEffect(() => {
    // Initialize your main script when the component mounts
    // initializeMainScript();

    fetchCategories();
  }, []);
 // Empty dependency array means this effect runs once after the initial render


  // useEffect(() => {
  //   console.log('Categories:', categories);
  // }, [categories]);

  // useEffect(() => {
  //   console.log('Products:', products);
  // }, [products]);



  return (
    <div>
      <Spinner/>

      <NavBar/>

      <ModalSearch/>

      <Hero/>

      <Feature/>

      <div className="col-lg-4 mx-auto text-center">
          <h1>Our Organic Products</h1>
      </div>

      <FruitShop/>
      
      <FeaturedProducts/>

      <VegitableShopTest/>

      <Banner/>

      <BestSellerProduct/>

      <Fact/>

      <Testimonial/>

      <Footer/>

      <ButtonToTop/>



    </div>
  )
}
