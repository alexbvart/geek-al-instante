import React, {useState} from 'react';
import '../styles/comicPath.css'
const Register = () => {
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
                    <span>Observe, crave and collect.</span>
                    <form className='log__container--form'>
                        <div className="form-group">
                            <label className='form-group__label' htmlFor="name">Name</label>
                            <input className='form-group__input' type='text' placeholder='Alexander Briones' name="name" />
                        </div>
                        <div className="form-group">
                            <label className='form-group__label' htmlFor="email">E-mail</label>
                            <input className='form-group__input' type='email' placeholder='E-mail' name="email" />
                        </div>
                        <div className="form-group">
                            <label className='form-group__label' htmlFor="email">Password</label>
                            <input className='form-group__input' type='password' placeholder='*******' name="email" />
                        </div>
                        <button className='button-large'>Register</button>
                        {/* <div className='login__container--remember-me'>
                            <label>
                                <input type='checkbox' id='cbox1' value='first_checkbox' />
                                    Recuérdame
                            </label>
                            <a href='/'>Olvidé mi contraseña</a>
                        </div> */}
                    </form>
                    <p className='log__container--register'>
                        You are already registered ? <a className="call-to-acction" href=''>log in</a>
                    </p>
                </section>
            </section>
        </>
    );
}
export default Register;