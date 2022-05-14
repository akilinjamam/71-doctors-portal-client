import React from 'react';
import appointment from '../../../../assets/images/appointment.png'
import smallDoctor from '../../../../assets/images/doctor-small.png'
import './Appointment.css'

const Appointment = () => {
    return (
        <div style={{}} >

            <img className='small-doctor' style={{ position: 'absolute', zIndex: '10', width: '45%' }} src={smallDoctor} alt="" />
            <br /><br /><br /><br /><br />
            <div style={{ position: 'relative', backgroundImage: `url(${appointment})`, height: '450px', display: 'flex', justifyContent: 'space-between' }} >

                <div className=' the-gap'>

                </div>

                <div className='sm:w-96 lg:w-3/5 text-left '>
                    <div className='mt-36 the-marginTop text-white  '>
                        <p className='the-margin text-primary text-xl'>Appointment</p>
                        <p className='the-margin'>Make an Appointment Today</p>
                        <p className='the-margin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam minima perferendis, excepturi alias commodi hic fugiat ipsam nam vitae veniam nostrum laudantium. Minus natus blanditiis similique voluptatibus assumenda ab alias ullam quam tenetur mollitia tempora, illum hic excepturi maiores?</p>
                        <br />
                        <button className="the-margin btn btn-primary text-white">Get Started</button>

                    </div>
                </div>


            </div>


        </div >
    );
};

export default Appointment;


/* 

 



*/