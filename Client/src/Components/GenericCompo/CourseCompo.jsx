import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/Slice";
import { IoIosInformationCircle } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import "./CourseCompo.css"
import { useContext } from 'react';
import {Store} from "../ContextAPI/DataStore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Footer from '../Footer/Footer';

const CourseComp = () => {
    const params = useParams()
    console.log(params.category);
    const loc = useLocation()
    const sub = loc.state
    const filter = sub.filter(item=> params.category === item.category) 
    const content = filter[0].content
    const Nav = useNavigate()

    

    const businessPopular_Topics = [
        {
            category:"Business",
            content:["PMI Project Management Professional(PMP)","Project Management","Data Modeling","Business Analysis","Real Estate Investing","Microsoft Power BI","SQl","PMI PMBOK","Data Analysis","Product Management"],
        },
        {
            category:"Finance & Accounting",
            content:["Stock Trading","Financial Analysis","Accounting","Investing","Forex Trading","Technical Analysis (finance)","Cryptocurrency","Financial Modeling","Algorithmic Trading","Options Trading"],
        },
        {
            category:"IT & Software",
            content:["AWS Certified Cloud Practitioner","Ethical Hackin","CompTIA A+","AWS Certified Solutions Architect - Associate","Amazon AWS","CompTIA Security+","Linux","Kubernetes","ChatGPT","Information Security"],
        },
        {
            category:"Design",
            content:["Blender","Graphic Design","User Experience Design","Adobe Photoshop","3D Modeling","Figma","Adobe Illustrator","Drawing","AutoCAD","Canva"],
        },
        {
            category:"Marketing",
            content:["Digital Marketing","Social Media Marketing","Facebook Ads","Marketing Strategy","Search Engine Optimization (SEO)","Google Ads (Adwords)","Instagram Marketing","Copywriting","ChatGPT","Facebook Marketing"],
        },
        {
            category:"Life Style",
            content:["Reiki","Energy Healing","Chess","Watercolor Painting","Watercolor Painting","Watercolor Painting","Hypnotherapy","Spiritual Healing","Astrology","Painting"],
        },
        {
            category:"Photography & Video",
            content:["Photography","Adobe Premiere","DaVinci Resolve","iPhone Photography","Video Editing","Video Production","Adobe Lightroom","Adobe After Effects","Adobe Photoshop","Filmmaking"],
        },
        {
            category:"Music & Arts",
            content:["Guitar","Music Production","Singing","Piano","Music Theory","Music Composition","FL Studio","DJ","Logic Pro","Songwriting"],
        },
        {
            category:"Health & Fitness",
            content:["Yoga","Nutrition","CBT Cognitive Behavioral Therapy","Meditation","Massage","Fitness","Herbalism","Qi Gong","Pilates","Holistic Medicine"],
        },
        {
            category:"Teaching & Academic",
            content:["Holistic Medicine","Math","Spanish Language","French Language","German Language","English Grammar","IELTS","Calculus","Statistics","Algebra"],
        },
    ];

    const filterpoptop = businessPopular_Topics.filter(item=> item.category === params.category)
    // console.log(filterpoptop);


    const businessPopular_instutor = [
        {
            img:"https://img-c.udemycdn.com/user/75x75/4897424_a25c_11.jpg",
            heading:"TIA Education, Andrew Ramdayal",
            des:"PMI Project Management Professional (PMP), PMI PMBOK",
            rating:4.7,
            stuNum:"310,635",
            courseNo:18,
            category:"Business"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/75004102_f8b0_2.jpg",
            heading:"Maven Analytics",
            des:"Business Intelligence, Microsoft Power BI",
            rating:4.7,
            stuNum:"1,121,614",
            courseNo:38,
            category:"Business"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/8280056_7887_3.jpg",
            heading:"365 Careers",
            des:"Data Analysis, Agile",
            rating:4.7,
            stuNum:"2,623,082",
            courseNo:106,
            category:"Business"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/8912846_1a61.jpg",
            heading:"Joseph Phillips",
            des:"PMI PMBOK, PMI Project Management Professional (PMP)",
            rating:4.7,
            stuNum:"766,529",
            courseNo:38,
            category:"Business"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/8280056_7887_3.jpg",
            heading:"365 Careers",
            des:"Data Analysis, Agile",
            rating:4.7,
            stuNum:"2,623,082",
            courseNo:108,
            category:"Finance & Accounting"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/33900490_19da_2.jpg",
            heading:"Mohsen Hassan",
            des:"Stock Trading, Financial Trading",
            rating:4.6,
            stuNum:"373,818",
            courseNo:11,
            category:"Finance & Accounting"
        },
        {
            img:"ttps://img-c.udemycdn.com/user/75x75/10634862_fb77.jpg",
            heading:"Steve Ballinger, MBA",
            des:"Stock Trading, Investing",
            rating:4.5,
            stuNum:"605,848",
            courseNo:68,
            category:"Finance & Accounting"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/14942868_3ed6_38.jpg",
            heading:"Chris Haroun | 1.4 Million Students",
            des:"Investing, Finance Fundamentals",
            rating:4.6,
            stuNum:"1,406,078",
            courseNo:76,
            category:"Finance & Accounting"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/16122994_284f_18.jpg",
            heading:"Stephane Maarek | AWS Certified Cloud Practitioner",
            des:"Amazon AWS, AWS Certified Cloud Practitioner",
            rating:4.7,
            stuNum:"2,276,158",
            courseNo:64,
            category:"IT & Software"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/27592028_e3fb_6.jpg",
            heading:"Jason Dion • 1 Million+ Enrollments Worldwide",
            des:"CompTIA Security+, CompTIA A+",
            rating:4.6,
            stuNum:"938,858",
            courseNo:60,
            category:"IT & Software"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/31303958_8529_3.jpg",
            heading:"Mumshad Mannambeth",
            des:"Kubernetes, Certified Kubernetes Administrator (CKA)",
            rating:4.6,
            stuNum:"929,236",
            courseNo:18,
            category:"IT & Software"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/58935_f800_5.jpg",
            heading:"Scott Duffy  • 1.000.000+ Students",
            des:"Microsoft Azure, AZ-900: Microsoft Azure Fundamentals",
            rating:4.6,
            stuNum:"1,055,033",
            courseNo:60,
            category:"IT & Software"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/11614232_b0fc.jpg",
            heading:"Daniel Walter Scott",
            des:"User Experience Design, Figma",
            rating:4.7,
            stuNum:"696,429",
            courseNo:34,
            category:"Design"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/16146540_ef4c_15.jpg",
            heading:"Lindsay Marsh",
            des:"Graphic Design, Adobe Illustrator",
            rating:4.6,
            stuNum:"367,114",
            courseNo:13,
            category:"Design"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/38516954_b11c_3.jpg",
            heading:"Andrei Neagoie",
            des:"User Experience Design, Mobile App Design",
            rating:4.6,
            stuNum:"1,123,305",
            courseNo:25,
            category:"Design"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/33027212_4271_10.jpg",
            heading:"GameDev.tv Team",
            des:"Blender, Game Development Fundamentals",
            rating:4.7,
            stuNum:"1,090,600",
            courseNo:52,
            category:"Design"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/36921905_7a32_6.jpg",
            heading:"Robin & Jesper",
            des:"Digital Marketing, Social Media Marketing",
            rating:4.6,
            stuNum:"320,368",
            courseNo:24,
            category:"Marketing"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/37939456_be61_5.jpg",
            heading:"Joshua George",
            des:"Search Engine Optimization (SEO), Link Building",
            rating:4.7,
            stuNum:"137,081",
            courseNo:22,
            category:"Marketing"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/4116740_b790_2.jpg",
            heading:"Alex Genadinik",
            des:"Search Engine Optimization (SEO), SEO Audit",
            rating:4.5,
            stuNum:"759,588",
            courseNo:197,
            category:"Marketing"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/10508972_337e_4.jpg",
            heading:"COURSE ENVY",
            des:"Marketing Strategy, Facebook Marketing",
            rating:4.4,
            stuNum:"522,970",
            courseNo:29,
            category:"Marketing"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/34229724_ec2e_3.jpg",
            heading:"Graham Nicholls",
            des:"Neuro-Linguistic Programming, EFT (Emotional Freedom Techniques)",
            rating:4.7,
            stuNum:"136,812",
            courseNo:37,
            category:"Life Style"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/27988174_e5c2.jpg",
            heading:"Brent Eviston",
            des:"Drawing, Sketching",
            rating:4.8,
            stuNum:"110,700",
            courseNo:12,
            category:"Life Style"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/779778_4469_3.jpg",
            heading:"Lisa Powers",
            des:"Reiki, Teacher Training",
            rating:4.8,
            stuNum:"226,687",
            courseNo:5,
            category:"Life Style"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/23121946_3025_4.jpg",
            heading:"Melissa Crowhurst",
            des:"Energy Healing, Spiritual Healing",
            rating:4.8,
            stuNum:"199,278",
            courseNo:21,
            category:"Life Style"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/317821_3cb5_10.jpg",
            heading:"Phil Ebiner",
            des:"Photography, Digital Photography",
            rating:4.6,
            stuNum:"2,862,770",
            courseNo:222,
            category:"Photography & Video"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/15601054_5545_28.jpg",
            heading:"Louay Zambarakji",
            des:"Video Editing, Color Grading",
            rating:4.7,
            stuNum:"420,091",
            courseNo:18,
            category:"Photography & Video"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/130091392_74a0_2.jpg",
            heading:"Dan Britain",
            des:"Video Editing, ChatGPT",
            rating:4.5,
            stuNum:"165,755",
            courseNo:10,
            category:"Photography & Video"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/37232048_8e49.jpg",
            heading:"Dale McManus",
            des:"Photography, Landscape Photography",
            rating:4.6,
            stuNum:"136,039",
            courseNo:5,
            category:"Photography & Video"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/913001_767b_4.jpg",
            heading:"Jason Allen",
            des:"Music Theory, Ableton Live",
            rating:4.6,
            stuNum:"283,539",
            courseNo:117,
            category:"Music & Arts"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/23566298_e66f_4.jpg",
            heading:"Tomas George",
            des:"Music Production, Music Mixing",
            rating:4.6,
            stuNum:"327,888",
            courseNo:40,
            category:"Music & Arts"
        },
        {
            img:"ttps://img-c.udemycdn.com/user/75x75/5753906_1b3f_4.jpg",
            heading:"Robin Hall",
            des:"Piano, Keyboard Instrument",
            rating:4.7,
            stuNum:"413,402",
            courseNo:5,
            category:"Music & Arts"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/603974_a5c2_4.jpg",
            heading:"Erich Andreas",
            des:"Guitar, Acoustic Guitar",
            rating:4.7,
            stuNum:"405,813",
            courseNo:20,
            category:"Music & Arts"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/7240640_bf4c_2.jpg",
            heading:"Mark Perren-Jones",
            des:"Massage, Sports Massage",
            rating:4.7,
            stuNum:"221,529",
            courseNo:77,
            category:"Health & Fitness"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/21674826_0b4e_2.jpg",
            heading:"Bodsphere - Health and Wellness",
            des:"Yoga, Pranayama",
            rating:4.8,
            stuNum:"28,840",
            courseNo:9,
            category:"Health & Fitness"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/61192080_163c_4.jpg",
            heading:"Michael Eric Everson",
            des:"Massage, Sports Massage",
            rating:4.7,
            stuNum:"20,556",
            courseNo:28,
            category:"Health & Fitness"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/26801218_cefd_3.jpg",
            heading:"Felix Harder",
            des:"Fitness, Nutrition",
            rating:4.6,
            stuNum:"212,337",
            courseNo:37,
            category:"Health & Fitness"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/133884918_c87f.jpg",
            heading:"Linguae Learning",
            des:"Spanish Language, French Language",
            rating:4.6,
            stuNum:"402,978",
            courseNo:32,
            category:"Teaching & Academic"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/633228_a6b9_12.jpg",
            heading:"Krista King",
            des:"Calculus, Probability",
            rating:4.7,
            stuNum:"241,048",
            courseNo:20,
            category:"Teaching & Academic"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/403134_2c7a_5.jpg",
            heading:"Keino Campbell, Esq.",
            des:"IELTS, TOEFL",
            rating:4.6,
            stuNum:"398,752",
            courseNo:12,
            category:"Teaching & Academic"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/16912784_49c6_3.jpg",
            heading:"Sandra 11Percent",
            des:"German Language, Presentation Skills",
            rating:4.7,
            stuNum:"110,054",
            courseNo:7,
            category:"Teaching & Academic"
        },
    ]

    const [Data] = useContext(Store)
    console.log(Data);

    const cardData = Data && Data.filter(item=> params.category === item.category )
    console.log(cardData);
    
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
    <div>

        {/* subroutes */}

        <div className='navCourse'>
            <h3>{params.category}</h3><span></span>
            {/* category list */}
            <div className='courseComp-flex'>
                {
                    content.map((item,index)=>{
                        return(
                            <p key={index}>
                                <Link className='link' to={`/course/${params.category}/${item}`} state={sub}>
                                {item}
                                </Link>
                            </p>
                        )
                    })
                }
            </div>
        </div>

        {/* content  */}

        <div className="main-outter-parent-container">

        <div className="contant-comp">
            
            <h1 className='course-heading'>{`${params.category} Courses`}</h1>

            <h2>Courses to get you started</h2>

            {/* content most popular */}
            <div className="popular-parent">
            <div className='popularhead'>
            <p className='mpopular'>Most popular</p>
            </div>
            <div className='card-conatiner'>
            {/* cards */}
            {
                cardData.filter(item=>{
                    if (item.id%3 === 0) {
                        return item
                    }
                }).map((item,index)=>{
                    if(index < 4)
                    {
                    return(
                        <div key={index} className='cardmain'>
                            <img src={item.image} />
                            <h3>{item.heading}</h3>
                            <p>{item.author}</p>
                            <p>{`${item.rating} ⭐⭐⭐⭐⭐`}</p>
                            <h3>{`₹${item.price}`}</h3>

                            <div className='hovertemplate'>
                                <h3>{`${item.heading.slice(0,50)}...`}</h3>
                                <span>{item.author}</span>
                                <p>{item.des}</p>
                                {/* <div className='addtocartbtn' onClick={()=>addcartitem(item)} >
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
                    }
                })
            }
            </div>
            </div>

            {/* popular topics */}
            <h2>Popular Topics</h2>
            <div className='popularTopics'>
                {
                    filterpoptop[0].content.map((item,index)=>{
                        return(
                            <div key={index} className='pt-inner'>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>

            {/* Popular instutor */}

            <h2>Popular Instructor</h2>
            <div className="popular-inst">
                {
                    businessPopular_instutor.filter(item=>item.category === params.category).map((item,index)=>{
                        return(
                            <div key={index} className='inst-inner'>
                                <img src={item.img} />
                                <div className='inst-row'>
                                    <h3>{item.heading}</h3>
                                    <p className='p1'>{item.des}</p>
                                    <p className='p2'><span>{item.rating}</span> ⭐ Instructor Rating</p>
                                    <h4>{item.stuNum} <span>students</span></h4>
                                    <h4>{item.courseNo} <span>courses</span></h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* all business courses */}

            <h2>{`All ${params.category} courses`}</h2>

            {/* info */}
            <div className='info'>
                <IoIosInformationCircle className='infoicon'/><h3>Not sure? All courses have a 30-day money-back guarantee</h3>
            </div>

            {/* filter */}

            <div className="filterstatic">
                <div className='filterbtn'>
                    <IoFilter/><span>Filter</span>
                </div>
                <div className='sort'>
                    <div className='inner-sort'>
                    <span>Sort by</span>
                    <p>Most Popular</p>
                    </div>
                    <IoIosArrowDown className='arrowdown'/>
                </div>
            </div>

            {/* main contents */}

            <div className='mainContentParent'>

                {/* rating */}

                <div className='rating'>
                    <h3>Ratings</h3>
                    <span className='ratingspan'>
                        <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (1,231)<br/>
                        <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,281)<br/>
                        <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,631)<br/>
                        <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,831)<br/>
                    </span>
                </div>

                {/* content card */}

                <div className='maincontentsection'>
                    {
                        cardData.filter(item=>{
                            if (item.id%2 === 0) {
                                return item
                            }
                        }).slice(0,3).map((item,index)=>{
                            return(
                                <div key={index} className='maincontentcard'>
                                    <img src={item.image} />
                                    <div>
                                        <h3>{item.heading}</h3>
                                        <p className='maindes'>{item.des}</p>
                                        <p className='mainauthor'>{item.author}</p>
                                        <h3>{`${item.rating} ⭐⭐⭐⭐⭐`}</h3>
                                        <p className='maincourseDesc'>8 total .84 lectures .All Levels</p>
                                    </div>
                                    <h3>{"₹"+item.price}</h3>

                                    <div className='maincardhovertemplate'>
                                        <h3>{`${item.heading.slice(0,50)}...`}</h3>
                                        <span>{item.author}</span>
                                        <p>{item.des}</p>
                                        {/* <div className='mainaddtocartbtn' onClick={()=>addcartitem(item)}>
                                        Add to cart
                                        </div> */}
                                         {verified ? (
                <button className="mainaddtocartbtn" onClick={() => handleClick(item)}>
                  Add To Cart
                </button>
              ) : (
                <button
                  className="mainaddtocartbtn"
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
                    {/* <img className='maincontentimg' src={ss} /> */}
                    {
                        cardData.filter(item=>{
                            if (item.id%2 === 0) {
                                return item
                            }
                        }).slice(3,8).map((item,index)=>{
                            return(
                                <div key={index} className='maincontentcard'>
                                    <img src={item.image} />
                                    <div>
                                        <h3>{item.heading}</h3>
                                        <p className='maindes'>{item.des}</p>
                                        <p className='mainauthor'>{item.author}</p>
                                        <h3>{`${item.rating} ⭐⭐⭐⭐⭐`}</h3>
                                        <p className='maincourseDesc'>8 total .84 lectures .All Levels</p>
                                    </div>
                                    <h3>{"₹"+item.price}</h3>

                                    <div className='maincardhovertemplate'>
                                        <h3>{`${item.heading.slice(0,50)}...`}</h3>
                                        <span>{item.author}</span>
                                        <p>{item.des}</p>
                                        <div className='mainaddtocartbtn' onClick={()=>addcartitem(item)}>
                                        Add to cart
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>


            </div>

         </div>
            
        </div> 
        <ToastContainer/>
    </div>
  )
}

export default CourseComp