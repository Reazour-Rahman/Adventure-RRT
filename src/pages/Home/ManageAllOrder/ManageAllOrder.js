
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Button from '@mui/material/Button';
import { LinearProgress } from '@mui/material';
import './ManageAllOrder.css'







const ManageAllOrder = () => {


    const [orders, setOrders] = useState([])
    const [deleted, setDeleted] = useState(null);

    const { user } = useAuth()

    useEffect(() => {
        fetch('https://tourism-server-assignment.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [deleted])


    /* Delete booking */

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you confirm to cancel booking?');
        if (proceed) {
            const url = `https://tourism-server-assignment.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount) {
                        setDeleted(true)
                    } else {
                        setDeleted(false)
                    }
                })
        }
    }

    /* update */

    const [statusBooking, setStatusBooking] = useState("")
    const booking = "Approved" ;

    const handleUpdateUser = (id) =>{
        const url = `https://tourism-server-assignment.herokuapp.com/orders/${id}`;
        fetch(url, {
            method : 'PUT',
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(booking)
        })
    }


    return (
        <main style={{backgroundColor:"#B6D0E2"}}>
            <div className="container">
            <div className='py-4 row justify-content-center' >
            <div className='custom-width'>
                {orders.length < 1 ?
                
                
                <div className="">
                    <LinearProgress /> <br />
                    <div>
                    <LinearProgress color="secondary" /> <br />
                    <LinearProgress color="success" /><br />
                    <LinearProgress color="inherit" /><br />
                    </div>
                    <div>
                    <LinearProgress color="secondary" /><br />
                    <LinearProgress color="success" /><br />
                    <LinearProgress color="inherit" /><br />
                    </div>
                    <div>
                    <LinearProgress color="secondary" /><br />
                    <LinearProgress color="success" /><br />
                    <LinearProgress color="inherit" /><br />
                    </div>
                    <div>
                    <LinearProgress color="secondary" /><br />
                    <LinearProgress color="success" /><br />
                    <LinearProgress color="inherit" /><br />
                    </div>
                    <div>
                    <LinearProgress color="secondary" /><br />
                    <LinearProgress color="success" /><br />
                    <LinearProgress color="inherit" /><br />
                    </div>
                    <div>
                    <LinearProgress color="secondary" /><br />
                    <LinearProgress color="success" /><br />
                    <LinearProgress color="inherit" /><br />
                    </div>
                    <div>
                    <LinearProgress color="secondary" /><br />
                    <LinearProgress color="success" /><br />
                    <LinearProgress color="inherit" /><br />
                    </div>
                </div>
                
                
                
                :orders.map(order =>
                        <div style={{backgroundColor:"#008080"}} class="card mb-3 text-white">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src={order.thumb} class="img-fluid rounded-start h-100" alt="..."/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title mb-1"><img className="me-4" style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/128/4693/4693265.png" alt="" />{order.title}</h5>
                              <p class="card-title mb-1"><img className="me-4" style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" />{order.email}</p>
                              <p class="card-text mb-1"><img className="me-4" style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/128/2555/2555572.png" alt="" />{order.destination}</p>
                              <div>
                              <p class="card-text mb-1"><img className="me-4" style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/128/3652/3652191.png" alt="" />{order.date}</p>
                              <div >
                                <p class="card-text mb-1"><img className="me-4" style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/128/1614/1614997.png" alt="" />{order.quantity}</p>
                              </div>
                              <div className="d-flex justify-content-between">


                                    {order.status == "pending" ? 
                                            <Button variant="contained"
                                                // onClick={() => handleUpdateUser(order._id)} /* THis is not working */
                                                className="text-white rounded-0 bg-danger">
                                                Pending  
                                                <i class="far fa-check-circle fs-5 ms-2"></i>
                                            </Button>
                                        
                                        :
                                        
                                        <Button variant="contained"
                                            className="text-white rounded-0 bg-success">
                                            Approved  
                                    
                                            <i class="far fa-check-circle fs-5 ms-2"></i>
                                        </Button>
                                    }

                                    <Button variant="contained"
                                        onClick={() => handleDeleteOrder(order._id)}
                                        className="text-white rounded-0 bg-dark"> Delete
                                        <i class="far fa-trash-alt fs-5 ms-2"></i>
                                    </Button>



                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                }
            </div>
        </div>
        </div>
        </main>
    );
};

export default ManageAllOrder;