import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const AllUser = () => {

    const { data: user, isLoading, refetch } = useQuery('user', () => fetch('http://localhost:5000/user', {
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

        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')} `
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('successfully made an Admin');
                refetch();
            })
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
                                    <td>{u.role !== 'admin' && <button onClick={() => makeAdmin(u.email, refetch)} class="btn btn-xs">admin</button>}</td>
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