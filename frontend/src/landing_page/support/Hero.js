import React from 'react';
import './Hero.js'; // Make sure to create this file

function Hero() {
    return ( 
       <section className='container-fluid' id="supportHero">
        <div className='p-5' id='supportWrapper'>
          <h3>Support Portal</h3>
          <a href=''>Track Tickets</a>
        </div>
        <div className='row p-5 m-3'>
          <div className='col-6 p-5'>
            <h1 className='fs-3'>Search for an answer or browse help to create a tickets</h1>
            <input placeholder='Eg: how do i activate F&O, why is my order getting rejected..'/>
            <br/>
            <br/>
            <a href=''>Tract account opening</a>&nbsp;
            <a href=''>Track segment activation</a>&nbsp;
            <a href=''>Intraday margins</a>&nbsp;
            <a href=''>Kite user manual</a>
          </div>
          <div className='col-6 p-5'>
            <h1 className='fs-3'>Featured</h1>
            <ol>
              <li><a href=''>Current Takeovers and Delisting - January- MIS & CO</a></li>
              <li><a href=''>Latest Intraday leverages -MIS & CO</a></li>
            </ol>
          </div>
        </div>
       </section>
     );
}

export default Hero;
