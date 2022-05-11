import React from 'react';
import Banner from './Banner/Banner';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import OurService from './OurService/OurService';
import floride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import SecondBanner from './secondBanner/SecondBanner';
import Appointment from './Appointment/Appointment';
import Tastimonial from './Tastimonial/Tastimonial';
import Review from './Review/Review';
import ContactUs from './ContactUs/ContactUs';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {


    return (
        <div>
            <div style={{ width: '90%', margin: 'auto' }}>

                <Banner></Banner>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <InfoCard title={'Opening Hour'} bgClass='bg-primary' img={clock}></InfoCard>
                    <InfoCard title={'Visit Our Location'} bgClass='bg-accent' img={marker}></InfoCard>
                    <InfoCard title={'Contact us Now'} bgClass='bg-primary' img={phone}></InfoCard>
                </div>
                <br /><br /><br />  <br />
                <div>
                    <p className='text-primary font-bold'>OUR SERVICE</p>
                    <p className='text-3xl'>Service We Provide</p>
                </div>
                <br /><br /><br />  <br />
                <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                    <OurService title={'Fluride Treatment'} img={floride}></OurService>
                    <OurService title={'Cavity Filling'} img={cavity}></OurService>
                    <OurService title={'Teeth Whitening'} img={whitening}></OurService>
                </div>

                <div>
                    <SecondBanner></SecondBanner>
                </div>

                <br /><br /><br />  <br />


            </div>

            <div style={{ width: '100%' }}>
                <Appointment></Appointment>
            </div>


            <div style={{ width: '90%' }} className=' mx-auto'>
                <Tastimonial></Tastimonial>

            </div>
            <br /><br />
            <div>
                <ContactUs></ContactUs>
            </div>

            <div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Home;