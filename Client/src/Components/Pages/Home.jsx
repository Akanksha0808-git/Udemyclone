import React from 'react'
import Carousel1 from '../Carousels/Carousel1'
import "./Home.css"
import Carousel2 from '../Carousels/Carousel2'
const Home = () => {
  return (
    <div>
      <Carousel1/>
   
      <div className='banner'>
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

      
      </div>
    

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

        <Carousel2/>
    </div>
  )
}

export default Home
