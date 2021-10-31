import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import TitlebarImageList from '../Hosting/Hosting';
import Offers from '../Offers/Offers';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Destination></Destination>
            <TitlebarImageList></TitlebarImageList>
        </div>
    );
};

export default Main;