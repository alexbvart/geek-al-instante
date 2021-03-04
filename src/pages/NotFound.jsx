import React, {useState} from 'react';
const NotFound = () => {
    return ( 
        <>
            <div class="container">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
            </div>

            <section className='log'>
                <section className='log__container'>
                    <h2 className="big-tittle">GEEK AL INSTANTE</h2>
                    <span className="slogan"  >Observe, crave and collect.</span>
                    <span className="ZERO4" >║█║▌║█║▌│║▌█║▌║</span>
                    <span className="ZERO4" >404 - not fount</span>
                    

                    <span className="log__copy" >Calm time traveler, apparently you want to collect something that is not yet released, as soon as it is available you will be able to see it here.</span>
                    
                    
                    {/* <p className='log__container--register'>
                        You don't have an account?<a className="call-to-acction" href=''>Register </a>
                    </p> */}
                    <button className='button-large'>Continue collecting</button>

                </section>
            </section>
        </>
    );
}
export default NotFound;