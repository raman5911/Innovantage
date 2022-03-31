import React from 'react';
import SetDocTitle from "../utils/SetDocTitle";

import { Container } from 'react-bootstrap';

import Image404 from "../assets/images/page_not_found.png";

function PageNotFound() {
  return (
    <div className='page-not-found'>
      <SetDocTitle title="Page Not Found" />    
      
      <Container>
        <h1>Sorry, this page is not available</h1>
        <h5>The link you followed may be broken or the page may have been removed.</h5>

        <img src={Image404} alt="Page Not Found" />
      </Container>
    </div>
  )
}

export default PageNotFound