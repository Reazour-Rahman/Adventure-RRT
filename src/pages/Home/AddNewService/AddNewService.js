import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './AddedNewService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

import {useHistory} from "react-router-dom";

const AddNewService = () => {
    let history = useHistory();
    const {user} = useAuth()
    const [places, setPlaces] = useState([]);
    const { register, handleSubmit , reset} = useForm();

    /* take input and send to server ..........*/
    const onSubmit = data => {
        console.log(data)
        axios.post('https://tourism-server-assignment.herokuapp.com/places', data)
        .then(res => {
            if (res.data.insertedId) {
                reset();
                alert("Added")
                history.push('/home')
            }
        })
    };


    return (
        <main className="background-computer pt-4" style={{backgroundColor:"#EAEEF3"}}>
            <p className="fw-bold fs-1 d-flex justify-content-center text-success">ADD NEW SERVICES</p>
            <section className="row row-cols-1 row-cols-xl-2 justify-content-between align-items-center px-0 mx-0 mx-2"> 

                <div className="col">
                   <form onSubmit={handleSubmit(onSubmit)} className="row row-cols-1 row-cols-md-2">
                        <section className="d-flex justify-content-center">
                            <div>
                            <Box className=""
                                    sx={{
                                        width: 350,
                                        maxWidth: '100%',
                                    }}
                                    >
                                    <TextField type="text" required {...register("title")}  fullWidth label="Location Name*" id="fullWidth" />
                                </Box>
                                <br />
                                <Box
                                    sx={{
                                        width: 350,
                                        maxWidth: '100%',
                                    }}
                                    >
                                    <TextField required {...register("cost")} type="number" fullWidth label="Price*" id="fullWidth" />
                                </Box>
                                <br />
                                <Box
                                    sx={{
                                        width: 350,
                                        maxWidth: '100%',
                                    }}
                                    >
                                    <TextField  required {...register("flag")} type="text" fullWidth label="Country Flag URL*" id="fullWidth" />
                                </Box>
                                <br />
                                <Box
                                    sx={{
                                        width: 350,
                                        maxWidth: '100%',
                                    }}
                                    >
                                    <TextField type="text" required {...register("image")} fullWidth label="Thumbnail Image URL***" id="fullWidth" />
                                </Box>
                                <br />
                                <Box
                                    sx={{
                                        width: 350,
                                        maxWidth: '100%',
                                    }}
                                    >
                                    <TextField type="text" {...register("image1")} fullWidth label="Thumbnail Image URLTwo" id="fullWidth" />
                            </Box>
                            </div>
                        </section>
                        <section className="d-flex justify-content-center">
                            <div>
                            <Box
                                sx={{
                                    width: 350,
                                    maxWidth: '100%',
                                }}
                                >
                                <TextField type="text" {...register("image2")} fullWidth label="Thumbnail Image URLThree" id="fullWidth" />
                            </Box>
                            <br />
                            <Box
                                sx={{
                                    width: 350,
                                    maxWidth: '100%',
                                }}
                                >
                                <TextField type="text" required {...register("desc")} fullWidth label="DescriptionOne*" id="fullWidth" />
                            </Box><br />
                            <Box
                                sx={{
                                    width: 350,
                                    maxWidth: '100%',
                                }}
                                >
                                <TextField type="text" {...register("desc1")} fullWidth label="DescriptionTwo" id="fullWidth" />
                            </Box><br />
                            <Box
                                sx={{
                                    width: 350,
                                    maxWidth: '100%',
                                }}
                                >
                                <TextField type="text" {...register("desc2")} fullWidth label="DescriptionThree" id="fullWidth" />
                            </Box> 
                            <Button type="submit" sx={{width: 350,maxWidth: '100%', height:63,}} style={{marginTop:"22px"}} className="py-0" variant="contained">Continue</Button>
                            </div>
                        </section>
                    </form>
                </div>

                <div className="col">
                    <img width="100%" src="https://cdn-icons.flaticon.com/png/128/3166/premium/3166134.png?token=exp=1635601176~hmac=7995d18ea7623aded5c12239665c8120" alt="" />
                </div>

            </section>
        </main>
    );
};

export default AddNewService;