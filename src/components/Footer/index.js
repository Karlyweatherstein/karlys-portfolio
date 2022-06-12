import React from 'react';
import Github from '../../assets/github-icon.png'
import Email from '../../assets/email-icon.png'
import Linkedin from '../../assets/linkedin-icon.png'


function Footer() {


    return (
        <footer>
            <ul>
            <li>
                <a href='https://github.com/Karlyweatherstein'>
                    <img src={Github} alt='Github' ></img>
                </a>
            </li>
            <li>
                <a href='mailto: karlyweatherstein@gmail.com'>
                    <img src={Email} alt='Email' ></img>
                </a>
            </li>
            <li>
            <a href='https://www.linkedin.com/in/karly-weatherstein-963922137/'>
                    <img src={Linkedin} alt='Linkedin'></img>
                </a>
            </li>
          </ul>
        </footer>
    )

}

export default Footer;