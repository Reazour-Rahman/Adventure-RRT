
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, LinearProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const MyOrder = () => {


    /* Confirmation Modal */
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    /* ________________________________ */
    /* ________________________________ */




    const [orders, setOrders] = useState([])
    const [deleted, setDeleted] = useState(null);

    const { user } = useAuth()

    useEffect(() => {
        fetch('https://tourism-server-assignment.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [deleted])

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


    return (
        <div className='my-4'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2'>
                {orders.length < 1 ?
                
                <div className="">
                    <div>
                    <LinearProgress color="secondary" />
                    <LinearProgress color="success" />
                    <LinearProgress color="inherit" />
                    </div>
                    <div>
                    <LinearProgress color="secondary" />
                    <LinearProgress color="success" />
                    <LinearProgress color="inherit" />
                    </div>
                    <div>
                    <LinearProgress color="secondary" />
                    <LinearProgress color="success" />
                    <LinearProgress color="inherit" />
                    </div>
                    <div>
                    <LinearProgress color="secondary" />
                    <LinearProgress color="success" />
                    <LinearProgress color="inherit" />
                    </div>
                </div>
                
                :
                
                orders.map(order => order.email === user.email &&
                        <div className='col'>

                            <section>
                                <Card style={{width:"100%"}} sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="p">
                                        {order.title} 
                                        </Typography>
                                        <Typography variant="p" color="text.secondary" component="div">
                                        {order.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {order.date}
                                        </Typography>
                                        </CardContent>
                                        <Button onClick={() => handleDeleteOrder(order._id)}  className="rounded-0" variant="outlined" startIcon={<DeleteIcon />}>
                                            Cancel Booking
                                        </Button>
                                    </Box>
                                    <CardMedia
                                        className="ms-5"
                                        component="img"
                                        sx={{ width: 151, height: 190 }}
                                        image={order.thumb}
                                        alt="Live from space album cover"
                                    />
                                </Card>
                            </section>
                        </div>
                    
                    )
                }
            </div>
        </div>
    );
};

export default MyOrder;


/* 
<LinearProgress color="secondary" />
<LinearProgress color="success" />
<LinearProgress color="inherit" />

*/