import React, { useEffect } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import styled from "styled-components";
import naturewalk from "./assets/nature_walk.jpg";
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
        <h1>"Dedicated to Making a Difference"</h1>

        <p>
          At Willing Workers, we are passionate about helping individuals with
          disabilities live their best lives. For years, we have been providing
          top-notch support and services to our clients, and are committed to
          making a positive impact in their lives. Our team of skilled
          professionals is dedicated to helping our clients reach their full
          potential and lead fulfilling, meaningful lives.
        </p>

        <div className="about-container-text-details">
          <div className="about-container-text-details-description">
            <p>
              In addition to offering a range of programs and activities
              tailored to the unique needs and interests of each individual, we
              also have our own private transportation service to ensure that
              our clients can easily access our services. Whether it's through
              our behavior program, arts and crafts, or outdoor activities like
              nature walks and trips to the movies, we strive to provide
              engaging and enriching experiences for our clients.
            </p>

            <p>
              If you or a loved one is in need of support, don't hesitate to
              reach out to us. We would be happy to schedule a tour and discuss
              how Willing Workers can best serve you.
            </p>
          </div>

          <figure>
            <img
              src={naturewalk}
              alt="A group of people participating in an outdoor activity"
            />
          </figure>
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
