import React from 'react'
import Carousel1 from '../Carousels/Carousel1'
import "./Home.css"
import Carousel2 from '../Carousels/Carousel2'
import Carousel3 from '../Carousels/Carousel3'
import Footer from '../Footer/Footer'
const Home = () => {
  const data = [
    {
        id:1,
        image:"https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg",
        heading:"The Complete Python Bootcamp From Zero to Hero in Python",           
        author:"Jose Portilla",
        des:"Learn Python like a Professional  Start from the basics and go all the way to creating your own applications and games",
        rating:"4.6",
        price:3199,
    },
    {
      id:2,
      image:"https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg",
      heading:"Automate the Boring Stuff with Python Programming",           
      author:"Al Sweigart",
      des:"A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
      rating:"4.6",
      price:3199,
  },
  {
    id:3,
    image:"https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
    heading:"100 Days of Code: The Complete Python Pro Bootcamp for 2023",           
    author:"Dr. Angela Yu",
    des:"Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    rating:"4.7",
    price:3199,
},
{
  id:4,
  image:"https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
  heading:"Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",           
  author:"Kirill Eremenko",
  des:"Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
  rating:"4.5",
  price:3199,
},
{
  id:5,
  image:"https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg",
  heading:"Python for Data Science and Machine Learning Bootcamp",           
  author:"Jose Portilla",
  des:"Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!",
  rating:"4.5",
  price:3199,
},
{
  id: 306,
  category: "Design",
 image: "https://img-c.udemycdn.com/course/240x135/1754638_992f_2.jpg",
  heading: "Advanced Pattern Making",
  author: "Jennifer Taylor",
  des: "Master advanced pattern making techniques for creating unique fashion pieces.",
  rating: "4.6",
  price: 549,
 subCategory: "Fashion Design",
  
},
{
  id: 307,
  category: "Marketing",
 image: "https://img-c.udemycdn.com/course/240x135/450394_b942_8.jpg",
  heading: "Social Media Marketing Mastery",
  author: "Emily Johnson",
  des: "Master the art of social media marketing to promote businesses effectively.",
  rating: "4.5",
  price: 449,
 subCategory: "Digital Marketing",

},
{
  id: 308,
  category: "Marketing",
 image: "https://img-c.udemycdn.com/course/240x135/1710336_799c_4.jpg",
  heading: "SEO Fundamentals for Digital Marketers",
  author: "John Smith",
  des: "Learn essential SEO techniques to improve website visibility in search engines.",
  rating: "4.8",
  price: 599,
 subCategory: "Digital Marketing",

},
{
  id: 309,
  category: "Marketing",
 image: "https://img-c.udemycdn.com/course/240x135/1692684_682b.jpg",
  heading: "Email Marketing Strategies",
  author: "Jennifer Taylor",
  des: "Discover effective email marketing strategies for successful campaigns.",
  rating: "4.6",
  price: 549,
 subCategory: "Digital Marketing",

},{
  id: 310,
  category: "Marketing",
 image: "https://img-c.udemycdn.com/course/240x135/1196522_4e75_4.jpg",
  heading: "Mastering Instagram Marketing",
  author: "Emily Johnson",
  des: "Explore advanced strategies to master Instagram for marketing purposes.",
  rating: "4.5",
  price: 449,
 subCategory: "Social Media Marketing",
  
}
]
  return (
    <div>
      <Carousel1/>
   
      <div className='banner'>
     
      <p>Trusted by over 15,000 companies and millions of learners around the world</p>
 
     
       <div className='bannerimages'>
        
      <img src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg" alt="img" />
      <img src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg" alt="img" />
      <img src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg" alt="img" />
      <img src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg" alt="img" />
      <img src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg" alt="img" />
      <img src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg" alt="img" />
      <img src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg" alt="img" />
      <img src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg" alt="img" />


       </div>

      
      </div>
    

    <p></p>
   
        <div className="selectionCourse">
        <div className="slectioncourse-1">
          <div className='selectioninner'>
          <h1>A broad selection of courses</h1>
          <p className='slectioncourse-1P'>Choose from over 210,000 online video courses with new additions published every month</p>
          <div className="slectioncourse-2">
            <span className='span1'>Python</span>
            <span>Excel</span>
            {/* <span>Web Development</span> */}
            <span>JavaScript</span>
            <span>Data Science</span>
            <span>Amazon AWS</span>
            <span>Drawing</span>
          </div>
          </div>
          <div className='career1'>
            <h2>Expand your career opportunities with Python</h2>
            <p className='career1-p1'>Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. Youll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>
            <div className='explore-btn'>Explore Python</div>

            <div className='carrerCard'>

              {
                data.map((item,index)=>{
                  return(
                    <div className='carrercard1 cardmain' key={index}>
                      <img src={item.image} />
                      <h3>{item.heading}</h3>
                      <p>{item.author}</p>
                      <h4>{item.rating}<span>⭐⭐⭐⭐⭐ (486,637)</span></h4>
                      <h3>{`₹${item.price}`}</h3>
                      <div className='hovertemplate'>
                          <h3>{`${item.heading.slice(0,50)}...`}</h3>
                          <span>{item.author}</span>
                          <p>{item.des}</p>
                          <div className='addtocartbtn' onClick={()=>addcartitem(item)}>
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

        {/* <Carousel2/> */}
        <div className='topcategories'>
          <h2>Top categories</h2>
          <div className='cardsline1'>
            <div><img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" alt="" /><h3>Design</h3></div>
            <div><img src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" alt="" /><h3>Development</h3></div>
            <div><img src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" alt="" /><h3>Marketing</h3></div>
            <div><img src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" alt="" /><h3>IT and Software</h3></div>

          </div>
          <div className='cardsline2'>
            <div><img src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" alt="" /><h3>Personal Developement</h3></div>
            <div><img src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" alt="" /><h3>Buisness</h3></div>
            <div><img src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" alt="" /><h3>Photography</h3></div>
            <div><img src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg" alt="" /><h3>Music</h3></div>

          </div>

        </div>

<div className='non-students'>
  <div className='leftside'>
    <div className='logo'><img src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="" height="32px" width="192px" /></div>
    <h1>Upskill your team with <br /> Udemy Business</h1>
    <ul>
      <li>Unlimited access to 25,000+ top Udemy <br /> courses, anytime, anywhere</li>
      <li>International course collection in 14 <br /> languages</li>
      <li>Top certifications in tech and business</li>

    </ul>
    <button className=' getbtn'>Get Udemy Buisness</button>
    <button className=' learnbtn'>Learn more</button>
  </div>
  <div className='rightside' >
    <img src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg" alt="imghere" height="400px" width="400px"/>
  </div>
</div>
<Carousel3/>
{/* -------------------------------------------------- */}
<div className='non-student'>
  
  <div className='rightside' >
    <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="imghere" height="400px" width="400px"/>
  </div>
  <div className='nextside'>
    <h1>Become an instructor</h1>
    <p>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
    
    <button className=' getbtn'>Start Teaching Today</button>
  </div>
</div>

{/* <Footer/> */}

    </div>
  )
}

export default Home
