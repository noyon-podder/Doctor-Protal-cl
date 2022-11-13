import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <div>
             <p className='text-secondary text-3xl font-semibold text-center'>You Picked a Date {format(selectedDate, "PP")}</p>
        </div>
    );
};

export default AvailableAppointment;