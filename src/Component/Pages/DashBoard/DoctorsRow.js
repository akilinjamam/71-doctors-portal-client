import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
    const { name, speciality, email, img } = doctor;


    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt='' />
                </div>
            </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={() => setDeleteDoctor(doctor)} for="delete-confirm-modal" class="btn  btn-xs">delete</label>



            </td>
        </tr>
    );
};

export default DoctorsRow;