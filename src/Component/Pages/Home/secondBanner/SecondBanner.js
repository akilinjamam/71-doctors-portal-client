import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const SecondBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className=" rounded-lg shadow-2xl lg:w-1/3" />
                    <div className='text-left  lg:ml-20' >
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;