import React from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    let showError;

    if (gUser || user) {
        console.log(gUser || user)
    }
    if (gLoading || loading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || uError) {

        showError = <p className='text-red-500'> {error?.message || gError?.message || uError?.message} </p>
    }


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        navigate('/')
        console.log(data)

    };



    const handleSignInWithGoogle = () => {

        signInWithGoogle()

    }









    return (

        <div className='flex justify-center items-center h-screen'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <p className='text-2xl text-primary'>Sign Up</p>

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


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Type Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 charecter or longer'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                            </label>
                        </div>
                        {showError}
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value="signup" />

                        <p>Have an Account in Doctors portal ? <Link className='text-primary' to='/login'>Login</Link> </p>


                    </form>
                    <div className="divider">OR</div>
                    <div className="card-actions justify-center">
                        <button onClick={handleSignInWithGoogle} className="btn btn-accent">Sign In With Google</button>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default SignUp;