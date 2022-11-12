import React from 'react';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import MakeAppointement from '../MakeAppointement/MakeAppointement';
import ServicesCard from '../Services/ServicesCard';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Information/>
            <ServicesCard/>
            <MakeAppointement/>
            <Testimonial/>
        </div>
    );
};

export default Home;