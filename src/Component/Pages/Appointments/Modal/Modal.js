import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';


import { toast } from 'react-toastify';


const Modal = ({ treatment, selected, setTreatment, refetch }) => {

    const { name, time, _id } = treatment
    console.log(treatment)

    const [user] = useAuthState(auth)


    const handleBook = (event) => {
        event.preventDefault()

        const slots = event.target.time.value;
        const date = event.target.date.value;
        const formattedDate = format(selected, 'PP')
        console.log({ slots, date })

        const bookings = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slots,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {


                console.log(data)
                if (data.success) {
                    toast(`Appointment is set ${formattedDate} at ${slots} `)


                }

                else {
                    toast.error(`Appointment is already set ${data.bookings?.date} at ${data.bookings?.slots} `)


                }

                refetch()
                setTreatment(null)


            })




    }
    return (
        <div>


            <input type="checkbox" id="modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-2">Booking for:  {name}</h3>

                    <form onSubmit={handleBook} action="">
                        <select name='time' className="select select-primary w-full max-w-xs mb-3">

                            {
                                time.map(time => <option key={time._id} value={time}>{time}</option>)
                            }

                        </select>
                        <input type="text" name='date' disabled value={format(selected, 'PP')} className="input mb-3 input-bordered input-success w-full max-w-xs" />
                        <input type="text" disabled value={user?.displayName} className="input mb-3 input-bordered input-success w-full max-w-xs" />
                        <input type="text" disabled value={user?.email} className="input mb-3 input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="Type Phone Number" name="phone" className="input mb-3 input-bordered input-success w-full max-w-xs" /><br /><br />
                        <input type="submit" value="submit" className='btn btn-primary w-full max-w-xs' />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Modal;




