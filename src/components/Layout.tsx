import React from 'react'
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

@media screen and (max-width:768px) {
 
  .container{
   max-width:100vw; !important
  }

  }


`;


const Layout=(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=> {
  return (
    <Styles>

    <Container>
        {props.children}
    </Container>
    </Styles>
  )
}

export default Layout