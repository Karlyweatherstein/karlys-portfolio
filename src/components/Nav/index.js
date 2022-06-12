import React from 'react';


function Nav(props) {

    const {
        contactSelected,
        setContactSelected,
      } = props;
    

    return (
        <nav>
            <h1>Karly Weatherstein</h1>
            <ul>
                {/* Home */}
                <li>
                   <a href="#about" onClick={() => setContactSelected(false)}>
                   Home
                   </a> 
                </li>
                {/* About me */}
                <li className={` ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>About Me</span>
                </li>
                {/* Portfolio */}
                <li className={`${!contactSelected && 'navActive'}`}>
                    <span
                    onClick={() => {setContactSelected(false)}}>
                        Portfolio
                    </span>
                </li>
                {/* Contact */}
                <li className={`${!contactSelected && 'navActive'}`}>
                    <span
                    onClick={() => {setContactSelected(false)}}>
                        Contact
                    </span>
                </li>
                {/* Resume */}
                <li className={` ${!contactSelected && 'navActive'}`}>
                    <span
                    onClick={() => {setContactSelected(false)}}>
                        Resume
                    </span>
                </li>
            </ul>
        </nav>
    )

}

export default Nav;