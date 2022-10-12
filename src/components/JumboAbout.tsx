import React, { useState } from 'react'
import { Container, Button} from 'react-bootstrap';
import styled from 'styled-components';
import Aboutimg from '../assets/aboutus.jpg'


const Styles = styled.div`
@font-face{
    font-family:myfont;
    src:url("./assets/fonts/Ramadhan_Mubarak.ttf");
  }

.overlay{
  
  height:50vh;
  background-size:cover;
    color:#ccc;
    background: url(${Aboutimg})no-repeat top; 
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:-2;
    margin-bottom:20px;
    margin-top: -25px !important;
    font-size:1.5em;
    text-align:center;


    h1{
        font-family: myFont;
        color: var(--green);
        font-size: 6.5rem;
        line-height: 1em;
        overflow:hidden;
    }

    button{
        border-radius: 20px 20px 0 20px ;
        background:transparent;
        color:yellow;
        border-color:yellow;
        font-size:.9em;
    }
}

.layer{
    background-color:#000;
    opacity:0.6;
    position:absolute;

    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    text-align:center;
    justify-content:center;
    align-items:center;

}

@media screen and (max-width:768px) {
  .overlay{
    height:35vh !important;
    font-size:1.0em;
    h1{
      font-size:4em;
    }

 
    
  }
}

`;
export const JumboHome=()=> {

  return (

    <Styles>

    <div className="overlay mt-4 p-5 bg-primary text-white">
        <div className="layer"></div>
  <h1>About Us</h1>
  <p>The best people in the service of helping individuals</p>
  
</div>
    </Styles>
  )
}

export default JumboHome