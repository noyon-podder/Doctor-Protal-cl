import React from 'react';
import quote from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            profile: people1,
            author: "Jemmy Harry",
            address: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"  
        },
        {
            id: 2,
            profile: people2,
            author: "Kane Guptill",
            address: "Auckland",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"  
        },
        {
            id: 3,
            profile: people3,
            author: "Steven Finch",
            address: "Sydney",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"  
        },
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
              <div >
              <h3 className='text-secondary text-2xl font-bold'>Testimonials</h3>
            <p className='text-neutral text-3xl mt-2'>What our patient says</p>
              </div>
              <img src={quote} alt="" className='w-32'/>
            </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {
                testimonialData.map(testimonial => <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                ></TestimonialCard>)
            }
          </div>
            
            
        </section>
    );
};

export default Testimonial;