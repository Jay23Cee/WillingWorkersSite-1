import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const Styles = styled.div`



  section{
    background-color: rgb(99,99,99);
    color:white !important;

    h4{
        overflow:hidden;
    }
  }
    
  


`;


export const Footer=()=> {
  return (
    <Styles>

    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
     

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Willing Workers
              </h6>
              <h4>Logo Here</h4>
            </MDBCol>

            
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Do you have Questions? Call or visit us.</h6>
              
              <p>
                <MDBIcon icon="phone" className="me-3" /> Phone: (323) 937-5950 <br></br>
                <MDBIcon icon="fax" className="me-3" /> Fax: + 01 234 567 89
              </p>

              
              
              <p>
                <MDBIcon icon="home" className="me-2" />
                4813 W. Washington Blvd.<br></br>
Los Angeles , Los Angeles 90016
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@willingworkers.com
              </p>
              
              
            </MDBCol>


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick links</h6>
              <p>
                <a href='/about' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='/programs' className='text-reset'>
                 Programs
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                 Contacts
                </a>
              </p>
             
            </MDBCol>

          </MDBRow>
        </MDBContainer>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            Willing Workers
        </a>
      </div>
      </section>

     
    </MDBFooter>
    </Styles>
  );
}