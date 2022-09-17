import React from 'react'


const Home = () => {
  return (
    <div className="home">
        <div className="home-content">
            <div className="home-left" data-aos="fade-right" data-aos-duration="1200">
              <div className="home-text">
                <p className='blue-clr'>Hi There</p>
                <h3 className='blue-clr'>I'm David Oga</h3>
                <h1>A Top-notch Web Developer<span className='blue-clr'>,</span> <br />and Software Engineer<span className='blue-clr'>.</span></h1>
              </div>
              <div className="social-links">
                <a href="https://twitter.com/demiicoder"><img src="assets/linkedin.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/david-oga-74a8a6239/"><img src="assets/twitter.png" alt="" /></a>
              </div>
            </div>
            <div className="home-right" data-aos="zoom-in" data-aos-duration="1200">
                <div className="hero-img">
                    <img src="/assets/hero-img.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home