import React from 'react';
import Banner from './Banner/Banner';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Home = () => {
    return (
        <div style={{ width: '90%', margin: 'auto' }}>

            <Banner></Banner>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <InfoCard img={clock}></InfoCard>
                <InfoCard img={marker}></InfoCard>
                <InfoCard img={phone}></InfoCard>
            </div>

            <div>

            </div>

        </div>
    );
};

export default Home;