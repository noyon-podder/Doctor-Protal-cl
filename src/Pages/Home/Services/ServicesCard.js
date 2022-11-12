import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import DetailsCard from './DetailsCard';

const ServicesCard = () => {

    const serviceInformation = [
        {id: 1, serviceImage: fluoride, title: "Fluoride Treatment", description: "your teeth is so dirty. clean your teeth as soon as possible"},
        {id: 2, serviceImage: cavity, title: "Cavity Feeling", description: "Your teeth so many cavity attack. Emergency you need a doctor suggestion"},
        {id: 3, serviceImage: whitening, title: "Teeth Whitening", description: "your teeth is so dirty. clean your teeth as soon as possible"},
    ]
    return (
        <div className='my-20'>
            <h3 className='text-secondary text-center text-2xl font-bold'>Our Services</h3>
            <p className='text-neutral text-center text-3xl mt-2'>Services We Provided</p>


           <div className='mt-10 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
             {
                serviceInformation.map(service => <DetailsCard
                  key={service.id}
                  service={service}
                ></DetailsCard>)
             }
           </div>
        </div>
    );
};

export default ServicesCard;