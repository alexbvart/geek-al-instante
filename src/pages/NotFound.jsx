import React from 'react';
import {Link} from 'react-router-dom'


const NotFound = () => {
    return ( 
        <>
            <div className="container">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
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
                    <Link to="/">
                        <button className='button-large'>Continue collecting</button>
                    </Link> 

                </section>
            </section>
        </>
    );
}
export default NotFound;