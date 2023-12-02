import React from 'react'
import {Link} from 'react-router-dom'

import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-container1'>
      <div className='footer-containerleft-1'>
        <div className='line1'>
          <ul>
            <li>Udemy Buisness</li>
            <li>Teach on Udemy</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>


          </ul>
        </div>
        <div className='line2'>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>Investors</li>

          </ul>
        </div>
        <div className='line3'>
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie setting</li>
            <li>Sitemap</li>
            <li>Accessibility</li>

          </ul>
        </div>
      
      </div>
      <div className='footer-containerright-2'>
        <div className='right'>
          English
        </div>
        </div>




      </div>

      
      <div className='footer-container2'>
  <div className='left'>
  <Link to='/'>
<img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Udemy" width="91" height="34" loading="lazy"></img>
</Link>
  </div>
  <div className='right'></div>
@2023Udemy,Inc.
      </div>
     





    </div>
  )
}

export default Footer
