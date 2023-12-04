// import React , { useState }from 'react'
// import { NavLink ,Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import { IoCartOutline } from "react-icons/io5";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faCartShopping } from '@fortawesome/free-regular-svg-icons';
// // import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles

// import "./Navbar.css"
// import Searchbar from './Searchbar'
// import Addtocart from '../AddToCart/Addtocart'
// // import Addtocart from '../AddToCart/Addtocart'

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   return (
//     <>

//     <div className="navbar" >
  
//     <div className="logog">
// <Link to='/'>
// <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" loading="lazy"></img>
// </Link>
//         </div>
//         {/* <div className='menubox'>
      
//   <NavLink to="/category">Categories</NavLink>
  
// <Searchbar/>
//   <NavLink to="/udemybuisness">UdemyBuisness</NavLink>
  

//   <NavLink to="/techonudemy">Teach On Udemy</NavLink>

//   </div> */}
//   <div className='outerbox'>
// <div className='hamburgerBox'>
//         <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         </div>

// <div className='menubox'>

//         <ul className={`menu ${menuOpen ? 'open' : ''}`}>
//           <li className="hoverable">
//             <NavLink to="/category" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
//             Categories
//             </NavLink>
//           </li>
//           {/* <Searchbar/> */}

//           {/* -------searchbar here-------- */}
//           <li>
      
//           <div className='searchbar'>
//     <form>
//     <button className='searchbtn'> <FontAwesomeIcon icon={faSearch}  /></button>
//       <input
//           type="text"
//           placeholder="Search for anything"
//           className='search form-control'
//           aria-label="Search"/>
//       </form>
//     </div>
//     </li>
 
  

//           <li >
//             <div className="mobiles-link">
//               <NavLink to="/udemybuisness" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')}>
//               UdemyBuisness
//               </NavLink>
//             </div>
//           </li>
//           <li>
//             <div className='udemy'>
//             <NavLink to="/techonudemy" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
//             Teach on Udemy
//             </NavLink>
//             </div>
//           </li>

//         </ul>
       
// {/* <Addtocart/> */}

// <div className='cart'>
// <div  className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
//   <img src="https://www.vhv.rs/dpng/d/459-4593681_empty-shopping-cart-shopping-cart-icon-svg-hd.png" alt="img" style={{height:"25px", width:"25px"}} />
// </div>
// </div>


//         <button className='btnlogin btn'>Login</button>
//         <button className='btnsignup btn'>Signup</button>
    

//        </div>
//         </div>  
//     </div>
    

//     </>
//   )
// }

// export default Navbar

import React , { useState }from 'react'
import { NavLink ,Link,useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';

import "./Navbar.css";


const Navbar = () => {
  const navi =useNavigate();

  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const handletoken = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("email");
    
    navi("/")
    window.alert("Logout successfully")
    
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [isUdemyBuisnessHovered, setIsUdemyBuisnessHovered] = useState(false);
  const [isTeachOnUdemyHovered, setIsTeachOnUdemyHovered] = useState(false);

  const handleUdemyBuisnessMouseEnter = () => {
    setIsUdemyBuisnessHovered(true);
  };

  const handleUdemyBuisnessMouseLeave = () => {
    setIsUdemyBuisnessHovered(false);
  };

  const handleTeachOnUdemyMouseEnter = () => {
    setIsTeachOnUdemyHovered(true);
  };

  const handleTeachOnUdemyMouseLeave = () => {
    setIsTeachOnUdemyHovered(false);
  };

  return (
    <>

    <div className="navbar" >

    <div className="logog">
<Link to='/'>
<img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" loading="lazy"></img>
</Link>
        </div>
      
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

          {/* -------searchbar here-------- */}
          <li>
      
          <div className='searchbar'>
    <form>
    <button className='searchbtnn'> <FontAwesomeIcon icon={faSearch}  /></button>
      <input
          type="text"
          placeholder="Search for anything"
          className='search form-control'
          aria-label="Search"/>
      </form>
    </div>
    </li>
    <li>
        <div
          className="mobiles-link"
          onMouseEnter={handleUdemyBuisnessMouseEnter}
          onMouseLeave={handleUdemyBuisnessMouseLeave}
        >
          <NavLink
            className={isUdemyBuisnessHovered ? 'activeClass' : 'notactiveClass'}
          >
            UdemyBuisness
          </NavLink>
          {isUdemyBuisnessHovered && (
            <div className="hover-box">
              <p>Get your team access to over 25,000 top Udemy courses, anytime, anywhere.</p>
              <button className='try-button'>Try Udemy Business</button>
            </div>
          )}
        </div>
      </li>

      <li>
        <div
          className='udemy'
          onMouseEnter={handleTeachOnUdemyMouseEnter}
          onMouseLeave={handleTeachOnUdemyMouseLeave}
        >
          <NavLink
            to="/techonudemy"
            className={isTeachOnUdemyHovered ? 'activeClass' : 'notactiveClass'}
          >
            Teach on Udemy
          </NavLink>
          {isTeachOnUdemyHovered && (
            <div className="hover-box">
              <p>Unlock your earning potential. Reach millions of students worldwide.</p>
              <button className='try-button'>Learn More</button>
            </div>
          )}
        </div>
      </li>
            
     

        </ul>
       
{/* <Addtocart/> */}
<Link to="/addtocart">
<div className='cart'>
<div  className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
  <img src="https://www.vhv.rs/dpng/d/459-4593681_empty-shopping-cart-shopping-cart-icon-svg-hd.png" alt="img" style={{height:"25px", width:"25px"}} />
</div>
</div>
</Link>
<div className="avtar">
            {
              email ? (<Avatar className="avtar " style={{ background: "skyblue" }}>{email.split("")[0].toUpperCase()}</Avatar>) : (<Avatar className="avtar " />)
            }
          </div>

<div className="Sign_In">
        {token ? (

  <>
    <Link onClick={handletoken } ><button className='btnlogin btn' >Logout</button></Link>
  </>
) : (
 
  <Link to={"/login"} ><button className='btnlogin btn' >Login</button></Link>
)}
        </div>
       <Link to="/signup"><button className='btnsignup btn' >Signup</button></Link>
        
         {/* <div className='global' >
          <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-globe-icon-png-image_3787753.jpg" alt="I" style={{height:"30px", width:"30px"}} />
         </div> */}
        </div>



        </div>
    </div>
    

    </>
  )
}

export default Navbar
