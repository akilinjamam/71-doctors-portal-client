import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selected }) => {
    return (
        <div>
            <p className='ml-6 text-primary font-bold mt-10'>Available Appointments On {format(selected, 'PP')}.</p>
        </div>
    );
};

export default AvailableAppointment;