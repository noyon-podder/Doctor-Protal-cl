import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";


const Information = () => {
    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 mt-10'>
            <div className='flex items-center bg-gradient-to-r from-primary to-secondary py-10 px-5 rounded-xl'>
                <img src={clock} alt="" className='mr-5'/>
                <div>
                    <h3 className='text-white font-bold mb-3 text-2xl'>Opening Hour</h3>
                    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, voluptates.</p>
                </div>
            </div>
            <div className='flex items-center bg-neutral py-10 px-5 rounded-xl'>
                <img src={marker} alt="" className='mr-5'/>
                <div>
                    <h3 className='text-white font-bold mb-3 text-2xl'>Opening Hour</h3>
                    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, voluptates.</p>
                </div>
            </div>
            <div className='flex items-center bg-gradient-to-r from-primary to-secondary py-10 px-5 rounded-xl'>
                <img src={phone} alt="" className='mr-5'/>
                <div>
                    <h3 className='text-white font-bold mb-3 text-2xl'>Opening Hour</h3>
                    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, voluptates.</p>
                </div>
            </div>
        </div>
    );
};

export default Information;