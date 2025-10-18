import React from 'react';

function RightSection({
    imageURL,
    ProductName,
    productDescription,
    learnMore
}) {
    return (
        <div className='container'>
            <div className='row border-top py-5' style={{ minHeight: '300px' }}>
                {/* Text Content - left side */}
                <div className='col-md-6 d-flex align-items-center'>
                    <div className='px-3'>
                        <h3 className='mb-3'>{ProductName}</h3>
                        <p className='mb-4'>{productDescription}</p>
                        <div>
                            <a href={learnMore || "#"} style={{ textDecoration: "none" }}>
                                Learn more →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image - right side */}
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <img
                        src={imageURL}
                        alt={`${ProductName} Image`}
                        className='img-fluid'
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
