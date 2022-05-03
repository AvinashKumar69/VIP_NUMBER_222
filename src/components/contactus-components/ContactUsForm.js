import React from 'react';


const ContactUsForm = () => {
    return (
        <>
            <section className="bg-gray-100 body-font relative"
            // style={{ background: 'linear-gradient(to right, #140e38, #194089)' }}
            >
                <div className="px-5 py-5 mx-auto flex flex-row sm:flex-nowrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        {/* <iframe src="https://www.google.com/maps/d/embed?mid=1XQuChUeAsimmxpd86gZrDn2umPq1X47a&ehbc=2E312F" width="640" height="480"></iframe> */}
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/d/embed?mid=1XQuChUeAsimmxpd86gZrDn2umPq1X47a&ehbc=2E312F" style={{ filter: 'grayscale(0) contrast(1.2) opacity(0.4)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded-lg shadow-xl">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-orange-600 text-3xl mb-3">
                                    SUPPORT
                                </h2>
                                <h3 className="title-font font-semibold text-orange-600 text-lg">
                                    <i class="bi bi-geo-alt-fill text-black mr-2"></i>
                                    VIP NUMBER STORE
                                </h3>
                                <p className="mt-1">Shop No 23, Old idea point, Main market, Police station Road,
                                    Anupgarh Distt. Sri ganganagar Rajasthan 335701
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">CALL US</h2>
                                <p className="text-indigo-500 leading-relaxed">
                                    <i class="bi bi-phone-vibrate text-black mr-2"></i>
                                    +91 81001 80000 / +91 95300 00007
                                </p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-1">EMAIL US</h2>
                                <a className="leading-relaxed">
                                    <i class="bi bi-envelope text-black mr-2"></i>
                                    cs@vipnumberstore.in
                                </a>
                                <h2 className="title-font font-semibold text-gray-900 text-xl mt-2">FOLLOW US</h2>
                                <a className="leading-relaxed space-x-2">
                                    <i class="bi bi-facebook text-black"></i>
                                    <i class="bi bi-twitter text-black"></i>
                                    <i class="bi bi-instagram text-black"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 drop-shadow-xl p-2 rounded-lg">

                        <div className='flex flex-row space-x-2'>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-base text-black">Name</label>
                                <input type="text" id="name" name="name" placeholder='&#xF437; Enter your Name...' className="w-full bg-white rounded border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-base text-black">E-Mail</label>
                                <input type="email" id="email" name="email" placeholder='&#xF437; Enter your Email...' className="w-full bg-white rounded border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className='flex flex-row space-x-2'>
                            <div className="relative mb-4">
                                <label htmlFor="telephone" className="leading-7 text-base text-black">Telephone</label>
                                <input type="number" id="telephone" name="telephone" placeholder='&#xF437; Enter your Number...' className="w-full bg-white rounded border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="company-name" className="leading-7 text-base text-black">Company Name</label>
                                <input type="text" id="company-name" name="company-name" placeholder='&#xF437; Enter your Website...' className="w-full bg-white rounded border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-base text-black">Message</label>
                            <textarea id="message" name="message" placeholder='&#xF437; Enter your Message...' className="w-full bg-white rounded border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-400 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" rows='5' />
                        </div>

                        <button className="text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded-lg text-lg"
                            style={{ width: 'fit-content' }}
                        >
                            SEND YOUR MESSAGE
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUsForm;