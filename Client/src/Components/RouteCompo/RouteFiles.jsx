import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Categories from '../Pages/categories/categories';
import Navbar from '../Navbar/Navbar';
import TechOnUdemy from '../Pages/TechOnUdemy';
import UdemyBuisness from '../Pages/UdemyBuisness';
const RouteFiles = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
    <Route path="/" element={<Home/>}/>
  <Route path="/category" element ={<Categories/>}/>
  <Route path="/techonudemy" element={<TechOnUdemy/>}/>
  <Route path="/udemybuisness" element={<UdemyBuisness/>}/>



     
      
      
      </Routes>
      </BrowserRouter> 
    </>
  )
}

export default RouteFiles
