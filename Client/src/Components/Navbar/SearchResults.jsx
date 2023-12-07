import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoFilter } from 'react-icons/io5';
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/Slice";

import { useContext } from 'react';
import {Store} from "../ContextAPI/DataStore"
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import './SearchResult.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Footer from '../Footer/Footer';

const SearchResults = () => {
    const loc = useLocation()
    const Data = loc.state.data
    const catstate = loc.state.state
    const notify = () => toast.success("Item is added to the cart");
    const notify2 = () => toast.warn("Please log in first to add to cart.")
    const [verified, setVerified] = useState(false);
  
  
    const verifyToken = () => {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
  
      // const url = "http://localhost:4000/dashboard";
      const url =" https://udemyclone-rx0k.onrender.com/dashboard";
  
  
      if (token) {
        axios
          .get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setVerified(true);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setVerified(false);
          });
      } else {
        setVerified(false);
      }
    };
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      verifyToken();
    }, []); // Empty dependency array to ensure it runs only once on mount
  
    const dispatch = useDispatch();
    // const selelct = useSelector((state) => state.cart.data);
    const [Detaildata] = useContext(Store);
    // console.log(selelct);
    
    const { id } = useParams();
  
  
    const navigate = useNavigate();
  
    const handleClick = (item) => {
      const userid = localStorage.getItem("userid");
      console.log(item.id, userid);
  
      if (verified) {
        dispatch(
          addtocart({
            user_id: userid,
            id: item.id,
            name: item.heading,
            image: item.image,
            des:item.des,
            price: item.price,
          })
        );
        notify("Item added to the cart");
      } else {
        console.log("User not verified. Please log in first.");
  
        navigate("/login"); // Navigate to the login page
      }
    };
  

    

  return (
    <>
    <div className='searchmainsection'>
        
        <h1 className='resultno'>{`${Data.length} results for "${catstate}"`}</h1>
        
        <div className="searchfilterstatic">
            <div className='searchfilterbtn'>
                <IoFilter/><span>Filter</span>
            </div>
            <div className='searchsort'>
                <div className='searchinner-sort'>
                <span>Sort by</span>
                <p>Most Popular</p>
                </div>
                <IoIosArrowDown className='searcharrowdown'/>
            </div>
        </div>

        <div className='searchmainContentParent'>

            {/* rating */}

            <div className='searchrating'>
                <h3>Ratings</h3>
                <span className='searchratingspan'>
                    <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (1,231)<br/>
                    <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,281)<br/>
                    <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,631)<br/>
                    <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,831)<br/>
                </span>
            </div>

            {/* content card */}

            <div className='searchmaincontentcard-section'>
                {
                    Data && Data.map((item,index)=>{
                        return(
                            <div key={index} className='searchmaincontentcard'>
                                <img src={item.img} />
                                <div className='searchmaincontentcard1'>
                                    <h3 className='searchheading'>{item.heading}</h3>
                                    <p className='searchmaindes'>{item.des}</p>
                                    <p className='searchmainauthor'>{item.author}</p>
                                    <h4>{`${item.rating} ⭐⭐⭐⭐⭐`}</h4>
                                    <p className='searchmaincourseDesc'>8 total .84 lectures .All Levels</p>
                                </div>
                                <h3 className='searchprice'>{"₹"+item.price}</h3>

                                <div className='searchcardhovertemplate'>
                                        <h3>{`${item.heading}`}</h3>
                                        <span>{item.author}</span>
                                        <p>{item.des}</p>
                                        {/* <div className='searchaddtocartbtn' onClick={()=>addcartitem(item)}>
                                        Add to cart
                                        </div> */}
                                         {verified ? (
                <button className="addtocartbtn" onClick={() => handleClick(item)}>
                  Add To Cart
                </button>
              ) : (
                <button
                  className="addtocartbtn"
                  onClick={() => {
                    notify2();
                    setTimeout(() => {
                      navigate("/login");
                    }, 5000); // Adjust the delay (in milliseconds) as needed
                  }}
                >
                  Add To Cart
                </button>
              )}
                                    </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>

        <ToastContainer/>

    </div>
        {/* <Footer/> */}

    </>
  )
}

export default SearchResults
