import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-4 text-center'>
                <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>
            </div>
            <div className='row'>
                {/* Account Opening */}
                <div className='col-12 col-md-4 p-4'>
                    <h4><i className="fa-solid fa-circle-plus me-2"></i> Account Opening</h4>
                    <div>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Online account opening</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Offline account opening</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Account for company, HUF, partnership</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>NRI account opening</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Charges for account opening</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Getting started with Zerodha</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Zerodha 3-in-1 with IDFC FIRST Bank</a><br/>
                    </div>
                </div>

                {/* Kite & Console */}
                <div className='col-12 col-md-4 p-4'>
                    <h4><i className="fa-solid fa-circle-plus me-2"></i> Kite & Console</h4>
                    <div>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Kite login issues</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Order placement errors</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Funds transfer and withdrawal</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Portfolio issues</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Kite mobile app</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Console reports or statements</a><br/>
                    </div>
                </div>

                {/* Stocks & Funds */}
                <div className='col-12 col-md-4 p-4'>
                    <h4><i className="fa-solid fa-circle-plus me-2"></i> Stocks & Mutual Funds</h4>
                    <div>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Equity delivery & intraday</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Mutual fund investment issues</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Charges & taxation</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Corporate actions (bonus/split/dividend)</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Pledge & margin benefit</a><br/>
                        <a href="#" style={{textDecoration: "none", lineHeight: "2.5"}}>Holdings not visible</a><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
