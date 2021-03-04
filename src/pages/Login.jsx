import React, { useState } from 'react';
import comicPath from '../components/comicPath';
import '../styles/log.css';
const Login = () => {
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
                    <span >Observe, crave and collect.</span>
                    <form className='log__container--form'>
                        <div className="form-group">
                            <label className='form-group__label' htmlFor="email">E-mail</label>
                            <input className='form-group__input' type='email' placeholder='E-mail' name="email" />
                        </div>
                        <div className="form-group">
                            <label className='form-group__label' htmlFor="email">Password</label>
                            <input className='form-group__input' type='password' placeholder='*******' name="email" />
                        </div>
                        <button className='button-large'>Log in</button>
                        {/* <div className='login__container--remember-me'>
                            <label>
                                <input type='checkbox' id='cbox1' value='first_checkbox' />
                                    Recuérdame
                            </label>
                            <a href='/'>Olvidé mi contraseña</a>
                        </div> */}
                    </form>
                    <p className='log__container--register'>
                        You don't have an account?<a className="call-to-acction" href=''>Register </a>
                    </p>
                </section>
            </section>
        </>
    );
}
export default Login;