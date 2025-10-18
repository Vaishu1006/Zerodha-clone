import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Hero from './Hero';
import Universe from './Universe';

function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imageURL="/media/images/kite.png"
                ProductName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />
            <RightSection
                imageURL="/media/images/console.png"
                ProductName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your investments and portfolio."
               
                learnMore="#"
                
            />
            <LeftSection
                imageURL="/media/images/coin (1).png"
                ProductName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />
            <RightSection
                imageURL="/media/images/kiteconnect.png"
                ProductName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                
                learnMore="#"
               
            />
            <LeftSection
                imageURL="/media/images/varsity (1).png"
                ProductName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />
            <Universe />
        </>
    );
}

export default ProductPage;
