import React from "react";


const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div>
      <div className="card lg: w-[415px] bg-base-100 shadow-xl">
        <div className="card-body text-center p-10">
          <h2 className="text-2xl text-secondary font-bold text-center mb-3">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try another day."}</p>
          <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
          <div className="card-actions justify-center mt-3">

            <label htmlFor="booking-modal" 
             disabled={slots.length === 0}
              onClick={() => setTreatment(appointmentOption)}
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-5 font-semibold">Book Appointment</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
