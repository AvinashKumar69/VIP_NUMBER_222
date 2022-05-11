import React from 'react';
import OfferBanner from '../components/offers-components/OfferBanner';
import OfferCard from '../components/offers-components/OfferCard';
import OfferCardDesign2nd from '../components/offers-components/OfferCardDesign2nd';
import '../styles/Ribbon.css';

const OffersPage = () => {
    return (
        <>
            <OfferBanner />
            {/* <OfferCard /> */}
            <OfferCardDesign2nd />
        </>
    )
}

export default OffersPage;