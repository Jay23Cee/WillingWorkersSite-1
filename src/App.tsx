import React from 'react';
import logo from './logo.svg';
import '../src/css/index.css'
import Button from 'react-bootstrap/Button';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
// import { Link, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import Contact from "./Contact";
import NoMatch from './NoMatch';
import {Footer} from './Footer'
import Layout from './components/Layout'
import {NavigationBar} from './components/NavigationBar'


import Programs from './Programs';
import styled from 'styled-components';
import Contact from './Contact';

import ScrollToTop from "./ScrollToTop";


function App() {
  return (
  

   <React.Fragment>
    <BrowserRouter>
    {/* <ScrollToTop children={undefined}/> */}
    <NavigationBar/>
    <Routes>


    </Routes>
  
    <Layout>

    <Routes>
     
        <Route  path="/" element={<Home/>}/>

        <Route  path="/about" element={ <About/>}/>
      
    
    <Route  path="/contact" element={ <Contact/>}/>
        <Route  path="/programs" element={ <Programs/>}/>
        <Route path='*' element={<NoMatch/>}/>
 
    </Routes>
    </Layout>
 
    
    </BrowserRouter>
   </React.Fragment>
 
  );
}

export default App;
