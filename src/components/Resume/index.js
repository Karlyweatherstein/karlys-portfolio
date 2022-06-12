import React from 'react';

function Resume() {


    return (
        <div className='resume'>
            <h1 className='titles'>Resume</h1>
            <a href="https://drive.google.com/uc?export=download&id=1-x9ojKlaYUUrDUJNLeVTxN8to79GCfvd" download="karly-weatherstein-resume">
               <h2>
                   Click this to download my resume!
                </h2>
            </a>
            <h2 className='resume'>Proficient in:</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
                <li>MongoDB</li>
                <li>Express</li>

            </ul>
           
        </div>
    )

}

export default Resume;