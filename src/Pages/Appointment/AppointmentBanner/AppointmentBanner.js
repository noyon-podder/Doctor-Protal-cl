import React from "react";
import chair from "../../../assets/images/chair.png";
import bgImage from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div
        className="hero lg:py-20 sm:py-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="Dentist Chair"
            className="rounded-lg shadow-2xl lg:w-1/2"
          />
          <div className="mr-10 lg:w-1/2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
