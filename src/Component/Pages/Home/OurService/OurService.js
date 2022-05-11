import React from 'react';

const OurService = ({ img, title }) => {
    return (
        <div className='lg:w-1/3 sm:w-3/3 md:w-2/3 mx-auto'>
            <div className='drop-shadow-md   border border-gray-100 p-5 m-5 rounded-lg'>
                <img className='mx-auto ' src={img} alt="" />
                <br />
                <p> {title} </p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, labore.</p>

            </div>
        </div>
    );
};

export default OurService;