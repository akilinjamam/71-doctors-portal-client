import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {

    const { name, email } = deleteDoctor

    console.log(deleteDoctor)



    const handleDelete = (name, email) => {


        // const email = doctor.email;

        fetch(`https://radiant-plains-45803.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted `);
                    setDeleteDoctor(null)
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You sure you want to Delete Doctor {name} </h3>
                    <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn  btn-xs">Cancel</label>
                        <button onClick={() => handleDelete(name, email)} class="btn btn-xs">Delete</button>
                    </div>
                </div>
            </div>




        </div >
    );
};

export default DeleteConfirmModal;