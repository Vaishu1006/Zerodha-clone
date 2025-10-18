import React from 'react';
function Universe() {
    return ( 
        <div className='container text-center'>
            <div className='row'>
                <p>Want to know more about our technology stack? Check out the <a href={""} style={{ textDecoration: "none" }}>
                                Zerodha.tech
                            </a> blog.</p>
            </div>
            <div className='row'>
                <h3>The Zerodha Universe</h3>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row'>
            <div className='col-4  p-3 mt-5'>
                <img src='media/images/zerodhaFundhouse.png' style={{width:"50%", margin:"0 auto"}}/>
                <p className='text-small text-muted'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
            </div>
             <div className='col-4  p-3 mt-5'>
                <img src="/media/images/sensibullLogo.svg" style={{width:"50%", margin:"0 auto"}}/>
                <p className='text-small text-muted'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
             </div>
            <div className='col-4  p-3 mt-5'>
                <img src='media/images/smallcaseLogo.png'/>
                <p className='text-small text-muted'>Our Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
            </div>
            <div className='col-4  p-3 mt-5'>
                <img src='media/images/streakLogo.png' style={{width:"50%", margin:"0 auto"}}/>
                <p className='text-small text-muted'>Our Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
            </div>
            <div className='col-4  p-3 mt-5'>
                <img src='/media/images/goldenpiLogo.png'/>
                <p className='text-small text-muted'>Our Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.</p>
            </div>
            <div className='col-4  p-3 mt-5'>
                <img src='/media/images/dittoLogo.png' style={{width:"20%", margin:"0 auto"}}/>
                <p className='text-small text-muted'>Our Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
            </div>
            <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
              </div>
        </div>
     );
}

export default Universe;