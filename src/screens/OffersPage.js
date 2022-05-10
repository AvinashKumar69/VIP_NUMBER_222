import React from 'react';
import OfferBanner from '../components/offers-components/OfferBanner';
import OfferCard from '../components/offers-components/OfferCard';
import '../styles/Ribbon.css';

const OffersPage = () => {
    return (
        <>
            <OfferBanner />
            {/* <p className="ribbon1111">
                <span className="text1111 font-mono tracking-widest">
                    <strong className="bold1111">Special Offer: </strong>
                    Recieve Extra Discount When You Get Your VIP Number Now!!!
                </span>
            </p> */}
            <OfferCard />
        </>
    )
}

export default OffersPage;