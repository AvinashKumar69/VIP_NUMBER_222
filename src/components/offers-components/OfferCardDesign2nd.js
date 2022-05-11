import React from 'react';
import crownIcon from '../../assets/crown-icon.svg';
import '../../styles/Ribbon.css';


const OfferCardDesign2nd = () => {
    return (
        <div className='flex flex-wrap items-center justify-evenly overflow-hidden'>

            <div className='w-96 h-auto m-3 rounded-3xl border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>Ribbon</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-between px-2 rounded-t-3xl'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-black text-2xl text-black'>
                        {/* <span className='line-through'>4758</span> */}
                        <span className='font-semibold'>₹</span>3500/-
                    </p>
                </div>

                <div className='h-32 flex flex-col items-center justify-end bg-white tracking-tighter'>
                    <h1 className='text-xl text-black'>
                        GET YOUR <span className='font-bold'>Business</span> NUMBER
                    </h1>
                    <p className='text-5xl font-black text-orange-600'>
                        <span className='text-black'>82-</span>9095-9095
                    </p>
                    <p className='text-xs'>
                        SIMILAR NUMBERS
                    </p>
                </div>

                <div className='h-10 text-xl flex items-center justify-center bg-gray-300'>
                    <p className='text-black font-medium'>
                        SUM -64 | Total -1 | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-evenly text-white'>
                    <div className='flex flex-row items-center space-x-2 text-black'>
                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                        // style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-6 w-6 mx-auto" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart-fill h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-2'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart4 h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg p-1 text-xl h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-96 h-auto m-3 rounded-3xl border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>Ribbon</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-between px-2 rounded-t-3xl'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-black text-2xl text-black'>
                        {/* <span className='line-through'>4758</span> */}
                        <span className='font-semibold'>₹</span>3500/-
                    </p>
                </div>

                <div className='h-32 flex flex-col items-center justify-end bg-white tracking-tighter'>
                    <h1 className='text-xl text-black'>
                        GET YOUR <span className='font-bold'>Business</span> NUMBER
                    </h1>
                    <p className='text-5xl font-black text-orange-600'>
                        <span className='text-black'>82-</span>9095-9095
                    </p>
                    <p className='text-xs'>
                        SIMILAR NUMBERS
                    </p>
                </div>

                <div className='h-10 text-xl flex items-center justify-center bg-gray-300'>
                    <p className='text-black font-medium'>
                        SUM -64 | Total -1 | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-evenly text-white'>
                    <div className='flex flex-row items-center space-x-2 text-black'>
                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                        // style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-6 w-6 mx-auto" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart-fill h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-2'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart4 h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg p-1 text-xl h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-96 h-auto m-3 rounded-3xl border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>Ribbon</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-between px-2 rounded-t-3xl'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-black text-2xl text-black'>
                        {/* <span className='line-through'>4758</span> */}
                        <span className='font-semibold'>₹</span>3500/-
                    </p>
                </div>

                <div className='h-32 flex flex-col items-center justify-end bg-white tracking-tighter'>
                    <h1 className='text-xl text-black'>
                        GET YOUR <span className='font-bold'>Business</span> NUMBER
                    </h1>
                    <p className='text-5xl font-black text-orange-600'>
                        <span className='text-black'>82-</span>9095-9095
                    </p>
                    <p className='text-xs'>
                        SIMILAR NUMBERS
                    </p>
                </div>

                <div className='h-10 text-xl flex items-center justify-center bg-gray-300'>
                    <p className='text-black font-medium'>
                        SUM -64 | Total -1 | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-evenly text-white'>
                    <div className='flex flex-row items-center space-x-2 text-black'>
                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                        // style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-6 w-6 mx-auto" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart-fill h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-2'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart4 h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg p-1 text-xl h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-96 h-auto m-3 rounded-3xl border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>Ribbon</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-between px-2 rounded-t-3xl'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-black text-2xl text-black'>
                        {/* <span className='line-through'>4758</span> */}
                        <span className='font-semibold'>₹</span>3500/-
                    </p>
                </div>

                <div className='h-32 flex flex-col items-center justify-end bg-white tracking-tighter'>
                    <h1 className='text-xl text-black'>
                        GET YOUR <span className='font-bold'>Business</span> NUMBER
                    </h1>
                    <p className='text-5xl font-black text-orange-600'>
                        <span className='text-black'>82-</span>9095-9095
                    </p>
                    <p className='text-xs'>
                        SIMILAR NUMBERS
                    </p>
                </div>

                <div className='h-10 text-xl flex items-center justify-center bg-gray-300'>
                    <p className='text-black font-medium'>
                        SUM -64 | Total -1 | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-evenly text-white'>
                    <div className='flex flex-row items-center space-x-2 text-black'>
                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                        // style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-6 w-6 mx-auto" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart-fill h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-2'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart4 h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg p-1 text-xl h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-96 h-auto m-3 rounded-3xl border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>Ribbon</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-between px-2 rounded-t-3xl'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-black text-2xl text-black'>
                        {/* <span className='line-through'>4758</span> */}
                        <span className='font-semibold'>₹</span>3500/-
                    </p>
                </div>

                <div className='h-32 flex flex-col items-center justify-end bg-white tracking-tighter'>
                    <h1 className='text-xl text-black'>
                        GET YOUR <span className='font-bold'>Business</span> NUMBER
                    </h1>
                    <p className='text-5xl font-black text-orange-600'>
                        <span className='text-black'>82-</span>9095-9095
                    </p>
                    <p className='text-xs'>
                        SIMILAR NUMBERS
                    </p>
                </div>

                <div className='h-10 text-xl flex items-center justify-center bg-gray-300'>
                    <p className='text-black font-medium'>
                        SUM -64 | Total -1 | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-evenly text-white'>
                    <div className='flex flex-row items-center space-x-2 text-black'>
                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                        // style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-6 w-6 mx-auto" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart-fill h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-2'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart4 h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg p-1 text-xl h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-96 h-auto m-3 rounded-3xl border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>Ribbon</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-between px-2 rounded-t-3xl'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-black text-2xl text-black'>
                        {/* <span className='line-through'>4758</span> */}
                        <span className='font-semibold'>₹</span>3500/-
                    </p>
                </div>

                <div className='h-32 flex flex-col items-center justify-end bg-white tracking-tighter'>
                    <h1 className='text-xl text-black'>
                        GET YOUR <span className='font-bold'>Business</span> NUMBER
                    </h1>
                    <p className='text-5xl font-black text-orange-600'>
                        <span className='text-black'>82-</span>9095-9095
                    </p>
                    <p className='text-xs'>
                        SIMILAR NUMBERS
                    </p>
                </div>

                <div className='h-10 text-xl flex items-center justify-center bg-gray-300'>
                    <p className='text-black font-medium'>
                        SUM -64 | Total -1 | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-evenly text-white'>
                    <div className='flex flex-row items-center space-x-2 text-black'>
                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                        // style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-6 w-6 mx-auto" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart-fill h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-2'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart4 h-6 w-6 mx-auto" style={{ color: 'white' }} viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </button>

                        <button className='border-2 rounded-lg p-1 text-xl h-10 w-16' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OfferCardDesign2nd;