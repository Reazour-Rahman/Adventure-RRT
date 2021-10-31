import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './information.css'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../../../hooks/useAuth';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';


/* Modal */
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const RegisterVolunteer = () => {
    const {user} = useAuth()
    const [places, setPlaces] = useState([]);
    const { register, handleSubmit , reset} = useForm();
    const {detailID} = useParams();


    useEffect(() =>{
        fetch('https://tourism-server-assignment.herokuapp.com/places')
        .then(res => res.json())
        .then(data => setPlaces(data))
    },[])

    /* take input and send to server */
    const onSubmit = data => {
        console.log(data)
        axios.post('https://tourism-server-assignment.herokuapp.com/orders', data)
        .then(res => {
            if (res.data.insertedId) {
                reset();

                /* Modal gonna open */
                setOpen(true);
            }
        })
    };


    /* Modal */
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    

    return (
        <div className="" style={{backgroundColor:"#EAEEF3"}}>
            {places.map(place => place._id == detailID ?
                <main className="">
                   
                    <div className="d-flex justify-content-center py-4">
                        <div className=" border-1 border p-5 form form bg-white">
                        <h3 className="fw-bold"><span className="text-success">Book</span> Now</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                required
                                {...register("name")}
                                className="w-100 mt-4"
                                id="standard-search"
                                value={user.displayName}
                                type="search"
                                variant="standard"
                            />

                            <Tooltip title="!!! You can't change this" arrow>
                                <TextField
                                    required
                                    {...register("email")}
                                    className="w-100 mt-4"
                                    id="standard-search"
                                title="ff"
                                    value={user.email}
                                    type="email"
                                    variant="standard"
                                />
                            </Tooltip>

                            <TextField
                            required
                                {...register("number", { required: true, minLength: 10, maxLength: 13 })}
                                className="w-100 mt-4"
                                id="standard-search"
                                label="Mobile Number"
                                type="search"
                                variant="standard"
                            />                     
                            <TextField
                            required
                            {...register("date")}
                                className="w-100 mt-4"
                                id="standard-search"
                                type="date"
                                variant="standard"
                            />
                            <div className="d-flex">
                            <TextField
                            required
                                {...register("destination")}
                                className="w-100 mt-4"
                                id="standard-search"
                                label="Destination"
                                type="search"
                                variant="standard"
                            />
                            <TextField
                            required
                                {...register("quantity")}
                                className="w-100 mt-4"
                                id="standard-search"
                                label="Ticket Quantity"
                                type="number"
                                variant="standard"
                            />
                            </div>
                            <div className="d-flex">
                            <TextField
                            {...register("title")}
                                className="w-100 mt-4"
                                id="standard-search"
                                label={place.title}
                                value={place.title}
                                type="search"
                                variant="standard"
                            />
                            <TextField
                            {...register("thumb")}
                                className="w-100 mt-4 text-white"
                                id="standard-search"
                                label="Product ID"
                                readonly
                                value={place.image}
                                type="search"
                                variant="standard"
                            />
                            <TextField
                            {...register("status")}
                                className="w-100 mt-4 text-white"
                                id="standard-search"
                                label="status"
                                readonly
                                value="pending"
                                type="search"
                                variant="standard"
                            />
                            </div>
                            <input type="submit" value="Book Now" class="btn btn-success w-100 mt-4 rounded-0" />
                        </form>
                    </div>
                </div>
                <div className="">
                        <div>
                        <img style={{width:"100%", height:"500px"}} className="border border-5 border-success" src={place.image1} alt="" />
                        <img style={{width:"100%", height:"500px"}} className="border border-5 border-success" src={place.image2} alt="" />
                        <br /> <br />
                        <p>{place.desc1}</p>
                        <p>{place.desc2}...</p>
                        <p className="mb-0 pb-5">{place.desc3}...</p>
                        </div>
                    </div>
                </main>
                :<div></div>
            )}



            {/* Modal */}

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle className="text-success d-flex justify-content-between align-items-center">{`Congratulation Mr. ${user.displayName}`} <img className="ms-5 rounded" src={user.photoURL} alt="" /></DialogTitle>
                <DialogContent>
                <DialogContentText className="text-success" id="alert-dialog-slide-description">
                   Your Booking information has been submitted to database Successfully.
                   Wanna see your submission ?

                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Link to="/home"><Button onClick={handleClose}>No Man! Bring me Home</Button></Link>
                <Link to="/home"><Button onClick={handleClose}>Yes I want to see!</Button></Link>
                
                </DialogActions>
            </Dialog>

        </div>
    );
};

export default RegisterVolunteer;