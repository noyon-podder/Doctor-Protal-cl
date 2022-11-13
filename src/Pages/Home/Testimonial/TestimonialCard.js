import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { author, profile, address, review } = testimonial;
  return <div className="card shadow-xl py-10 px-5">
    <p className="mb-4">{review}</p>
    <div className="flex gap-4 mt-6 items-center">
    <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
    <img src={profile} alt=""/>
  </div>
        <div>
            <h4 className="text-secondary font-2xl font-bold">{author}</h4>
            <span>{address}</span>
        </div>
    </div>
  </div>;
};

export default TestimonialCard;
