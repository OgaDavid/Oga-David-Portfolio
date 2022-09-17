import React from 'react'

const Footer = () => {

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="footer" id='footer'>
      
      <div className="footer-content">
        <div className="footer-heading">
          <h1>David Oga<span className='blue-clr'>.</span></h1>
        </div>

        <div className="social-links">
                <a href="https://twitter.com/demiicoder"><img src="assets/linkedin.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/david-oga-74a8a6239/"><img src="assets/twitter.png" alt="" /></a>
                <a href="#contact" className='footer-message'><img src="/assets/message.png" alt="" /></a>

                <div className="copyright">
                  <p>Copyright <span><img datatype='copyright' src="/assets/Copyright.png" alt="" /></span> {currentYear} | All Rights Reserved<span className='blue-clr'>.</span></p>
                  <em>Coded By Oga David</em>
                </div>
              </div>
      </div>
    </div>
  )
}

export default Footer