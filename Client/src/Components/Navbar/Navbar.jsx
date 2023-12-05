import React , { useState }from 'react'
import { NavLink ,Link,useNavigate} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IoMdMenu } from "react-icons/io";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from "react-icons/io";
// import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';

import "./Navbar.css";


const Navbar = () => {
  const category = ["Business","Finance & Accounting","IT & Software","Design","Marketing","Life Style","Photography & Video","Music & Arts","Health & Fitness","Teaching & Academic"]
  const subcategory = [
    {
      category:"Business",
      content:["Communication","Managements","Business Strategy","Operations","Human Resources"]
    },
    {
      category:"Finance & Accounting",
      content:["Accounting & Bookkeeping","Compliance","Economic","Finance","Taxes"]
    },
    {
      category:"IT & Software",
      content:["IT Certification","Network & Security","Hardware","Operating system & Servers","Other IT & Software"]
    },
    {
      category:"Design",
      content:["Web Design","Game Design","3D & Animation","Fashion Design","Other Design"]
    },
    {
      category:"Marketing",
      content:["Digital Marketing","Social Media Marketing","Public Relationship","Content Marketing","Product Marketing"]
    },
    {
      category:"Life Style",
      content:["Arts & Crafts","Beauty & Makeup","Food & Beverage","Pet Care & Training","Travel"]
    },
    {
      category:"Photography & Video",
      content:["Digital Photography","Photography","Video Design","Commercial Photography","Photography Tools"]
    },
    {
      category:"Music & Arts",
      content:["Instruments","Music Production","Vocal","Music Software","Music Techniques"]
    },
    {
      category:"Health & Fitness",
      content:["Fitness","Sport","Yoga","Menatl Health","Dance"]
    },
    {
      category:"Teaching & Academic",
      content:["Engineering","Math","Science","Socal Science","Teacher Training"]
    }
  ]
  const navi =useNavigate();

  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const name=localStorage.getItem("name")
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
  const[val,setVal]=useState(true)
  const[side,setSide] =useState(true)

  const handleclick = ()=>{
    setVal(!val)
  }

  const sideclick = ()=>{
    setSide(!side)
  }
  const [searchval,setsearchVal] = useState("")
  const searchhandle = (e)=>{
    setsearchVal(
      e.target.value)
  }

  const[searchdata,setsearchdata] = useState()


  const searcclean = ()=>{
    setsearchVal('')
    console.log(searchdata);
    navi("/searchcomp", {state:{state:searchval,data:searchdata}})
  }
  const[searchbtnval,setSearchbtnval] = useState(false)

  const searchbtnclick = ()=>{
    setSearchbtnval(!searchbtnval)
  }

  return (
    <>

    <div className="Navhead" >
    <div onClick={handleclick} className='menuicon'>
     <IoMdMenu/>
      </div>
<div className="logo" onClick={()=>navi('/')}>

<img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" loading="lazy"></img>

</div>
          <div className='category'>
      <p>Categories</p>
        <div className='categoryList'>
          <div className='innercategoryconatiner'>
          {
            category.map((item,index)=>{
              return(
                <div key={index} className='subcategorylist'>
                <p className='sublist'>
                  <NavLink to={`/course/${item}`} state={subcategory}>
                  {item}
                  </NavLink>
                </p>
                <div className='greatericon'> 
                <i class="fa-solid fa-greater-than"></i></div>
                <div className='subcategory-InnerList'>
                  {
                    subcategory[index].content.map((item,subindex)=>{
                      return(
                        <p key={subindex}>
                          <NavLink to={`/course/${subcategory[index].category}/${item}`} state={subcategory} >
                            {item}
                          </NavLink>
                        </p>
                      )
                    })
                  }
                </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
            
          {/* </li> */}

          {/* -------searchbar here-------- */}
      
   <div className='Navsearch'>
    
    <label htmlFor='serchbtn' className='navlabel' > <FontAwesomeIcon icon={faSearch}  className='searchicon' /></label>
    {/* <FontAwesomeIcon icon={faSearch}  className='searchicon' /> */}
      <input id='serchbtn' 
       name="search" 
      //  value={searchval}
          type="text"
          placeholder="Search for anything"
          className='search form-control'
          aria-label="Search"/>
      
    </div>
    {/* mobile search  */}
    <div className='mobilesearchicon'  onClick={searchbtnclick}>
    <FontAwesomeIcon icon={faSearch}  className='searchicon' /> 
      </div>

      {
        searchbtnval ? 
        <div className='mobilesearchsection'>
          <div className='mobilesearch'>
          <label htmlFor='serchbtn' className='navlabel' 
          // onClick={()=>{searcclean(),searchbtnclick()}} 
          >
           <FontAwesomeIcon icon={faSearch}  className='searchicon' />
           </label>
          <input id='serchbtn' type='text' name="search" value={searchval} placeholder='Search for anything' onChange={searchhandle} />
          </div> 
        </div>
      : " "
      }


<div className='navflex tech'>
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
        </div>    
     

       
{/* <Addtocart/> */}
<Link to="/addtocart">
<div className='cart'>
<div  className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
  <img src="https://www.vhv.rs/dpng/d/459-4593681_empty-shopping-cart-shopping-cart-icon-svg-hd.png" alt="img" style={{height:"25px", width:"25px"}} />
</div>
</div>
</Link>

{
  token ?
  <div className='afterloginshow loginshow'>
          
          <p className='mylearning' onClick={()=>navi("/mylearning")}>My Learning</p>

          <div className='dropshowhover'>
          <div className="avtar">
            {
              email ? (<Avatar className="avtar " style={{ background: "skyblue" }}>{email.split("")[0].toUpperCase()}</Avatar>) : (<Avatar className="avtar " />)
            }
          </div>
            

            <div className="hangdroplogin">
              <div className='logindrop'>
                <div className='showemail'>

                <div className="avtar">
            {
              email ? (<Avatar className="avtar " style={{ background: "skyblue" }}>{email.split("")[0].toUpperCase()}</Avatar>) : (<Avatar className="avtar " />)
            }
          </div>
          <p>{email}</p>

          </div>

          <hr/>

                <div className='logindrop2'>
                <p onClick={()=>navi("/mylearning")}>My Learning</p>

                <p onClick={()=>navi("/addtocart")}>My Cart</p>
                <p onClick={handletoken}>Logout</p>
                </div>
              </div>
            </div>

          </div>
          
        </div>
        :

<div className="Sign_In">
       
  <Link to={"/login"} ><button className='btnlogin btn' >Login</button></Link>
       <Link to="/signup"><button className='btnsignup btn' >Signup</button></Link>
       </div>

  }
 {/* </div> */}

    </div>
     {/* sidebar mobile view */}

     {
          val ? " " 
          : 
            <div className="backgrounblur">

            <div className='sidebar'>
                {/* /close */}
                <div onClick={handleclick} className='close'>
                  <IoMdClose style={{fontSize:"25px"}}/>
                </div>

              {/* btn */}
                {
                  token ?
                  <div className='sidebarloginsection'>
                     <div className="avtar">
            {
              email ? (<Avatar className="avtar " style={{ background: "skyblue" }}>{email.split("")[0].toUpperCase()}</Avatar>) : (<Avatar className="avtar " />)
            }
          </div>
                    <div className='sidebarloginsection1'>
                      <p className='sidelogoName'>{name}</p>
                      <p>{`${email.slice(0,15)}`}</p>
                      <div className='sidelogout'>
                      <p onClick={handletoken}>Log Out</p>
                      <p className='' onClick={()=>{navi("/mylearning"),handleclick()}}>My Learning</p>
                      </div>
                    </div>
                  </div>
                  :<div className='sidebar-btn'>
                  <p onClick={()=>{
                    navi("/login"),
                    handleclick()
                  } }>Log in</p>
                  <p onClick={()=>{
                    navi("/signup"),
                    handleclick()
                  }}>Sign up</p>
                </div>
                }


                {/* all category */}

                <div className='sidebar-allcategory-container'>
                  <h3>All Categories</h3>

                  <div className='categoryList'>
                  <div className='innercategoryconatiner'>
                  {
                    category.map((item,index)=>{
                      return(
                        <div key={index} className='subcategorylist'>
                        <p className='sublist'>
                          <NavLink to={`/course/${item}`} state={subcategory}>
                          {item}
                          </NavLink>
                        </p>
                        {/* <LiaGreaterThanSolid className='greatericon'/> */}
                        <div className='subcategory-InnerList'>
                          {
                            subcategory[index].content.map((item,subindex)=>{
                              return(
                                <p key={subindex}>
                                  <NavLink to={`/course/${subcategory[index].category}/${item}`} state={subcategory} onClick={()=>handleclick()} >
                                    {item}
                                  </NavLink>
                                </p>
                              )
                            })
                          }
                        </div>
                        </div>
                      )
                    })
                  }
                  </div>
                </div>
                      
                </div>

                <div className='side-tech'>
                  <p className='side-tech-head'>More from Udemy</p>
                
                  <div className='side-conent' onClick={()=>navi("/techonudemy")}>
                    <p>Tech on Udemy</p>
                  </div>
                </div>

              </div>

            </div>
        }  


    </>
  )
}

export default Navbar

