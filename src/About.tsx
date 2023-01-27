import React, { useEffect } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import styled from "styled-components";
import naturewalk from "./assets/nature_walk.jpg";
import helpingHands from "./assets/hands.jpg";
import { Footer } from "./Footer";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="about-container">
      <div className="about-container-banner mt-4 p-5 bg-primary text-white">
        <h1>About Us</h1>
        <p>The best people in the service of helping individuals</p>
      </div>

      <div className="about-container-text">


        <div className="about-container-text-details">

          <div className="about-container-text-details-description">
          <h1>"Our Mission"</h1>

<p>
At Willing Workers, we are a organization dedicated to assisting and supporting 
individuals with intellectual and developmental disabilities. Our mission is to 
promote independence, self-advocacy, and overall well-being through community integration 
training and the development of healthy habits. We strive to improve the quality of life 
for the individuals we serve by focusing on areas such as safety, personal health and hygiene, 
nutrition, physical fitness, and emergency preparedness. At Willing Workers, we believe in 
the inherent worth and potential of every individual and are committed to helping those with 
intellectual and developmental disabilities lead fulfilling and independent lives. We also 
ensure that individuals at Willing Workers perform to their highest potential and 
become full participants in their communities.
</p>
<figure>
    <img
      src={naturewalk}
      alt="A group of people participating in an outdoor activity"
    />
  </figure>
            <div className="about-container-text-values">
              
            <h1>Our Values</h1>
            <p>
            As employees of Willing Workers, we are committed to the 
            following values in our interactions with the individuals we serve, 
            their families, our staff, the community, and each other:
            </p>

            <ul>
  <li>Compassion: We care deeply about the thoughts and feelings of those around us.</li>
  <li>Dignity: We treat all individuals with respect, honor, and fairness.</li>
  <li>Diversity: We celebrate and embrace the differences that make us stronger.</li>
  <li>Excellence: We strive to deliver the highest quality support and services at all times.</li>
  <li>Honesty: We prioritize honesty and transparency in our communication in order to build trust.</li>
</ul>
            {/* </div> */}
          
   
</div>

<div className="guiding_principles">
           <h1>
            Guiding Principles:
            </h1> 
            <p>

Putting the individual first: At Willing Workers, we are guided by a person-centered approach, with the needs and well-being of the individuals we serve at the forefront of all we do.
Empowerment: We believe in empowering individuals to take an active role in their own growth and development.
Inclusivity: We strive to create an inclusive environment where all individuals feel valued and respected.
Collaboration: We work closely with families, staff, and the community to provide the best possible support and services.
Innovation: We are committed to continuously seeking out new and innovative ways to improve our services and support.
Accountability: We take responsibility for our actions and decisions, and strive to be transparent in our communication and reporting.
            </p>
            <figure>
            <img
              src={helpingHands}
              alt="A group of people participating in an outdoor activity"
            />
          </figure>
            </div>
            
          </div>

         
        </div>

        <div className="about-container-contacts">

          <h5>Schedule a tour today</h5>
          <h3 style={{ color: "gray;" }}>
            Willing Workers is currently giving tours following CDC guidelines.
            Masks are mandatory during your visit.
          </h3>
          <br></br>
          <h3>
            {" "}
            4813 W. Washington Blvd.<br></br>
            Los Angeles , Los Angeles 90016
          </h3>
          <br></br>

          <h3>Telephone: (323) 937-5950</h3>
          <h3>
            Monday - Friday <br></br> 7am-3pm
          </h3>
          <br></br>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default React.memo(About);
