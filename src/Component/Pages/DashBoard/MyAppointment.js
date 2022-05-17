import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyAppointment = () => {
    const navigate = useNavigate()
    const [appointment, setAppointment] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`https://radiant-plains-45803.herokuapp.com/bookings?patient=${user.email}`, {

                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')} `
                }

            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => setAppointment(data))
        }
    }, [user])
    return (
        <div>
            <br />
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Patient Name</th>
                            <th>Service For</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointment.map((a, index) => <tr key={a._id} className="active">

                                <td> {index + 1} </td>
                                <td> {a.patientName} </td>
                                <td> {a.treatment} </td>
                                <td> {a.slots} </td>
                                <td> {a.date} </td>


                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;