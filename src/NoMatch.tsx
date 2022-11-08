import React from 'react'
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import aboutimg from "./assets/about.jpg"

const Styles = styled.div`

.layer{
  color:red;
  width:100%;
  height:100%;
}
.bg-primary {
  background-color: white!important;
  color:black!important;
}

`;


const NoMatch=()=> {
  return (
   
    <Styles>

    <div className="overlay mt-4 p-5 bg-primary text-white">
        <div className="layer"></div>
  <h1>Page not found</h1>
  <p>Return <a href="/">Home</a></p>
</div>
    </Styles>
  )
}

export default NoMatch;