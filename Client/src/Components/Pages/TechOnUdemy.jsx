import React from 'react'
import "./TechOnUdemy.css"
import Footer from "../Footer/Footer"
const TechOnUdemy = () => {
  return (
    <div>
   <div className='billboard'>
    
   
   <div className='img'>
   <img src="https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg" alt="" />
   </div>
   <div className='parentextbox'>
    <div className='textbox'>
    <h1>Come teach <br /> with us</h1>
    <p>Become an instructor and change <br /> lives — including your own</p>
    <button className='getstarted'>Get started</button>
   </div>
    </div>
    </div>

{/* teach-page-container */}
<div className='teach-page-container'>
  <h2 className='teach-page-heading'>So many reasons to start</h2>
  <div className='why-udemy'>
    <div className='why'>
      <div className='whyimg'><img src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg" alt="" /></div>
      <div className='whyhead'> <h2>Teach your way</h2></div>
    <div className='why-text'> Publish the course you want, in the way you want, and always have control of your own content.</div>
    </div>
    <div className='why'>
      <div className='whyimg'><img src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg" alt="" /></div>
      <div className='whyhead'>
      <h2>Teach your way</h2>  </div>
    <div className='why-text'> Publish the course you want, in the way you want, and always have control of your own content.</div>
    </div>
    <div className='why'>
      <div className='whyimg'><img src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg" alt="" /></div>
      <div className='whyhead'> <h2>Teach your way</h2></div>
    <div className='why-text'> Publish the course you want, in the way you want, and always have control of your own content.</div>
    </div>
  </div>
 
</div>

{/* veiws */}

<div className='veiws-card'>
<div className='views'>
  <h1>62M</h1>
  <h3>Students</h3>
</div>
<div className='views'>
  <h1>75+</h1>
  <h3>Languages</h3>
</div><div className='views'>
  <h1>830M</h1>
  <h3>Enrollement</h3>
</div>
<div className='views'>
  <h1>180+</h1>
  <h3>Countries</h3>
</div>
<div className='views'>
  <h1>15000+</h1>
  <h3>Enterprise <br /> customers</h3>
</div>
</div>
<div className="beginsection">

<h1>How to begin</h1>
<div className="beginsection1">
  <h3 className='h3'>Plan your curriculum</h3>
  <h3 >Record your video</h3>
  <h3>Launch your course</h3>
</div>
{/* how to begin section */}
<div className='beginsection2' >
    <div className='beginsection2-col1'>
      <p>You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.</p>
      <p>The way that you teach — what you bring to it — is up to you.</p>
      <h4>How we help you</h4>
      <p>We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.</p>
    </div>

  <div>
    <img src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg" />
   </div>
</div>
</div>


{/* instructor section */}

<div className='fourthsection'>
          <img src="https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg" />
          <div className='fourthsection1'>
            <p>“I'm proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”</p>
            <h6>Frank kane</h6>
            <span>Data Science & IT Certifications</span>
          </div>
        </div>
{/* next----------- */}

<div className='doitalone'>
  <div className='doitalone-img1'>
    <img src="https://s.udemycdn.com/teaching/support-1-v3.jpg" alt="" />
  </div>
  <div className='content'>
    
    <div className='contet-head'><h1>You won’t have to do it alone</h1></div>
    <div className='content-txt'>Our Instructor Support Team is here to answer your questions and review your test video, while our Teaching Center gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our online community.</div>
    <br />
    <br />
   <a href="">Need more details before you start?Learn more</a>
  </div>
  <div className='doitalone-img1'>
    <img src="https://s.udemycdn.com/teaching/support-2-v3.jpg" alt="" />
  </div>

</div>






{/* <Footer/> */}
    </div>
  )
}

export default TechOnUdemy
