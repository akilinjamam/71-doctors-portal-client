

import chair from '../../../../assets/images/chair.png'
import background from '../../../../assets/images/bg.png'
    ;
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmentBanner = ({ selected, setSelected }) => {

    return (
        <div>
            <div style={{ backgroundImage: `url(${background})` }} className="hero min-h-screen  text-left">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='lg:w-1/2 sm:w-2/2' alt='' src={chair} />
                    <div>
                        <DayPicker mode="single"
                            selected={selected}
                            onSelect={setSelected}></DayPicker>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;