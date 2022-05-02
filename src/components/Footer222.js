import React from 'react';

const Footer222 = () => {
    return (
        <footer className="footer-07">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center d-flex flex-column align-items-center">
                        <h2 className="footer-heading fw-bold"><a href="#" className="logo">VIP Number Store</a></h2>
                        <h5 className="menu">
                            <a href="/" className="me-3">Home</a>
                            <a href="#" className="me-3">Vip Numbers</a>
                            <a href="#" className="me-3">Sold Out</a>
                            <a href="#" className="me-3">About Us</a>
                            <a href="#" className="me-3">Gallery</a>
                            <a href="/contactus">Contact</a>
                        </h5>
                        <ul className="ftco-footer-social d-flex align-items-center mt-3 ps-0">
                            <li className="ftco-animate me-3"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><span className="fa-brands fa-twitter"></span></a></li>
                            <li className="ftco-animate me-3"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><span className="fa-brands fa-facebook-f"></span></a></li>
                            <li className="ftco-animate me-3"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><span className="fa-brands fa-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>


                <div className="row mt-4 foot-r w-100 justify-content-around" >
                    <div className="col-3">
                        <div className="d-flex flex-column align-items-center">
                            <h2 className="mb-3">WE ACCEPT</h2>
                            <p className="mb-2 "><a href="#">Terms & conditions</a></p>
                            <p className="mb-2"><a href="#">Privacy policy</a></p>
                            <p className="mb-2"><a href="#">Refund policy</a></p>

                        </div>
                    </div>

                    <div className="col-6">
                        <div className="d-flex flex-column align-items-center">
                            <h2 className="mb-3">CONTACT US</h2>
                            <p className="mb-2 text-center">Shop No 23, Old idea point, Main market, Police station Road, Anupgarh Distt. Sri ganganagar Rajasthan 335701</p>
                            <p>Email:<span className="foot-email"> cs@vipnumberstore.in</span></p>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="d-flex flex-column align-items-center">
                            <h2 className="mb-3">SUPPORT</h2>
                            <p className="mb-2">Contact Us</p>
                            <p className="mb-0">FAQ'S</p>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer222;