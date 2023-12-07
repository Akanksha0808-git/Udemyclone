import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Navbar from '../Navbar/Navbar';
import TechOnUdemy from '../Pages/TechOnUdemy';
import UdemyBuisness from '../Pages/UdemyBuisness';
import Login from '../LoginSignup/Login';
import Signup from '../LoginSignup/Signup';
import Addtocart from '../AddToCart/Addtocart';
import CourseComp from '../GenericCompo/CourseCompo';
import SubroutesCompo from '../GenericCompo/SubroutesCompo';
import Learning from '../GenericCompo/Learning';
import SearchResults from '../Navbar/SearchResults';
import Footer from '../Footer/Footer';
const RouteFiles = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
    <Route path="/" element={<Home/>}/>
  <Route path='/course/:category' element={<CourseComp/>} />
  <Route path='/course/:category/:subcategory' element={<SubroutesCompo/>} />
  <Route path="/techonudemy" element={<TechOnUdemy/>}/>
  <Route path="/udemybuisness" element={<UdemyBuisness/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/addtocart" element={<Addtocart/>}/>
  <Route path="/mylearning" element={<Learning/>}/>
  <Route path="/searchcomp" element={<SearchResults/>}/> 
      </Routes>
<Footer/>

      </BrowserRouter> 
    </>
  )
}

export default RouteFiles
