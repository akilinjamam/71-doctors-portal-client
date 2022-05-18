import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const AddDoctors = () => {

    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { data: service, isLoading } = useQuery('service', () => fetch('http://localhost:5000/service').then(res => res.json()))


    // 3 ways to store images

    // * Third party storage // free open public storage is ok for practice projects 
    // * your own storage in your own server (file server)
    // * Database : mongodb

    // yup is for file validation and for react hook form



    const imageStorageKey = 'a7d23ad727734bb709b70dc5aa33543f';

    if (isLoading) {
        return <Loading></Loading>
    }


    const onSubmit = async data => {
        console.log(data)

        const image = data.image[0];
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        const formData = new FormData();
        formData.append('image', image);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('imgbb', result);

                if (result.success) {
                    const img = result.data.url;

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img

                    }

                    //sending this file to database mongodb

                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)

                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('doctors', inserted);

                            if (inserted.insertedId) {
                                toast.success('doctors added successfully')
                                reset()
                            } else {
                                toast.error('can not add doctor');
                            }
                        })
                }
            })



    };


    return (
        <div>
            <h2 className='text-3xl'>Add a New Doctor</h2>

            {/* Form */}

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input
                        type="name"
                        placeholder="Type name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is required'
                            }

                        })}
                    />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input
                        type="email"
                        placeholder="Type Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'provide a valid email'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                    </label>
                </div>





                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Speciality</span>

                    </label>
                    <select {...register('speciality')} class="select input-bordered w-full max-w-xs">
                        {
                            service.map(s => <option key={s._id} value={s.name} > {s.name} </option>)
                        }


                    </select>

                </div>

                <br />


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>

                    </label>
                    <input
                        type="file"
                        placeholder="please import photo"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'name is required'
                            }

                        })}
                    />
                </div>



                <input className='btn btn-primary w-full max-w-xs' type="submit" value="signup" />

                <p>Have an Account in Doctors portal ? <Link className='text-primary' to='/login'>Login</Link> </p>


            </form>
        </div>
    );
};

export default AddDoctors;