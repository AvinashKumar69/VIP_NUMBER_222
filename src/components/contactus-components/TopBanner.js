import React from 'react';
import Typewriter from "typewriter-effect";
import BG3 from '../../assets/bg-3.png';
import '../../styles/ContactUs.css';

const TopBanner = () => {
    return (
        <>
            <div className='flex flex-row items-center justify-between w-full h-96 px-20'
                style={{ background: 'linear-gradient(to right, #140e38, #194089)' }}
            >

                <div className=''>
                    <h3 className='text-3xl text-white font-bold'>
                        {/* <Typewriter
                            options={{
                                strings: ['NEED TO'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 2000,
                            }}
                        /> */}
                        NEED TO
                    </h3>
                    <h2 className='text-5xl text-white font-bold'>
                        <Typewriter
                            options={{
                                strings: ['CONTACT US?', 'FIND THE DETAILS BELOW...'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 2000,
                            }}
                        />
                    </h2>
                </div>

                <div className=''>
                    <img className='object-cover' src={BG3} />
                </div>

            </div>
        </>
    )
}

export default TopBanner;