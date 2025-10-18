import React from 'react';

function LeftSection({
    imageURL,
    ProductName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className='container'>
            <div className='row border-top py-5' style={{ minHeight: '300px' }}>
                {/* Image Column */}
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <img
                        src={imageURL}
                        alt={`${ProductName} Image`}
                        className='img-fluid'
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                {/* Content Column */}
                <div className='col-md-6 d-flex align-items-center'>
                    <div className='px-3'>
                        <h3 className='mb-3'>{ProductName}</h3>
                        <p className='mb-4'>{productDescription}</p>
                        <div className='mb-3'>
                            <a href={tryDemo || "#"} style={{ textDecoration: "none", marginRight: "20px" }}>
                                Try Demo →
                            </a>
                            <a href={learnMore || "#"} style={{ textDecoration: "none" }}>
                                Learn more →
                            </a>
                        </div>
                        <div>
                            <a href={googlePlay || "#"} className='me-2'>
                                <img src='media/images/googlePlayBadge (1).svg' alt="Google Play" height={40} />
                            </a>
                            <a href={appStore || "#"}>
                                <img src='media/images/appstoreBadge.svg' alt="App Store" height={40} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
