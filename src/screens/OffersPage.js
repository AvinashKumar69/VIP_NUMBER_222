import React from 'react';
import OfferBanner from '../components/offers-components/OfferBanner';
import OfferCard from '../components/offers-components/OfferCard';
import '../styles/Ribbon.css';

const OffersPage = () => {
    return (
        <>
            <OfferBanner />
            <OfferCard />
        </>
    )
}

export default OffersPage;