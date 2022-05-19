import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const ChackoutForm = ({ appointment }) => {
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements()
    const [cartError, setCartError] = useState('')

    console.log(appointment.price)
    const { price } = appointment;

    useEffect(() => {
        fetch('https://radiant-plains-45803.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')} `
            },
            body: JSON.stringify({ price })

        })

            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    console.log(data.clientSecret)
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card

        })

        if (error) {
            setCartError(error?.message)
        } else {
            setCartError('')
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button type="submit" disabled={!stripe || !clientSecret} class="btn btn-primary">Buy Now</button>

            </form>

            <div>
                {
                    cartError && <p className='text-red-400'> {cartError} </p>
                }
            </div>
        </div>
    );
};

export default ChackoutForm;