import React from 'react';
function Hero() {
    return ( 
       <div className='container'>
          <div className='row p-5 mt-5 text-center'>
            <h1>Charges</h1>
            <h5 className='text-muted'>List of all charges and taxes</h5>
          </div>
          <div className='row mt-5 p-5'>
          <div className='col-4 p-5'>
            <img src='/media/images/pricing0.svg' style={{width:"50%", margin:"0 auto"}}/>
            <h3>Free equity delivery</h3>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className='col-4 p-5'>
            <img src='/media/images/intradayTrades (1).svg' style={{width:"50%", margin:"0 auto"}}/>
            <h3>Intraday and F&O trades</h3>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className='col-4 p-5'>
            <img src='/media/images/pricing0.svg' style={{width:"50%", margin:"0 auto"}}/>
            <h3>Free direct MF</h3>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
          </div>
       </div>
     );
}

export default Hero;