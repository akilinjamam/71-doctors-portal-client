import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer'
import AppoinmentBanner from './AppointmentBanner/AppoinmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Apointments = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner selected={selected} setSelected={setSelected} ></AppoinmentBanner>
            <AvailableAppointment selected={selected}  ></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Apointments;