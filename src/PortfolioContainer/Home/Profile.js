import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='cool'>
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
                <div className="profile-detail-name">
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
            </div>
        </div>
    </div>
  )
}
