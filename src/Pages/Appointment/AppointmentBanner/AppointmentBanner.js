import React from 'react';
import chair from "../../../assets/images/chair.png"
import bgImage from "../../../assets/images/bg.png"
import { DayPicker } from 'react-day-picker';



const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  
    return (
        <header>
           <div className="hero py-20" style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover"
            }}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} alt="Dentist Chair" className="w-1/2 rounded-lg shadow-2xl" />
    <div className='mr-10'>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />
     
    </div>
  </div>
</div>
        </header>
    );
};

export default AppointmentBanner;