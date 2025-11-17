import React from "react";

function Signup() {
    return (
        <div className="container mt-5">

            {/* 🔵 SIGNUP HEADER */}
            <div className="row align-items-center mt-5" style={{ padding: "50px 0" }}>
                <div className="text-center mb-4">
                    <h1>Open a free demat and trading account</h1>
                    <h5 className="text-muted mt-2">
                        Start investing brokerage-free and join 1.6+ crore investors
                    </h5>
                </div>

                {/* LEFT IMAGE */}
                <div className="col-md-6 d-flex justify-content-center mb-4">
                    <img
                        src="/media/images/signup.png"
                        alt="signup"
                        style={{ width: "80%" }}
                    />
                </div>

                {/* RIGHT FORM */}
                <div className="col-md-6 text-center mt-3 mb-4">
                    <h2 className="fw-semibold">Signup now</h2>
                    <p className="text-muted">Or track your existing application</p>

                    <div className="mx-auto mt-4" style={{ maxWidth: "320px" }}>
                        <div
                            className="input-group"
                            style={{
                                border: "1px solid #d6d6d6",
                                borderRadius: "8px",
                                overflow: "hidden",
                            }}
                        >
                            <span className="input-group-text bg-white border-0">
                                <img
                                    src="https://flagcdn.com/w20/in.png"
                                    width="22"
                                    alt="India Flag"
                                    className="me-2"
                                />
                                +91
                            </span>

                            <input
                                type="tel"
                                className="form-control border-0 shadow-none"
                                placeholder="Enter mobile number"
                                maxLength="10"
                            />
                        </div>

                        <button
                            className="btn btn-primary w-100 mt-4 py-2 fw-semibold getotp"
                            style={{ fontSize: "1.1rem" }}
                        >
                            Get OTP
                        </button>

                        <p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
                            By continuing, you agree to the Terms of Use & Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>

            {/* 🔵 INVESTMENT OPTIONS TITLE */}
            <div className="row mt-5">
                <h1 className="text-center">
                    Investment options with Zerodha demat account
                </h1>
            </div>

            {/* 🔵 2×2 GRID */}
            <div className="row mt-5">

                {/* ITEM 1 */}
                <div className="col-md-6 d-flex align-items-center mb-4">
                    <img src="/media/images/Stocks.png" width="90" alt="Stocks" className="me-3" />
                    <div>
                        <h5>Stocks</h5>
                        <p className="text-muted">Invest in all exchange-listed securities</p>
                    </div>
                </div>

                {/* ITEM 2 */}
                <div className="col-md-6 d-flex align-items-center mb-4">
                    <img src="/media/images/IPO.png" width="90" alt="IPO" className="me-3" />
                    <div>
                        <h5>IPO</h5>
                        <p className="text-muted">Apply for upcoming IPOs</p>
                    </div>
                </div>

                {/* ITEM 3 */}
                <div className="col-md-6 d-flex align-items-center mb-4">
                    <img src="/media/images/mutualfunds.png" width="90" alt="Mutual Funds" className="me-3" />
                    <div>
                        <h5>Mutual Funds</h5>
                        <p className="text-muted">Direct mutual funds without commissions</p>
                    </div>
                </div>

                {/* ITEM 4 */}
                <div className="col-md-6 d-flex align-items-center mb-4">
                    <img src="/media/images/futuresoption.png" width="90" alt="F&O" className="me-3" />
                    <div>
                        <h5>Futures & Options</h5>
                        <p className="text-muted">Trade derivatives across segments</p>
                    </div>
                </div>

            </div>

            {/* CENTER BUTTON */}
            <div className="row mt-4">
                <div className="col-12 d-flex justify-content-center">
                    <button
                        className="p-3 btn btn-primary fs-5 mb-5"
                        style={{ width: "20%" }}
                    >
                        Explore Investment
                    </button>
                </div>
            </div>
            
            {/* ================================
    STEPS TO OPEN DEMAT ACCOUNT
================================== */}
<div className="container mt-5 pt-5 pb-5">
    <h2 className="text-center mb-5">
        Steps to open a demat account with Zerodha
    </h2>

    <div className="row align-items-center">

        {/* IMAGE LEFT */}
        <div className="col-md-6 d-flex justify-content-center mb-4">
            <img
                src="/media/images/steps-image.png" 
                alt="steps"
                style={{ width: "75%" }}
            />
        </div>

        {/* STEPS RIGHT */}
        <div className="col-md-6">

            {/* Step 1 */}
            <div className="step-row">
                <div className="steps-number">01</div>
                <h5 className="m-0">Enter the requested details</h5>
            </div>

            {/* Step 2 */}
            <div className="step-row">
                <div className="steps-number">02</div>
                <h5 className="m-0">Complete e-sign & verification</h5>
            </div>

            {/* Step 3 */}
            <div className="step-row">
                <div className="steps-number">03</div>
                <h5 className="m-0">Start investing!</h5>
            </div>

        </div>
    </div>
</div>


            {/* 🔵 BENEFITS SECTION */}
            <div className="row align-items-center mt-5">

                {/* LEFT IMAGE */}
                <div className="col-md-6 d-flex justify-content-center mb-4">
                    <img
                        src="/media/images/benefitimage.png"
                        alt="benefits"
                        style={{ width: "60%" }}
                    />
                </div>

                {/* RIGHT TEXT */}
                <div className="col-md-6">
                    <h3 className="mb-4">Benefits of opening a Zerodha demat account</h3>

                    <h5>Unbeatable pricing</h5>
                    <p className="text-muted">
                        Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.
                    </p>

                    <h5>Best investing experience</h5>
                    <p className="text-muted">
                        Simple and intuitive trading platform with an easy-to-understand user interface.
                    </p>

                    <h5>No spam or gimmicks</h5>
                    <p className="text-muted">
                        Committed to transparency — no gimmicks, spam, or intrusive push notifications.
                    </p>

                    <h5>The Zerodha universe</h5>
                    <p className="text-muted">
                        More than just an app — gain free access to the entire ecosystem of partner products.
                    </p>
                </div>
            </div>


            {/* 🌟 EXPLORE ACCOUNT TYPES */}
            <div className="container mt-5">
                <h2 className="text-center mb-5">Explore different account types</h2>

                <div className="row g-4">

                    {/* Individual */}
                    <div className="col-md-4">
                        <div className="account-card">
                            <div>
                                <h5>Individual Account</h5>
                                <p className="text-muted">
                                    Invest in equity, mutual funds and derivatives
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* HUF */}
                    <div className="col-md-4">
                        <div className="account-card">
                            <div>
                                <h5>HUF Account</h5>
                                <p className="text-muted">
                                    Make tax-efficient investments for your family
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* NRI */}
                    <div className="col-md-4">
                        <div className="account-card">
                            <div>
                                <h5>NRI Account</h5>
                                <p className="text-muted">
                                    Invest in equity, mutual funds, debentures & more
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Minor */}
                    <div className="col-md-4">
                        <div className="account-card">
                            <div>
                                <h5>Minor Account</h5>
                                <p className="text-muted">
                                    Teach your little ones about money & invest for their future
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Corporate */}
                    <div className="col-md-4">
                        <div className="account-card">
                            <div>
                                <h5>Corporate / LLP / Partnership</h5>
                                <p className="text-muted">
                                    Manage your business surplus and investments easily
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* SIGNUP CTA */}
            <div className="text-center mt-5">
                <h3>Open a Zerodha account</h3>
                <h5 className="text-muted mt-2">
                    Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.
                </h5>
            </div>

            <div className="col-12 d-flex justify-content-center">
                <button
                    className="p-3 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%" }}
                >
                    Sign up for free
                </button>
            </div>

        </div>
    );
}

export default Signup;
