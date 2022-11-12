import React from "react";
import doctor from "../../../assets/images/doctor.png"
import appointment from "../../../assets/images/appointment.png"
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointement = () => {
  return (
    <section>
      <div className="hero" style={{backgroundImage: `url(${appointment})`}}>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor} alt=""
            className="-mt-32 hidden md:block w-1/2 rounded-lg "
          />
          <div>
            <h3 className="font-bold text-xl text-primary">Appointment</h3>
            <h1 className="text-4xl font-bold text-white ">Make an appointment Today</h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointement;
