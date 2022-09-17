import React from 'react'

const Stack = () => {
  return (
    <div className="stack" id='stack'>
        <div className="stack-content" data-aos="zoom-in" data-aos-duration="1000">
            <div className="stack-heading">
            <h1>My stack <span><i class="fa-solid fa-code"></i></span></h1>
            <p>Here are some of the skills i possess</p>
            </div>

            {/* stack languages grid */}
            <div className="languages">
                <h2>Programming & Markup Languages <span><i class="fa-solid fa-angle-right blue-clr"></i></span></h2>
                <div className="stack-grid">
                <div className="grid">
                    <div className="grid-content">
                        <i class="fa-brands fa-html5 fa-4x"></i>
                        <h3>HTML 5</h3>
                        <p>I write clean HTML codes leaving comment when necessary.</p>
                    </div>
                </div>
                
                <div className="grid">
                    <div className="grid-content">
                    <i class="fa-brands fa-css3-alt fa-4x"></i>
                        <h3>CSS 3</h3>
                        <p>I write clean HTML codes leaving comment when necessary.</p>
                    </div>
                </div>

                <div className="grid">
                    <div className="grid-content">
                    <i class="fa-brands fa-square-js fa-4x"></i>
                        <h3>JavaScript</h3>
                        <p>I write clean HTML codes leaving comment when necessary.</p>
                    </div>
                </div>

                <div className="grid">
                    <div className="grid-content">
                        <i class="fa-brands fa-react fa-4x"></i>
                        <h3>ReactJS</h3>
                        <p>I write clean HTML codes leaving comment when necessary.</p>
                    </div>
                </div>

                <div className="grid">
                    <div className="grid-content">    
                        <i class="devicon-c-plain colored devicon"></i>
                        <h3 className='dev-text'>C Programming Language</h3>
                        <p>I write clean HTML codes leaving comment when necessary.</p>
                    </div>
                </div>

                <div className="grid">
                    <div className="grid-content">
                        <i class="fa-brands fa-github fa-4x"></i>
                        <h3>Git & Github</h3>
                        <p>I write clean HTML codes leaving comment when necessary.</p>
                    </div>
                </div>
                
            </div>
            </div>

            {/* stack frameworks grid */}

            <div className="frameworks">
                <h2>Frameworks <span><i class="fa-solid fa-angle-right blue-clr"></i></span></h2>
                <div className="stack-grid">
                <div className="grid">
                    <div className="grid-content">
                        <i class="fa-brands fa-bootstrap fa-4x"></i>
                        <h3>Bootstrap</h3>
                        <p>I write clean HTML codes leaving comment when necessary.</p>
                    </div>
                </div>
                
                <div className="grid">
                    <div className="grid-content">
                        <i class="devicon-tailwindcss-plain colored devicon"></i>
                        <h3 className='dev-text'>Tailwind CSS</h3>
                        <p>I write clean HTML codes leaving comment when necessary.</p>
                    </div>
                </div>

                <div className="grid">
                    <div className="grid-content">
                        <i class="devicon-jquery-plain colored devicon"></i>
                        <h3 className='dev-text'>JQuery</h3>
                        <p>I write clean HTML codes leaving comment when necessary.</p>
                    </div>
                </div>

                <div className="grid">
                    <div className="grid-content">
                        <i class="fa-brands fa-react fa-4x"></i>
                        <h3>ReactJS</h3>
                        <p>I write clean HTML codes leaving comment when necessary.</p>
                    </div>
                </div>

                <div className="grid">
                    <div className="grid-content">
                    <i class="fa-solid fa-circle-nodes fa-4x"></i>
                        <h3>AOS</h3>
                        <p>I write clean HTML codes leaving comment when necessary.</p>
                    </div>
                </div>
                
            </div>
            </div>

        </div>
    </div>
  )
}

export default Stack