import React, { useState } from 'react'
import { Container, Button} from 'react-bootstrap';
import styled from 'styled-components';



const Styles = styled.div`


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