import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Modal = ({ treatment, selected, setTreatment }) => {

    const { name, time } = treatment
    console.log(treatment)

    const [user] = useAuthState(auth)


    const handleBook = (event) => {
        event.preventDefault()

        const booking = event.target.time.value;
        const date = event.target.date.value
        console.log({ booking, date })
        setTreatment(null)

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
                                time.map(time => <option value={time}>{time}</option>)
                            }

                        </select>
                        <input type="text" name='date' disabled value={format(selected, 'PP')} className="input mb-3 input-bordered input-success w-full max-w-xs" />
                        <input type="text" disabled value={user?.displayName} className="input mb-3 input-bordered input-success w-full max-w-xs" />
                        <input type="text" disabled value={user?.email} className="input mb-3 input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="Type Phone Number" className="input mb-3 input-bordered input-success w-full max-w-xs" /><br /><br />
                        <input type="submit" value="submit" className='btn btn-primary w-full max-w-xs' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;

/*

<!-- The button to open modal -->
<label htmlFor="my-modal-6" className="btn modal-button">open modal</label>

*/


