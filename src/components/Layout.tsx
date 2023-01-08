import React from 'react'
import {Container} from 'react-bootstrap';





const Layout=(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=> {
  return (

    <Container>
        {props.children}
    
    </Container>

  )
}

export default Layout