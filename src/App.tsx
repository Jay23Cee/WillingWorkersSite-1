import React from 'react';
import logo from './logo.svg';
import './App.css';
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
import JumboHome from './components/JumboHome';
import JumboAbout from './components/JumboAbout';
import JumboContact from './components/JumboContact';
import Programs from './Programs';
import styled from 'styled-components';
import Contact from './Contact';
import JumboPrograms from './components/JumboPrograms';


const Styles = styled.div`
*{
  h1,h2,h3,h4,,h6,p{
    overflow:hidden;
  }
}


`;


function App() {
  return (
    <Styles>

   <React.Fragment>
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
    <Route  path="/" element={<JumboHome/>}/>
    <Route  path="/programs" element={< JumboPrograms/>}/>
    <Route  path="/about" element={<JumboAbout/>}/>
    <Route  path="/contact" element={<JumboContact/>}/>

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
   <Footer/>
    
    </BrowserRouter>
   </React.Fragment>
    </Styles>
  );
}

export default App;
