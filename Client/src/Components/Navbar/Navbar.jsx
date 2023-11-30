import React , { useState }from 'react'
import { NavLink ,Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { IoCartOutline } from "react-icons/io5";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-regular-svg-icons';
// import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles

import "./Navbar.css"
import Searchbar from './Searchbar'
import Addtocart from '../AddToCart/Addtocart'
// import Addtocart from '../AddToCart/Addtocart'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>

    <div className="navbar" >

    <div className="logog">
<Link href='/'>
<img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" loading="lazy"></img>
</Link>
        </div>
        {/* <div className='menubox'>
      
  <NavLink to="/category">Categories</NavLink>
  
<Searchbar/>
  <NavLink to="/udemybuisness">UdemyBuisness</NavLink>
  

  <NavLink to="/techonudemy">Teach On Udemy</NavLink>

  </div> */}
  <div className='outerbox'>
<div className='hamburgerBox'>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>

<div className='menubox'>
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li className="hoverable">
            <NavLink to="/category" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
            Categories
            </NavLink>
          </li>
          {/* <Searchbar/> */}

          {/* -------searchbar here-------- */}
          <li>
      
          <div className='searchbar'>
    <form>
    <button className='searchbtn'> <FontAwesomeIcon icon={faSearch}  /></button>
      <input
          type="text"
          placeholder="Search for anything"
          className='search form-control'
          aria-label="Search"/>
      </form>
    </div>
    </li>
 
  

          <li >
            <div className="mobiles-link">
              <NavLink to="/udemybuisness" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')}>
              UdemyBuisness
              </NavLink>
            </div>
          </li>
          <li>
            <div className='udemy'>
            <NavLink to="/techonudemy" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
            Teach on Udemy
            </NavLink>
            </div>
          </li>

        </ul>
       
{/* <Addtocart/> */}
<div className='cart'>
<div  className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
  <img src="https://www.vhv.rs/dpng/d/459-4593681_empty-shopping-cart-shopping-cart-icon-svg-hd.png" alt="img" style={{height:"25px", width:"25px"}} />
</div>
</div>


        <button className='btnlogin btn'>Login</button>
        <button className='btnsignup btn'>Signup</button>
         <div className='global' >
          <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-globe-icon-png-image_3787753.jpg" alt="I" style={{height:"30px", width:"30px"}} />
         </div>
        </div>



        </div>
    </div>
    

    </>
  )
}

export default Navbar
