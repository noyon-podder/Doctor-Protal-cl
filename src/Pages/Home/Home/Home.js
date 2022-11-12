import React from 'react';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import MakeAppointement from '../MakeAppointement/MakeAppointement';
import ServicesCard from '../Services/ServicesCard';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Information/>
            <ServicesCard/>
            <MakeAppointement/>
        </div>
    );
};

export default Home;