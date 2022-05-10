import React from 'react';
import chair from '../../../../assets/images/chair.png'
import background from '../../../../assets/images/bg.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${background})` }} class="hero min-h-screen  text-left">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='lg:w-1/2 sm:w-2/2' src={chair} />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;