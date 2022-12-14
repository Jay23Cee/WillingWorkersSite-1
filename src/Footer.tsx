import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';





export const Footer=()=> {
  const navigate = useNavigate()

  return (


    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
     

      <section className='footer'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Willing Workers
              </h6>
            
            </MDBCol>

            
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Do you have Questions? Call or visit us.</h6>
              
              <p>
                <MDBIcon icon="phone" className="me-3" /> Phone: (323) 937-5950 <br></br>
                <MDBIcon icon="fax" className="me-3" /> Fax: + 01 234 567 89
              </p>

              
              
              <p>
                <MDBIcon icon="home" className="me-2" />
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI('4813 W. Washington Blvd., Los Angeles, Los Angeles 90016')}`} target="_blank">
  4813 W. Washington Blvd.<br></br>
  Los Angeles , Los Angeles 90016
</a>
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-4" />
                info@willingworkers.com
              </p>
              
              
            </MDBCol>


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick links</h6>
              <p>
                <a  onClick={() => navigate("/about")} className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a  onClick={() => navigate("/programs")} className='text-reset'>
                 Programs
                </a>
              </p>
              <p>
                <a  onClick={() => navigate("/contact")} className='text-reset'>
                 Contacts
                </a>
              </p>
             
            </MDBCol>

          </MDBRow>
        </MDBContainer>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        ?? 2021 Copyright:
        <a className='text-reset fw-bold'  onClick={() => navigate("/home")}>
            Willing Workers
        </a>
      </div>
      </section>

     
    </MDBFooter>
   
  );
}