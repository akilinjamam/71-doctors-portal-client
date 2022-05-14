import React from 'react';

const InfoCard = ({ img, bgClass, title }) => {
    return (
        <div>
            <div className={`card lg:w-96 sm:w-80 ${bgClass} text-primary-content m-2`} >
                <div className="flex p-7">

                    <div>
                        <img className='w-fit' src={img} alt="" />
                    </div>

                    <div className='ml-5 text-white'>
                        <h2 className="card-title">{title}</h2>
                        <p className='text-left'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;