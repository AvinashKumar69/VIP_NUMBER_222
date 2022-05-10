import React from 'react';
import crownIcon from '../../assets/crown-icon.svg';
import '../../styles/Ribbon.css';

const OfferCard = () => {
    return (
        <div className='flex flex-wrap items-center justify-center'>

            <div className='w-96 h-auto m-5 rounded-lg border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>20% off</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-evenly rounded-t-lg'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-semibold'>
                        <span className='line-through'>4758</span> ₹4138/-
                    </p>
                </div>

                <div className='h-16 flex items-center justify-center bg-white'>
                    <p className='text-3xl font-semibold text-orange-600'>
                        98887-88887
                    </p>
                </div>

                <div className='h-8 flex items-center justify-center bg-gray-200'>
                    <p className='text-black'>
                        Total - <span className='font-semibold'>37</span> | Sum - <span className='font-semibold'>8</span> | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-center space-x-4 text-white'>
                    <div className='flex flex-row items-center space-x-1 text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-5 w-5" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                        <p className='text-xl text-black'>
                            0
                        </p>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart h-5 w-5" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart3 h-5 w-5" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <button className='border-2 rounded-lg p-1 text-xl' type='button'
                        style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                    >
                        Buy
                    </button>
                </div>
            </div>

            <div className='w-96 h-auto m-5 rounded-lg border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>20% off</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-evenly rounded-t-lg'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-semibold'>
                        <span className='line-through'>4758</span> ₹4138/-
                    </p>
                </div>

                <div className='h-16 flex items-center justify-center bg-white'>
                    <p className='text-3xl font-semibold text-orange-600'>
                        98887-88887
                    </p>
                </div>

                <div className='h-8 flex items-center justify-center bg-gray-200'>
                    <p className='text-black'>
                        Total - <span className='font-semibold'>37</span> | Sum - <span className='font-semibold'>8</span> | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-center space-x-4 text-white'>
                    <div className='flex flex-row items-center space-x-1 text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-5 w-5" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                        <p className='text-xl text-black'>
                            0
                        </p>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart h-5 w-5" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart3 h-5 w-5" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <button className='border-2 rounded-lg p-1 text-xl' type='button'
                        style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                    >
                        Buy
                    </button>
                </div>
            </div>

            <div className='w-96 h-auto m-5 rounded-lg border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>20% off</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-evenly rounded-t-lg'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-semibold'>
                        <span className='line-through'>4758</span> ₹4138/-
                    </p>
                </div>

                <div className='h-16 flex items-center justify-center bg-white'>
                    <p className='text-3xl font-semibold text-orange-600'>
                        98887-88887
                    </p>
                </div>

                <div className='h-8 flex items-center justify-center bg-gray-200'>
                    <p className='text-black'>
                        Total - <span className='font-semibold'>37</span> | Sum - <span className='font-semibold'>8</span> | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-center space-x-4 text-white'>
                    <div className='flex flex-row items-center space-x-1 text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-5 w-5" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                        <p className='text-xl text-black'>
                            0
                        </p>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart h-5 w-5" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart3 h-5 w-5" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <button className='border-2 rounded-lg p-1 text-xl' type='button'
                        style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                    >
                        Buy
                    </button>
                </div>
            </div>

            <div className='w-96 h-auto m-5 rounded-lg border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>20% off</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-evenly rounded-t-lg'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-semibold'>
                        <span className='line-through'>4758</span> ₹4138/-
                    </p>
                </div>

                <div className='h-16 flex items-center justify-center bg-white'>
                    <p className='text-3xl font-semibold text-orange-600'>
                        98887-88887
                    </p>
                </div>

                <div className='h-8 flex items-center justify-center bg-gray-200'>
                    <p className='text-black'>
                        Total - <span className='font-semibold'>37</span> | Sum - <span className='font-semibold'>8</span> | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-center space-x-4 text-white'>
                    <div className='flex flex-row items-center space-x-1 text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-5 w-5" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                        <p className='text-xl text-black'>
                            0
                        </p>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart h-5 w-5" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart3 h-5 w-5" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <button className='border-2 rounded-lg p-1 text-xl' type='button'
                        style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                    >
                        Buy
                    </button>
                </div>
            </div>

            <div className='w-96 h-auto m-5 rounded-lg border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>20% off</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-evenly rounded-t-lg'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-semibold'>
                        <span className='line-through'>4758</span> ₹4138/-
                    </p>
                </div>

                <div className='h-16 flex items-center justify-center bg-white'>
                    <p className='text-3xl font-semibold text-orange-600'>
                        98887-88887
                    </p>
                </div>

                <div className='h-8 flex items-center justify-center bg-gray-200'>
                    <p className='text-black'>
                        Total - <span className='font-semibold'>37</span> | Sum - <span className='font-semibold'>8</span> | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-center space-x-4 text-white'>
                    <div className='flex flex-row items-center space-x-1 text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-5 w-5" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                        <p className='text-xl text-black'>
                            0
                        </p>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart h-5 w-5" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart3 h-5 w-5" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <button className='border-2 rounded-lg p-1 text-xl' type='button'
                        style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                    >
                        Buy
                    </button>
                </div>
            </div>

            <div className='w-96 h-auto m-5 rounded-lg border-2 border-orange-400 xyzabc2 box123'>
                <div className="ribbon ribbon-top-left">
                    <span className=''>20% off</span>
                </div>
                <div className='h-8 text-white flex flex-row items-center justify-evenly rounded-t-lg'
                    style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                >
                    <img className='h-6 w-6' src={crownIcon} />
                    <p className='font-semibold'>
                        <span className='line-through'>4758</span> ₹4138/-
                    </p>
                </div>

                <div className='h-16 flex items-center justify-center bg-white'>
                    <p className='text-3xl font-semibold text-orange-600'>
                        98887-88887
                    </p>
                </div>

                <div className='h-8 flex items-center justify-center bg-gray-200'>
                    <p className='text-black'>
                        Total - <span className='font-semibold'>37</span> | Sum - <span className='font-semibold'>8</span> | R2P
                    </p>
                </div>

                <div className='h-20 flex flex-row items-center justify-center space-x-4 text-white'>
                    <div className='flex flex-row items-center space-x-1 text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill h-5 w-5" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                        <p className='text-xl text-black'>
                            0
                        </p>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart h-5 w-5" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <div className='flex flex-row items-center space-x-1'>
                        <button className='border-2 rounded-lg p-1 flex flex-row items-center' type='button'
                            style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart3 h-5 w-5" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <span className='text-xl'>0</span>
                        </button>
                    </div>

                    <button className='border-2 rounded-lg p-1 text-xl' type='button'
                        style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
                    >
                        Buy
                    </button>
                </div>
            </div>

        </div>
    )
}

export default OfferCard;