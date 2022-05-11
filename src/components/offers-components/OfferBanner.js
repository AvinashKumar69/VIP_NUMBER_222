import React from 'react';
import AnimatedText from 'react-animated-text-content';
import IMG1 from '../../assets/img1.png';


const OfferBanner = () => {
    return (
        <div className='h-96 w-screen flex flex-row items-center rounded-b-3xl'
            style={{ background: 'linear-gradient(to right, #140e38, #194089)' }}
        >

            <div className='text-white flex flex-row items-center justify-center mx-auto'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl text-orange-600 uppercase'>
                        Today's Offer
                    </h1>

                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="wave"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="animated-paragraph text-xl"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Hurry Up!! Take advantange of this offer. Just click on  Addcart button & grab this deal now.
                    </AnimatedText>

                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="wave"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="animated-paragraph text-xl mb-5"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        This is best time to purchase vip mobile number for you!
                    </AnimatedText>

                    {/* <p className='text-xl mb-5'>
                        Hurry Up !!Take advantange of this offer. Just click on  Addcart button & grab this deal now.
                        <br />
                        This is best time to purchase vip mobile number for you!
                    </p> */}

                    <h1 className='text-2xl text-orange-600 uppercase'>
                        Buy your choice number Immediately
                    </h1>

                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="wave"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="animated-paragraph text-xl"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Because thousands of peoples are search for their Desired Fancy Number every day.
                    </AnimatedText>

                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="wave"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="animated-paragraph text-xl"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        So if any other person booked your Choice Number then you can't book your number.
                    </AnimatedText>

                    {/* <p className='text-xl'>
                        Because thousands of peoples are search for their Desired Fancy Number every day.
                        <br />
                        So if any other person booked your Choice Number then you can't book your number.
                    </p> */}
                </div>

                <div className=''>
                    <img className='object-cover h-80' src={IMG1} />
                </div>
            </div>

        </div>
    )
}

export default OfferBanner;