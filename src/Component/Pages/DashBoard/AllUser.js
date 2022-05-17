import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const AllUser = () => {

    const { data: user, isLoading, refetch } = useQuery('user', () => fetch('https://radiant-plains-45803.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')} `
        }
    }).then(res => res.json()))

    if (isLoading) {

        return <Loading></Loading>
    }



    // ------------------------------------------------------------------



    const makeAdmin = (email, refetch) => {

        fetch(`https://radiant-plains-45803.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')} `
            },
        })
            .then(res => {

                if (res.status === 403) {
                    toast.error('Failed to make an Admin. You must have to be an Admin');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    toast.success('successfully made an Admin');
                    refetch();
                }
            })
    }


    const handleRolling = () => {


        toast.error('alredy rolling as Admin')

    }


    return (
        <div>
            <h2 className='text-primary uppercase font-bold' >this is all user</h2>

            <div>
                <br />
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Users Email</th>
                                <th></th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                user.map((u, index) => <tr key={u._id} className="active">

                                    <td> {index + 1} </td>
                                    <td> {u.email} </td>
                                    <td>{u.role !== 'admin' ? <button onClick={() => makeAdmin(u.email, refetch)} class="btn btn-xs">Make Admin</button> : <button onClick={handleRolling} class="btn btn-xs bg-red-600 border-0">Roling as Admin</button>}</td>
                                    <td><button class="btn btn-xs">delete</button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;