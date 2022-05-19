import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ChackoutForm from './ChackoutForm';

const stripePromise = loadStripe('pk_test_51L15LfKpSPax7dcfMZ89vfrtxD74FXCoHQxfECkNmY4DgCTBldyhKs2dx9vlCc0pIQiGzJSekN7S6WqtaJce7q5U00394Xi0lv');


const Payment = () => {

    const { id } = useParams()
    const url = `https://radiant-plains-45803.herokuapp.com/bookings/${id}`
    const { data: appointment, isLoading } = useQuery(['bookings', id], () => fetch(url, {
        method: 'GET',
        headers: {

            'authorization': `Bearer ${localStorage.getItem('accessToken')} `

        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(appointment)

    return (
        <div>
            <h2>please pay for : {id} </h2>

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col ">


                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">{appointment.treatment} </h2>
                            <p className='font-bold'>Hellow, {appointment.patientName}  </p>
                            <p>Your Appointment: <span className='text-red-900'> {appointment.date}</span> at {appointment.slots} </p>
                            <p>Please Pay: ${appointment.price} </p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>


                    </div>


                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <ChackoutForm appointment={appointment} />
                            </Elements>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;