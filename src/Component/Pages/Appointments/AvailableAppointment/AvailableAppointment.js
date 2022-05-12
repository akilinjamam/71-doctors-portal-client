import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCart from '../AppointmentCart';
import Modal from '../Modal/Modal';


const AvailableAppointment = ({ selected }) => {

    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);



    return (
        <div>
            <p className='ml-6 text-primary font-bold mt-10'>Available Appointments On {format(selected, 'PP')}.</p>
            <br /><br />

            <div className='grid lg:grid-cols-3 sm:grid-cols gap-5'>
                {
                    services.map(service => <AppointmentCart setTreatment={setTreatment} key={service._id} service={service} ></AppointmentCart>)
                }
            </div>

            <div>
                {
                    treatment && <Modal setTreatment={setTreatment} selected={selected} treatment={treatment} ></Modal>
                }
            </div>

        </div>
    );
};

export default AvailableAppointment;