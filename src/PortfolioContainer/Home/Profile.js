import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='cool'>
                    <div className='cool-icon'>
                    <a href="">
                        <i className='fa fa-facebook-square'> </i>
                    </a>
                    <a href="">
                        <i className='fa fa-google-plus-square'> </i>
                    </a>
                    <a href="">
                        <i className='fa fa-instagram'> </i>
                    </a>
                    
                    <a href="https://www.youtube.com/">
                        <i className='fa fa-youtube-square'> </i>
                    </a>
                    
                    <a href="">
                        <i className='fa fa-linkedin-square'> </i>
                    </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text"> Tom</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Ethusiastic Dev 😄 ", 
                                1000, 
                                "Full Stack Developer 😎", 
                                1000, 
                                "React/Reduct", 
                                1000, 
                                "Ruby on Rails", 
                                1000, 
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Building application with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {" "}
                        Hire Me {" "}
                    </button>
                    <a href='resume(SE)ndm.pdf' download="Tom Resume">
                            <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
        </div>
    </div>
  )
}
