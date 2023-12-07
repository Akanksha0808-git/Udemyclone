import React , { useState, useEffect }from 'react'
import { NavLink ,Link,useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import '@fortawesome/fontawesome-free/css/all.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IoMdMenu } from "react-icons/io";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IoMdClose } from "react-icons/io";
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
  
  const[val,setVal]=useState(true)
  const[side,setSide] =useState(true)

  const handleclick = ()=>{
    setVal(!val)
  }

  const sideclick = ()=>{
    setSide(!side)
  }
  

  const [name, setname] = useState("");
  
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
  

  useEffect(()=>{
    axios.get(`https://udemyclone-api.onrender.com/api/search?searchval=${searchval}`).then((res)=>{
      setsearchdata(res.data);
    }).catch((err)=>console.log("Search Api error" , err))
  },[searcclean])

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
                {/* <i class="fa-solid fa-greater-than"></i> */}
                </div>
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
      
      <div className='Navsearch'>
        <label htmlFor='serchbtn' className='navlabel' onClick={searcclean} ><FontAwesomeIcon icon={faSearch} className='searchicon'/></label>
        <input id='serchbtn' type='text' name="search" value={searchval} placeholder='Search for anything' onChange={searchhandle} />
      </div>


      {/* mobile search  */}
      <div className='mobilesearchicon'  onClick={searchbtnclick}>
      <FontAwesomeIcon icon={faSearch}  className='searchicon' /> 
      </div>

      {
        searchbtnval ? 
        <div className='mobilesearchsection'>
          <div className='mobilesearch'>
          <label htmlFor='serchbtn' className='navlabel' onClick={()=>{searcclean(),searchbtnclick()}} ><FontAwesomeIcon icon={faSearch} className='searchicon'/></label>
          <input id='serchbtn' type='text' name="search" value={searchval} placeholder='Search for anything' onChange={searchhandle} />
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
              email ? (<Avatar className="avtar " style={{ background: "black" }}>{email.split("")[0].toUpperCase()}</Avatar>) : (<Avatar className="avtar " />)
            }
          </div>
            

            <div className="hangdroplogin">
              <div className='logindrop'>
                <div className='showemail'>

                <div className="avtar">
            {
              email ? (<Avatar className="avtar " style={{ background: "black" }}>{email.split("")[0].toUpperCase()}</Avatar>) : (<Avatar className="avtar " />)
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








