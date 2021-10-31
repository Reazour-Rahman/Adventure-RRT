import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Offer from './Offer/Offer';
import './Offers.css'


/* Skelton import */
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';




const Offers = () => {
    const [places, setPlaces] = useState([]);
    useEffect(()=>{
        setTimeout(() => {
            fetch("https://tourism-server-assignment.herokuapp.com/places")
            .then(res => res.json())
            .then(data => setPlaces(data))
        },1000);
    },[])


    return (
        <section style={{backgroundColor:"#EAEEF3"}} className="p-0 pb-5">
        <div style={{marginLeft:"22px"}} className="me-3">
            <h2 className="text-success pt-5 mb-4">Live anywhere...</h2>

            <div id="elementId" className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2  row-cols-sm-1 g-4 ">


                {
                    places.length < 1?

                    <section style={{marginLeft:"31px"}} className="funTimes me-2 mt-4">
                        <main className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                            <div className="col d-flex  justify-content-center px-0">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                            <div className="col d-flex  justify-content-center">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                            <div className="col d-flex justify-content-center">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                            <div className="col d-flex  justify-content-center">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                            <div className="col d-flex  justify-content-center px-0">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                            <div className="col d-flex  justify-content-center">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                            <div className="col d-flex  justify-content-center">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                            <div className="col d-flex  justify-content-center">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                            <div className="col d-flex  justify-content-center px-0">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                            <div className="col d-flex  justify-content-center">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                            <div className="col d-flex  justify-content-center">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                            <div className="col d-flex  justify-content-center">
                            <Stack spacing={1}>
                                <div style={{width:"334px"}} className="d-flex rounded-top align-items-center justify-content-around bg-white py-3">
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <div className="">
                                        <Skeleton width={250} height={13} variant="text" />
                                        <Skeleton width={190} height={13} variant="text" />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" className="my-0" width={334} height={193} />
                                <div style={{width:"334px"}} className="d-flex mt-0 pt-0 rounded-bottom align-items-center justify-content-around bg-white py-3 mt-0">
                                    <div className="" style={{height:"147px", paddingTop:"16px", paddingBottom:"16px"}}>
                                        <Skeleton width={300} height={17} variant="text" />
                                        <Skeleton width={250} height={17} variant="text" />
                                        <Skeleton width={200} height={17} variant="text" />
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <Skeleton width={300} height={30} variant="text" />
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                            </div>
                        </main>
                    </section>:places.map(place => <Offer key={place._id} place={place}></Offer>)
                }




            </div>
        </div>
        </section>
    );
};

export default Offers;



/* 



*/