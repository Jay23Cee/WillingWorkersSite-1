import React from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import styled from "styled-components";
import { Footer } from "./Footer";

const Style = styled.div`
  .contact {
    display: flex;
    flex-direction: row;
  }
  .contact-text {
    width: 20vw;
    h3 {
      font-size: 0.9em;
    }
  }
  .Gmap {
    width: 80vw;
  }
  @media screen and (max-width: 768px) {
    .contact {
      flex-direction: column;
    }
    .Gmap {
      width: 100vw;
    }
    .contact-text {
      width: 60vw;
    }
  }
`;

const containerStyle = {
  width: "100%",
  height: "100%",
  /* Other styles for the map container */
};

function Contact() {
  const center = {
    lat: 34.03987169154813,
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

  return (
    <div className="contact">
      <div className="contact-container-banner mt-4 p-5 bg-primary text-white">
        <h1>Contact Us</h1>
        <p></p>
      </div>

      <div className="contact-container-information">
        <div className="Gmap" id="map">
          <LoadScript googleMapsApiKey="AIzaSyAIQ76AHNTX5-2ZwTZj7D4G1FLPEjez6oE">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <MarkerF
                onLoad={onLoad}
                position={center}
                label={customLabel}
                onClick={() => {
                  console.log("Infowindow should pop");
                  return <InfoWindow></InfoWindow>;
                }}
              ></MarkerF>
              <></>
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="contact-text">
          <h5>Schedule a tour today</h5>
          <h3 style={{ color: "gray;" }}>
            Willing Workers is currently giving tours following CDC guidelines.
            Masks are mandatory during your visit.
          </h3>
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

export default React.memo(Contact);
