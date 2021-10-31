import { Button } from '@mui/material';
import React from 'react';
import Control from '../../Control/Control';
import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-image">
          <Control></Control>
          <div style={{marginTop:"22%"}} className="d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center">
                <p className="fw-bold">Not sure where to go? Perfect.</p>
                <Button style={{color:"#C6017E"}} className="bg-white custom-color shadow rounded-pill py-3 px-4" variant="contained">I am flexible</Button>
              </div>
          </div>
        </div>
    );
};

export default Banner;

