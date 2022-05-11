import React from 'react';
import appointment from '../../../../assets/images/appointment.png'


const ContactUs = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${appointment})` }} >
                <br /><br />
                <p className='text-primary'>Contact Us</p>
                <p className='text-4xl text-white'>Stay Connected With Us</p>
                <br /><br />
                <div>
                    <form action="">
                        <input className='lg:w-96 sm:w-24  p-2 rounded' type="email" name="email" placeholder='Email' id="" /><br /><br />
                        <input className='lg:w-96 sm:w-24  p-2 rounded' type="text" name="subject" placeholder='subject' id="" /><br /><br />
                        <textarea className='lg:w-96 sm:w-16  p-2 rounded' type="text" name="message" placeholder='your message' id="" /><br /><br />
                        <input className='btn btn-primary' type="submit" value="submit" />
                        <br /><br />
                    </form>
                </div>


            </div>
        </div>
    );
};

export default ContactUs;