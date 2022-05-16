import React from 'react';

const AppointmentCart = ({ service, setTreatment }) => {

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body ">
                    <h2 className="text-xl text-primary">{service.name}</h2>
                    <p>{service.time.length > 0 ? <span>{service.time[0]}</span> : <span className='text-red-600'>Try another date</span>}</p>
                    <p> {service.time.length > 0 ? <span> {service.time.length} space available </span> : <span> {service.time.length} space available </span>} </p>
                    <div className="card-actions justify-center">


                        <label onClick={() => setTreatment(service)} disabled={service.time.length === 0} for="modal" className="btn btn-primary text-white modal-button">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AppointmentCart;