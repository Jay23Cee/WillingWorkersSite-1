import React, { useState } from 'react'
import { Container, Button} from 'react-bootstrap';
import styled from 'styled-components';
import Welcomeimg from '../assets/welcome.jpg'


const Styles = styled.div`
@font-face{
    font-family:myfont;
    src:url("./assets/fonts/Ramadhan_Mubarak.ttf");
  }

  .overlay {
    background-size: cover;
    color: #ccc;
    background: url(${Welcomeimg}) no-repeat center center;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    margin-bottom: 20px;
    margin-top: 200px;
    height: 100vh;
    margin-top: -25px !important;
    font-size: 1.5em;
  
    h1 {
      font-family: myFont;
      color: var(--green);
      font-size: 6.5rem;
      line-height: 1em;
      overflow: hidden;
    }
  
    a {
      border-radius: 20px 20px 0 20px;
      background: transparent;
      color: black;
      border-color: black;
      font-size: 0.9em;
      font-weight: 600;
      overflow: hidden;
      z-index: 8;
      background: yellow;
      width: 160px;
      height: 40px;
      a:link {
        text-decoration: none;
      }
  
      a:visited{
        text-decoration: none;
      }
  
      a:hover{
        text-decoration:none;
      }
  
      a:active{
        text-decoration: none;
      }
    }
  }
  
  .layer {
    background-color: #0005;
    opacity: 0.6;
    position: absolute;
  
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 4;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  
  @media screen and (max-width: 768px) {

    .overlay {
      height: 55vh !important;
      font-size: 1em;

      h1 {
        font-size: 4em;
      }

      a {
        border-radius: 20px 20px 0 20px;
        background: transparent;
        color: black;
        border-color: yellow;
        font-size: 0.9em;
        font-weight: 600;
        overflow: hidden;
        z-index: 8;
        background: yellow;
        width: 100px;
        height: 20px;
        a:link {
          text-decoration: none;
        }
    
        a:visited{
          text-decoration: none;
        }
    
        a:hover{
          text-decoration: none;
        }
    
        a:active{
          text-decoration: none;
        }
      }



    }
  }
  

`;
export const JumboHome=()=> {

  return (

    <Styles>

    <div className="overlay mt-4 p-5 bg-primary text-white">
        <div className="layer"></div>
        
  <h1>Willing Workers</h1>
  <p>The best people in the service of helping individuals with intellectual & developmental disabilities</p>
  <a href='/about'>Learn More</a>
  
</div>
    </Styles>
  )
}

export default JumboHome