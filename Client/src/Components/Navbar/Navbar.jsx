import React , { useState, useEffect }from 'react'
import { NavLink ,Link,useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";

import '@fortawesome/fontawesome-free/css/all.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IoMdMenu } from "react-icons/io";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from "react-icons/io";
// import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';
import axios from "axios";

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
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");
  const filteredItems = select.filter((item) => item.user_id === userid);
  const navi =useNavigate();

  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  // const name=localStorage.getItem("name")
  const handletoken = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("email");
    
    navi("/")
    // window.alert("Logout successfully")
    
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

  const [name, setname] = useState("");
  const [data1, setdata] = useState([]);
  const url ="https://udemyclone-rx0k.onrender.com/search";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (name === "") {
          setdata([]);
          return;
        }

        const response = await axios.post( url , {
          search: name,
        });
         console.log(response.data.data) 
       await  setdata(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [name]);

  const handleChange = (e) => {
    // e.preventDefault();
    setname(e.target.value);

  };

  const handleSubmit = (e) => {
    setname(e.target.value);

  };

  const handleLinkClick = () => {
    // Reset the name state to an empty string when a link is clicked
    setname("");
      // Reset the data1 state to an empty array when a link is clicked
  setdata([]);
    window.scroll(0, 0)
  };

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
            
    

          {/* -------searchbar here-------- */}
      
   <div className='Navsearch parentbox'>
    
    <label htmlFor='serchbtn' className='navlabel' onClick={handleSubmit} > <FontAwesomeIcon icon={faSearch}  className='searchicon' /></label>
      <input id='serchbtn' 
       name="search" 
       value={name}
          type="text"
          onChange={handleChange}
          placeholder="Search for anything"
          className='search form-control'
          aria-label="Search"/>
      
    </div>
    <div className="list">
        {data1.length >0 ? (
          <ul>
            {data1.slice(0, 10).map((item, index) => (
              <Link
                        to={"/course/" + item.id }
                        onClick={handleLinkClick}
                        key={index}
                      >
              <li key={index}>{item.heading}</li>
              </Link>
              // <li key={index}>{item.heading}</li>

            ))}
          </ul>
        ) : (
         null
        )}
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
          <input id='serchbtn' type='text' name="search"
          
          // value={searchval}
           placeholder='Search for anything' onChange={searchhandle} />
          </div> 
          <div className="list">
        {data1.length >0 ? (
          <ul>
            {data1.slice(0, 10).map((item, index) => (
              <Link
                        to={"/detailpage/" + item.id }
                        onClick={handleLinkClick}
                        key={index}
                      >
              <li key={index}>{item.heading}</li>
              </Link>

            ))}
          </ul>
        ) : (
         null
        )}
      </div>
        </div>
        
      : " "
      }



         <div className='navflex tech'>
      <div className='udemybussiness'>
        <p>Udemy Business</p>
        <div className='hoverBlock1' >
          <p>Get your team access to over 25,000 top Udemy courses, anytime, anywhere.</p>
          <div className='hoverBlock1-btn1'>Try Udemy Business</div>
        </div>

      </div>
      <div className='udemytech'>
        <p onClick={()=>navi("techonudemy")}>Tech on Udemy</p>
        <div className='hoverBlock2'>
          <p>Turn what you know into an opportunity and reach millions around the world.</p>
          <div className='hoverBlock1-btn1' onClick={()=>navi("techonudemy")}>Learn More</div>
        </div>
      </div>
      </div>
     

       
{/* <Addtocart/> */}

 <div className='cart'>
          <Link to={"/addtocart"}>
           
          {
              filteredItems.length ? (<Badge badgeContent={filteredItems.length} color="primary">
                <ShoppingCartIcon id="icon" />
              </Badge>)
                :
                (<Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>)
            }
            
          </Link>
        </div>

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

        <div className='navflex navbtn'>
        <div className='navbtn signin'>
          <p onClick={()=>navi('/login')}>Log in</p>
        </div>
        <div className='navbtn singup'>
          <p onClick={()=>navi('signup')}>Sign up</p>
        </div>
       
      </div>

  }
 {/* </div> */}

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


                {/* Side bar all category */}

                <div className='sidebar-allcategory-container'>
                  <h3>All Categories</h3>
<hr />
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

</div>

    </>
  )
}

export default Navbar

