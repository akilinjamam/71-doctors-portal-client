import { format } from 'date-fns';
import React from 'react';

const Modal = ({ treatment, selected, setTreatment }) => {

    const { name, time } = treatment
    console.log(treatment)


    const handleBook = (event) => {
        event.preventDefault()

        const booking = event.target.time.value;
        const date = event.target.date.value
        console.log({ booking, date })
        setTreatment(null)

    }
    return (
        <div>
            <input type="checkbox" id="modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg mb-2">Booking for:  {name}</h3>

                    <form onSubmit={handleBook} action="">
                        <select name='time' class="select select-primary w-full max-w-xs mb-3">

                            {
                                time.map(time => <option value={time}>{time}</option>)
                            }

                        </select>
                        <input type="text" name='date' disabled placeholder="Type here" value={format(selected, 'PP')} class="input mb-3 input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input mb-3 input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input mb-3 input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input mb-3 input-bordered input-success w-full max-w-xs" /><br /><br />
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
<label for="my-modal-6" class="btn modal-button">open modal</label>

*/


