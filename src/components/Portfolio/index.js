import React from 'react';
import RunBuddy from "../../assets/portfolio-mockups/run-buddy.jpg"
import Github from '../../assets/github-icon.png'
import ShowMeHow from '../../assets/portfolio-mockups/showMeHow-mockup.jpg'
import PasswordGenerator from '../../assets/portfolio-mockups/password-mockup.png'
import BestFurrend from '../../assets/portfolio-mockups/best-furrends-mockup.jpg'
import Horiseon from '../../assets/portfolio-mockups/horiseon.jpg'
import WeatherDashboard from '../../assets/portfolio-mockups/weather-dashboard.jpg'




function Portfolio() {


    return (
        <div>
            <h1 className='titles'>
                Portfolio
            </h1>
            {/* Run Buddy */}
            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://karlyweatherstein.github.io/run-buddy/'>
                        <img alt="Run-Buddy" src={RunBuddy}></img>
                    </a>
                </div>
                <div className='icon' >
                    <h2>Run Buddy</h2>
                    <a href='https://github.com/Karlyweatherstein/run-buddy'>
                    <img src={Github} alt='Github' ></img>
                    </a>
                    <p>Tools: HTML, CSS</p>
                </div>
            </div>
            {/* Show Me How */}
            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://boiling-fjord-93274.herokuapp.com/'>
                        <img alt="Show-Me-How" src={ShowMeHow}></img>
                    </a>
                </div>
                <div className='icon' >
                    <h2>Show Me How</h2>
                    <a href='https://github.com/jamesbelk0/Show-Me-How'>
                    <img src={Github} alt='Github' ></img>
                    </a>
                    <p>Tools: Javascript, Handlebars, Express, MongoDB</p>
                </div>
            </div>
            {/* Password Generator */}
            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://karlyweatherstein.github.io/password-generator/'>
                        <img alt="Password-Generator" src={PasswordGenerator}></img>
                    </a>
                </div>
                <div className='icon' >
                    <h2>Password Generator</h2>
                    <a href='https://github.com/Karlyweatherstein/password-generator'>
                    <img src={Github} alt='Github' ></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>
            {/* Best Furrrends */}
            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://karlyweatherstein.github.io/best-furrends/'>
                        <img alt="best-furrends" src={BestFurrend}></img>
                    </a>
                </div>
                <div className='icon' >
                    <h2>Best Furrends</h2>
                    <a href='https://github.com/Karlyweatherstein/best-furrends'>
                    <img src={Github} alt='Github' ></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>
            {/* Horiseon */}
            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://karlyweatherstein.github.io/horiseon/'>
                        <img alt="Horiseon" src={Horiseon}></img>
                    </a>
                </div>
                <div className='icon' >
                    <h2>Horiseon</h2>
                    <a href='https://github.com/Karlyweatherstein/horiseon'>
                    <img src={Github} alt='Github' ></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript</p>
                </div>
            </div>
            {/* Weather Dashboard */}
            <div className='portfolio'>
                <div className='portfolio-mock'>
                    <a href='https://karlyweatherstein.github.io/weather-dashboard/'>
                        <img alt="Weather-dashboard" src={WeatherDashboard}></img>
                    </a>
                </div>
                <div className='icon' >
                    <h2>Weather Dashboard</h2>
                    <a href='https://github.com/Karlyweatherstein/weather-dashboard/'>
                    <img src={Github} alt='Github' ></img>
                    </a>
                    <p>Tools: HTML, CSS, Javascript, Rest API</p>
                </div>
            </div>

        </div>
    )

}



export default Portfolio;

