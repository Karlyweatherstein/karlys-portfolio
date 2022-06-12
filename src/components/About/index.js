import React from "react";
import Profile from "../../assets/profile.jpg"


function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className='about-div'> 
          <img className='profilePic'
                src={Profile}
                alt='profile'>

            </img>
            <p className='about-text'>
                Hello! My name is Karly and I love all things creative! Throughout my
                schooling I never really knew what I wanted to do in life; all I knew
                was I liked creating things. All kinds of things, traditional pen and
                paper, paint, clay, printmaking, and digital. College truly opened my
                eyes to all of the possibilities. I was exposed to all kinds of
                different mediums. That is where I took my first digital media class and
                found playing around in computer programs to be so fun and rewarding. I
                graduated with a bachelors in fine art but still had no clue what to do
                with that. I was freelancing with my art but I needed more and one day
                stumbled upon coding. I thought it was so interesting; using code to
                create and design web applications. I used some of the free resources
                out there to play around with it and what do you know? I loved it. 
                <br />
                <br/>
                Fast
                forward to me researching online programs and bootcamps and found out
                the university I attended was offering a bootcamp that started in a
                month. I signed up as fast as I could and spent every waking second
                practicing my new found love of using technology to be creative. I was
                trained in the MERN stack - MongoDB, Express.js, React, and Node.js! I
                have learned HTML, CSS, and JavaScript as well as many other languages
                and libraries. Make sure to checkout my resume section for all of my
                experience!
            </p>
      </div>
      
    </div>
  );
}

export default About;
