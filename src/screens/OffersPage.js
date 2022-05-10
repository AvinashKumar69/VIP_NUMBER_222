import React from 'react';
import OfferBanner from '../components/offers-components/OfferBanner';
import OfferBannerWithRibbon from '../components/offers-components/OfferBannerWithRibbon';
import OfferCard from '../components/offers-components/OfferCard';

const OffersPage = () => {
    return (
        <>
            <OfferBanner />
            <OfferCard />
            {/* <OfferBannerWithRibbon /> */}
        </>
    )
}

export default OffersPage;