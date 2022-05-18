import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctor = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null)

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <br />
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((d, index) => <DoctorsRow refetch={refetch} index={index} key={d._id} doctor={d} setDeleteDoctor={setDeleteDoctor} ></DoctorsRow>)
                        }

                        {
                            deleteDoctor && <DeleteConfirmModal refetch={refetch} deleteDoctor={deleteDoctor} setDeleteDoctor={setDeleteDoctor}></DeleteConfirmModal>
                        }

                    </tbody>
                </table>

                <div style={{ margin: 'auto' }}>
                    {
                        doctors.length === 0 && <p className='text-gray-400 text-center'>Doctors not found</p>
                    }
                </div>
            </div>

        </div>


    );
};

export default ManageDoctor;