import React from "react";
import about_photo from '../images/about_photo.png'
import aboutmephoto from '../images/aboutme.png'


function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={aboutmephoto}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
            Hi, I am Beau Hobba, and I am a mechatronics engineer. I moved to Sydney from rural Young, NSW, in 2016. I reside in Sydney, Australia and have recently finished with First Class Honours in Mechatronic Engineering. Since then I have moved back to the country. 
              <br></br>
              <br></br>
              I am talented at leading teams and creating complex systems to match the project. My passions lie in automation, everyday assistive robotics, AI, earth/space exploration, agriculture, and ethical robotics. I firmly believe robotics is a central part of our future and am fascinated by their ability to assist our everyday lives. I wish to use my programming expertise to help develop technology yet to be discovered.
              <br></br>
              <br></br>
              My hobbies include flying my drone (yes, that is me trying to fish), making video edits, playing/buying board games, making music (it isn't that good), catching and researching crayfish and mountain biking.
              <br></br>
              <br></br>
              Stemming from the enjoyment of catching and researching yabbies when I was younger on the farm dam, I now keep some of my crayfish in an aquaponics setup. One thing led to another, and I found myself walking up remote waterfalls looking for spiny crays. In my spare time, I have furthered this joy by trying to photograph and observe nearly every creature endemic to Australia.  </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
