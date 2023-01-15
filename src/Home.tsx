import React , {useEffect, useState} from "react";

import { ReactComponent as BusIcon } from "./assets/bus.svg";
import { ReactComponent as CoachIcon } from "./assets/coach.svg";
import { ReactComponent as HandsIcon } from "./assets/hands.svg";
import { Button } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import w2 from './assets/w2.jpg'
import w3 from './assets/w3.jpg'
import w4 from './assets/w4.jpg'
import w1 from './assets/welcome.jpg'

const Home = () => {
  let navigate = useNavigate();
  const routeProgramChange = (path:any) => {
   
    navigate(path);
  };
  // Declare a state variable to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Declare a list of images to be displayed in the slide show
  const images = [
   w1,
   w2,
   w3,
   w4,
  ];

   // Update the current slide every 5 seconds
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <div className="home-container">
        <div className="overlay mt-4 p-5 bg-primary text-white"  style={{ backgroundImage: `url(${images[currentSlide]})` }}>
          <div className="layer"></div>

          <h1>Willing Workers</h1>
          <p>
          Empowering individuals with intellectual and developmental
           disabilities to reach their full potential
          </p>
          
          <Button onClick={()=>{routeProgramChange("/about")}} >
          Learn More About Us.
          </Button>
        </div>

        <div className="banner">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="banner-one .hover-zoom">
              <Button>
              <a className="banner-button" onClick={()=>{routeProgramChange("/")}}>
                <div className="donate-banner ">
                  <h3>Donate</h3>
                  <p>
                  Your donation can make a difference in the lives of those we serve. 
                  Every contribution helps us provide valuable services. 
                  </p>
                </div>
              </a>
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="banner-two .hover-zoom">
              <Button>
              <a onClick={()=>{routeProgramChange("/programs")}}>
                <div className="program-banner ">
                  <h3>Programs</h3>

                  <p>
                    learn more about our programs and the valuable resources
                    that they provide
                  </p>
                </div>
              </a>
          </Button>

            </div>
          </ScrollAnimation>
        </div>

        <div className="programs">
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutLeft"
            animateOnce={true}
          >
            <div className="Programs-item bus-info">
              <BusIcon className="bus-icon" />
              <h3>PRIVATE TRANSPORTATION</h3>
              <p>
              We provide private transportation services to our clients at our adult regional center. Our reliable drivers are available Monday-Friday to transport clients to and from the center and other locations. Our service is 
              designed to make getting around easy and stress-free for our clients.{" "}
              </p>
              <Button onClick={()=>{routeProgramChange('/programs')}}>Find out more</Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="bounceOutRight"
            animateOnce={true}
          >
            <div className="Programs-item coach-info">
              <CoachIcon className="coach-icon" />
              <h3>COMMUNITY INTEGRATION PROGRAM</h3>
              <p>
              Our community integration program promotes diversity, equality, and inclusion and provides resources and support for clients to learn about different lifestyles and advocate for themselves. 
              The program helps clients lead independent lives within their communities.
              </p>
              <Button onClick={()=>{routeProgramChange('/programs')}}>Find out more</Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutLeft"
            animateOnce={true}
          >
            <div className="Programs-item hands-info">
              <HandsIcon className="hands-icon" />
              <h3>SOCIAL RECREATION PROGRAM</h3>
              <p>
              Our social recreation program enhances the lives of adults with developmental disabilities through recreational and social activities such as arts and crafts, music, and other creative pursuits. Our program provides a supportive environment for individuals to engage in activities that promote well-being.
              It helps individuals lead fulfilling and enriching lives
              </p>
              <Button onClick={()=>{routeProgramChange('/programs')}}>Find out more</Button>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="sop-info">
            <div className="sop .col-md-">
              <div className="sop-wrap">
                <div className="sop-img " />
                <div className="sop-statement .col-md-">
                  <p className="sop-statement-title">Willing Workers</p>
                  <p className="sop-statement-text">
                    Statement <br></br>of Purpose
                  </p>
                </div>
              </div>
              <div className="sop-quote .col-md-">
                <p>
                Willing Workers is a organization dedicated to assisting and supporting individuals with 
                intellectual and developmental disabilities. 
                Our mission is to promote independence, self-advocacy, and overall well-being through 
                community integration training and the development of healthy habits. By focusing on areas 
                such as safety, personal health and hygiene, nutrition, physical fitness, and emergency 
                preparedness, we strive to improve the quality of life for the people we serve. At Willing 
                Workers, we believe in the inherent worth and potential of every individual, and are committed 
                to helping those with intellectual and developmental disabilities lead fulfilling and 
                independent lives.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="last-quote">
          {/* <img src={Smileimg} alt="" className="src" /> */}
          <h4>Dedicated to making a difference in our community.</h4>
        </div>

        <Footer/>
      </div>



      
    </div>
  );
};

export default Home;
