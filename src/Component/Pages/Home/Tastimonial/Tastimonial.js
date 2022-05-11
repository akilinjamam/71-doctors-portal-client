import React from 'react';
import quote from '../../../../assets/icons/quote.svg'

import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import Review from '../Review/Review';




const Tastimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winston Harry',
            place: 'california',
            img: { people1 }
        },
        {
            _id: 2,
            name: 'Winston Harry',
            place: 'california',
            img: { people2 }
        },
        {
            _id: 3,
            name: 'Winston Harry',
            place: 'california',
            img: { people3 }
        }
    ]
    return (
        <div className='mt-24'>
            <div className='flex justify-between items-center'>
                <div className='text-left'>
                    <p className='text-primary font-bold'>Testimonial</p>
                    <p className='text-4xl'>What Our Patients Says</p>
                </div>

                <div>
                    <img className='sm:w-24 lg:w-60 ' src={quote} alt="" />
                </div>
            </div>

            <div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-7' >
                    {
                        reviews.map(review => <Review key={review._id} review={review}  ></Review>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Tastimonial;