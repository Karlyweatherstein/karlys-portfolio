import React from 'react';
import profile from "../../assets/profile.jpg"

function Hero() {

    return (
        <div className='heroDiv'>
            <div className='heroText'>
                <h1>Hi, I'm Karly Weatherstein!</h1>
                <p>
                    I am a full stack developer excited to take on new projects! Take a look at my portfolio to see more of my work or click on my "About me" tab to learn more about who I am! I look forward to connecting with you!
                </p>
            </div>
            <div className='profilePic'>
                <img 
                src={profile}
                alt='profile' 
                key="1"
                />
            </div>
        </div>
    )
}




export default Hero;