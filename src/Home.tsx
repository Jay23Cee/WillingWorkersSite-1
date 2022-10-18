import React from "react";
import styled from "styled-components";
import Programimg from "./assets/programs.jpg";
import Donateimg from "./assets/donate1.jpg";
import Smileimg from "./assets/smile.jpg";
import Sopimg from "./assets/sop2.jpg";
import { ReactComponent as BusIcon } from "./assets/bus.svg";
import { ReactComponent as CoachIcon } from "./assets/coach.svg";
import { ReactComponent as HandsIcon } from "./assets/hands.svg";
import { Button } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";



const Style = styled.div`
.sop-info{
height:auto;


}

  .sop-statement-title{
    text-align:left !important;
    font-size:1.5em !important;
    font-weight:450;
    padding-left:10px;
  }

.Programs{
  button{
    background:#00ba9c !important;
    border-radius: 20px;
    width:fit-content;
  }
}
.sop-statement-text{
  position:inherit;

  width:80%;
  height:90%;
 font-size:2em;
  padding:15px;

}

.sop-quote{
  
  background:green;
  color:white;
  padding:10px;
  margin-top:-240px;
  margin-left:25vw;
  z-index:1;



 
  line-height: 30px;
  border-radius:20px;
}
 

.last-quote{
  color:black;
  text-align:center;
  align-items:center;
  background: url(${Smileimg}) no-repeat center;
  background-size:cover;
  margin-top:20px;
  margin-bottom:2vw;
  display:flex;
  justify-content:center;

  height:350px;



 h4{
  width:50vw;
  background:yellow;
  height:auto;
  overflow:hidden;
 }
}

.banner{
  display:flex;
  flex-direction:row;
  position:absolute;
  left:0;
  margin-left:10%;
  margin-top:-200px;
  z-index:6;
  justify-content:center;
  align-items:center;
}

.coach-info{
  text-align:left !important;
}

.banner-one {
  display: flex;
  flex-direction: column;
  width:40vw;
  height: 250px;
  background: url(${Donateimg}) no-repeat center center;
  background-size: cover;
  font-weight: 600;
  //font-size: 1.2em;
  text-align: center;
  justify-content: center;
  align-item: center;
  color: white;

}

.donate-banner{
  height:100%;
  background: #fff40059;
  padding:20px;
  padding-right:40px;


}

.program-banner{
  height:100%;

  background: #00e33f61;
  padding:20px;
  padding-right:40px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
.banner-two {
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 250px;
  background: url(${Donateimg}) no-repeat ;
  background-size: cover;
  font-weight: 600;
  //font-size: 1.2em;
  text-align: center;
  justify-content: center;
  align-item: center;
  color: white;

}


.sop{

 height:100%;
  display: flex;
  flex-direction: column;

  // overflow:hidden;

  .sop-wrap{
  
    
    position:relative;

  }
 
}



  @media screen and (max-width: 768px) {


    html {
      font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }


    .last-quote{
      justify-content:center;
      align-items:center;
      margin-left:5vw;
      margin-top:20px;
      margin-bottom:2vw;
    
      width:80vw;
      height:100vw;
      img{
        width:80%;
        height:10%;
      }
    }
    
    .sop{
      font-size: calc(14px + 6 * ((100vw - 320px) / 680));
      margin-bottom:0px !important;

     
    }

    .sop-info{
      height:auto !important;
    }

    .sop-statement-text{
      position:inherit;
      font-size: calc(2.1em + 6 * ((100vw - 320px) / 680));
      width:80%;
      height:90%;
     
      padding:15px;
  
    }


    .sop-quote{
  
      background:green;
      color:white;
      padding:10px;
      margin-top:-240px;
      margin-left:15vw;
      z-index:1;
     width:80vw !important;
    
    
     
      line-height: 30px;
      border-radius:20px;
    }
     
    
    .container {
      display: flex;
      flex-direction: column;

      width: 100vw;
      margin: 0;
      padding: 0;
      left: 0 !important;
     
    }

    .coach-info{
      text-align:end !important;
    }
    
    .banner{
      
      flex-direction:column;
      position:relative;
      margin-top:0px;
      margin-left:0px;
    }
    
    .banner-one {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 200px;
      text-shadow: 0 0 20px white;
      font-weight: 600;
      //font-size: 1.2em;
      text-align: center;
      justify-content: center;
      align-item: center;
      color: white;
      h3 {
       
        overflow:hidden;
        z-index: 10;
        color: black;
        text-shadow: 1px -1px 20px #d5ffda;
      }
    }
    
    .donate-banner{
      height:100%;
      background: #fff40059;
      padding:20px;
      padding-right:40px;
    
    
    }
    
    .program-banner{
      height:100%;
    
      background: #00e33f61;
      padding:20px;
      padding-right:40px;
    }
    .banner-two {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 200px;
      text-shadow: 0 0 20px white;
      font-weight: 600;
      //font-size: 1.2em;
      text-align: center;
      justify-content: center;
      align-item: center;
      color: white;
      h3 {
        //font-size: 3em;
        overflow:hidden;
      }
    }








  }


  .Programs-item{
    width:90vw;
    margin-top:50px;

    
  }

  .hands-info{
    margin-bottom:50px;
  }



  .sop-img{
   
    width:100%;
    height:450px !important;

  }

  




#Layer_1{
  path{
    fill:#000000 !important;
  }

  rect{
    fill:white !important;
  }

  circle{
    fill:white !important;
  }
}

  .bus-icon {
    fill:#000000;
   width:80px;
   g{fill:yellow;}
   transform: scaleX(-1);


  }

  .coach-icon{
    fill:#000000;
    width:80px;
    transform: scaleX(-1);
    
  }

  .hands-icon{
    fill:#000000;
    width:80px;
    
  }


  .sop{
    
   
    display: flex;
    flex-direction: column;
    overflow:hidden;
  }

  .sop-wrap{
    display:flex;
    flex-direction:row;
    overflow:hidden;
  }
   .sop-wrap> div {
    flex: 50%; /* or - flex: 0 50% - or - flex-basis: 50% - */

   
    margin-bottom: 10px;
  
  }

.sop-img{
  background:url(${Sopimg}) no-repeat top; 
  background-size:cover;


}


.sop-statement{
  justify-content:center;
  overflow:hidden;

  .sop-statement-title{
    text-align:left !important;
    font-size:1.1em;
    font-weight:450;
    padding-left:10px;
  }
 




}



// NEEDS MEDIA




.banner{
 a{
  background:transparent;
  outline:none;
  border:none;
  height:100%;
  color:black;
  link { text-decoration: none; }


visited { text-decoration: none; }


hover { text-decoration: none; }


active{ text-decoration: none; }
}
}

`
const Home = () => {
  return (
    <div>
      <Style>
        <div className="container">

            <div className="banner">
            <ScrollAnimation animateIn="fadeIn"  animateOnce={true}> 
              <div className="banner-one .hover-zoom">
                <a className="banner-button" href="/about">
                  <div className="donate-banner ">
                    <h3>Donate</h3>
                    <p>
                      Support Willing Workers and the local community with a
                      one-time or monthly donation
                    </p>
                  </div>
                </a>
              </div>
              </ScrollAnimation>



              <ScrollAnimation animateIn="fadeIn"  animateOnce={true}> 
              <div className="banner-two .hover-zoom">
                <a href="/programs">
                  <div className="program-banner ">
                    <h3>Programs</h3>

                    <p>
                      learn more about our programs and the valuable resources
                      that they provide
                    </p>
                  </div>
                </a>
              </div>
              </ScrollAnimation>

            </div>

         

          <div className="Programs">

          <ScrollAnimation  animateIn='bounceInRight'
  animateOut='bounceOutLeft'  animateOnce={true}> 
            <div className="Programs-item bus-info">
              <BusIcon className="bus-icon" />
              <h3>PRIVATE TRANSPORTATION</h3>
              <p>
                We provide the best kind of transportation. Service provided
                Monday - Friday{" "}
              </p>
              <Button>Find out more</Button>
            </div>
            </ScrollAnimation>

            <ScrollAnimation  animateIn='bounceInLeft'
  animateOut='bounceOutRight'  animateOnce={true}> 
            <div className="Programs-item coach-info">
              <CoachIcon className="coach-icon" />
              <h3>COMMUNITY INTEGRATION PROGRAM</h3>
              <p>
                We provide Diversity, Equality, and Inclusion Resources,
                allowing individuals to advocate for themselves and learn about
                different lifestyles.
              </p>
              <Button>Find out more</Button>
            </div>
            </ScrollAnimation>

            <ScrollAnimation  animateIn='bounceInRight'
  animateOut='bounceOutLeft'  animateOnce={true}> 
            <div className="Programs-item hands-info">
              <HandsIcon className="hands-icon" />
              <h3>COMMUNITY INTEGRATION PROGRAM</h3>
              <p>
                We provide Diversity, Equality, and Inclusion Resources,
                allowing individuals to advocate for themselves and learn about
                different lifestyles.
              </p>
              <Button>Find out more</Button>
            </div>
          </ScrollAnimation>
          </div>

          <ScrollAnimation animateIn="fadeIn"  animateOnce={true}> 
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
                  Willing Workers assist and encourage a diversified set of
                  people who have intellectual and developmental disabilities.
                  Through community integration training, we want to change the
                  perspective through cultivating independence. We encourage
                  habits that promote self-advocacy, safety, personal health and
                  hygiene, nutrition, physical fitness, and emergency
                  preparedness.
                </p>
              </div>
            </div>
          </div>
</ScrollAnimation>

          <div className="last-quote">
            {/* <img src={Smileimg} alt="" className="src" /> */}
            <h4>Workers that are Willing to the service of excellence.</h4>
          </div>
        </div>
      </Style>
    </div>
  );
};

export default Home;
