import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  MarkerF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import styled from "styled-components";
import { Footer } from "./Footer";

const containerStyle = {
  width: "100%",
  height: "100%",
  /* Other styles for the map container */
};
const options = {
  disableDefaultUI: true,
  gestureHandling: "none",
};

function Contact() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedMarker, setSelectedMarker] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const center = {
    lat: 34.03987169154813,
    lng: -118.34399681590634,
  };

  const Popup_map = {
    lat: 34.04287169154919,
    lng: -118.34399681590634,
  };

  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
  };

  var customLabel = {
    text: "A",
    color: "#636363",
    fontSize: "10px",
    fontWeight: "bold",
    top: "20px",
  };

  // Add state variable to store the state of the InfoWindow
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // Add a state variable to store the current marker that is clicked
  const [currentMarker, setCurrentMarker] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  return (
    <div className="contact">
      <div className="contact-container-banner mt-4 p-5 bg-primary text-white">
        <h1>Contact Us</h1>
        <p></p>
      </div>

      <div className="contact-container-information">
        <div className="Gmap" id="map">
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
              options={options}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <MarkerF
                onLoad={onLoad}
                position={center}
                label={customLabel}
                onClick={() => {
                  // Update the selected marker and open the InfoWindow
                  setSelectedMarker(center);
                  setIsInfoOpen(true);
                  setCurrentMarker(center);
                }}
              ></MarkerF>
              {isInfoOpen && currentMarker && (
                <InfoWindow
                  position={currentMarker}
                  onCloseClick={() => {
                    // Close the InfoWindow and clear the selected marker
                    setIsInfoOpen(false);
                    setCurrentMarker(null);
                  }}
                  zIndex={10}
                >
                  <div>
                    <h5>Willing Workers</h5>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
                        "4813 W. Washington Blvd., Los Angeles, Los Angeles 90016"
                      )}`}
                      target="_blank"
                    >
                      <p>
                        {" "}
                        4813 W. Washington Blvd.<br></br>
                      </p>
                      <p> Los Angeles , Los Angeles 90016</p>
                    </a>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="contact-text">
          <h5>Schedule a tour today</h5>
          <h3 style={{}}>
            Willing Workers is currently giving tours following CDC guidelines.
            Masks are mandatory during your visit.
          </h3>
          <h3>
            {" "}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
                "4813 W. Washington Blvd., Los Angeles, Los Angeles 90016"
              )}`}
              target="_blank"
            >
              4813 W. Washington Blvd.<br></br>
              Los Angeles, CA 90016
            </a>
          </h3>
          <h3>Monday - Friday 8:00am - 3:00pm</h3>
          <h3>
            Phone:<a href="tel:323-729-9898">323-729-9898</a>
          </h3>
          <h3>Email: info@willingworkers.org</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
