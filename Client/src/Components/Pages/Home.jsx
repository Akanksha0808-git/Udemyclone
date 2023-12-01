import React from 'react'
import Carousel1 from '../Carousels/Carousel1'
import "./Home.css"
import Carousel2 from '../Carousels/Carousel2'
import Carousel3 from '../Carousels/Carousel3'
const Home = () => {
  return (
    <div>
      <Carousel1/>
   
      {/* <div className='banner'>
      <div className='text'>
      <p>Trusted by over 15,000 companies and millions of learners around the world</p>
       </div>
     
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

      
      </div> */}
    

    <p></p>
      <div className='broad-section-courses'>
        <h2>A broad selection of courses</h2>
        <p>Choose from over 210,000 online video courses with new additions published every month</p>
       
      
       <div className='listcourses'> 
       <ul>
        <li>Python</li>
        <li>Excel</li>
        <li>Web Developement</li>
        <li>JavaScript</li>
        <li>Data Science</li>
        <li>Amazon AWS</li>
        <li>Drawing</li>

        </ul>
        </div>

        <div className='boxofcourses'>
          <div className='content'> <h2>Expand your career opportunities with Python</h2>
            <p>
            Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.
            </p></div>
           
            <button>Explore Python</button>
            <div className='courses'>
              <div></div>
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
<div className='non-students'>
  
  <div className='rightside' >
    <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="imghere" height="400px" width="400px"/>
  </div>
  <div className='nextside'>
    <h1>Become an instructor</h1>
    <p>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
    
    <button className=' getbtn'>Start Teaching Today</button>
  </div>
</div>


    </div>
  )
}

export default Home
