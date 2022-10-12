import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Styles = styled.div`
    .navbar{
        background-color:rgb(99, 99, 99);
        padding-top:30px;
        width:100vw;
        position:fixed;
        z-index:10;

        Button{
            background:#ffbc01eb;
           
            color:black;
            border-radius:90px;
            border-color:transparent;
            &:hover {
                background:#ee7f05eb;
            }
        }
    }

    .navbar-brand, .navbar-nav .nav-link {
        color:white;

        &:hover {
            color:red;
        }
    }


 

`;

export const NavigationBar=()=> {
  return (
   <Styles>
    <Navbar expand="lg">
        <Navbar.Brand href='/'>Willing Workers</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                <Button>Donate</Button>
            </Nav>
        </Navbar.Collapse>



    </Navbar>
   </Styles>
    


  )
}

export default NavigationBar