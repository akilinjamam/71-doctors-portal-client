import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import AppointmentCart from '../AppointmentCart';
import Modal from '../Modal/Modal';


const AvailableAppointment = ({ selected }) => {

    const formattedDate = format(selected, 'PP')
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://radiant-plains-45803.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    /*   useEffect(() => {
          fetch(`https://radiant-plains-45803.herokuapp.com/available?date=${formattedDate}`)
              .then(res => res.json())
              .then(data => setServices(data))
      }, [formattedDate]); */



    return (
        <div>
            <p className='ml-6 text-primary font-bold mt-10'>Available Appointments On {format(selected, 'PP')}.</p>
            <br /><br />

            <div className='grid lg:grid-cols-3 sm:grid-cols gap-5'>
                {
                    services?.map(service => <AppointmentCart setTreatment={setTreatment} key={service._id} service={service} ></AppointmentCart>)
                }
            </div>

            <div>
                {
                    treatment && <Modal setTreatment={setTreatment} selected={selected} treatment={treatment} refetch={refetch} ></Modal>
                }
            </div>

        </div>
    );
};

export default AvailableAppointment;