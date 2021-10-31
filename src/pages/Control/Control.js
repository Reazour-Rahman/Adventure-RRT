import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Control = () => {
    return (
        <div>
            <div>
                <div className="d-flex justify-content-end">
                    <div style={{width:"60px", fontSize:"14px"}}>
                        <div className="position-fixed">
                            <div class="accordion-item">
                                <p class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed fs-6 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <i class="fas fa-directions text-success"></i>
                                </button>
                                </p>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <a href="#top"><Button class="accordion-body border-0 bg-white"><i class="fas fa-arrow-up"></i></Button></a>
                                <Link to=""><Button class="accordion-body border-0 bg-white text-white"><i class="fab fa-facebook-square text-primary fs-5"></i></Button></Link>
                                <Link to="/home"><Button class="accordion-body border-0 bg-success text-white"><i class="fas fa-home"></i></Button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Control;