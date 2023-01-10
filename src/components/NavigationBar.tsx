import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const navigate = useNavigate();

  const handleClick = (path:any) => {
    navigate(path);
  };

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">Willing Workers</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link onClick={() => handleClick("/")}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleClick("/programs")}>
              Programs
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleClick("/about")}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleClick("/contact")}>
              Contact
            </Nav.Link>
          </Nav.Item>
          <Button>Donate</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
