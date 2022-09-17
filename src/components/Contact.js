import React from 'react'

const Contact = () => {
  return (
    <div className="contact" id='contact'>
        <div className="contact-content" data-aos="fade-down-left" data-aos-duration="1000">
            <div className="contact-left">
                <div className="contact-left-heading">
                <h1>Get In Touch</h1>
                <p>I'm open to collaborations and networking with you!<br /> Do reach out to me!</p>
                </div>

                <div className="social-links" datatype='contact-social-links'>
                    <a href="https://twitter.com/demiicoder"><img src="assets/linkedin.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/david-oga-74a8a6239/"><img src="assets/twitter.png" alt="" /></a>
                </div>

                <div className="contact-links">

                    <div className="message">
                        <div className="message-img">
                            <img src="/assets/message.png" alt="" />
                        </div>
                        <div className="message-text">
                            <p>oluwademiladedavidoga@gmail.com</p>
                            <small><em>Send a message Anytime!</em></small>
                        </div>
                    </div>

                    <div className="phone">
                        <div className="phone-img">
                            <img src="/assets/phone.png" alt="" />
                        </div>
                        <div className="phone-text">
                            <p>+2349031648277</p>
                            <small><em>Call or message me Anytime!</em></small>
                        </div>
                    </div>

                </div>

            </div>
            <div className="contact-right">
                <div className="contact-right-content">
                    <div className="form-heading">
                        <h3>Need a Service?</h3>
                        <h1>Send A Message!</h1>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="">
                        <input type="text" placeholder='Enter Your Full Name' className='form-inputs' />
                        <input type="email" placeholder='Enter Your Email Address' className='form-inputs' />
                        <textarea name="" id="" cols="30" rows="1" placeholder='Write Your Message'className='form-inputs' ></textarea>
                        <button type='submit'>Shoot <i class="fa-regular fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact