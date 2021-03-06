import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p className='text-left'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div>
                    <br /><br />
                    <div className="card-actions justify-start items-center">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                        </div>

                        <div className='text-left ml-5'>
                            <p>{review.name}</p>
                            <p>{review.place}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;