import React from "react";
import heroImage from "../../../assets/images/chair.png";
import bgImage from "../../../assets/images/bg.png"
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero lg:py-20 sm:py-10" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={heroImage}
          alt="heroImage"
          className="rounded-lg shadow-2xl lg:w-1/2"
        />
        <div>
          <h1 className="text-5xl font-bold sm:mt-15">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
