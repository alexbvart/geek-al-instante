import React from 'react';
import Products from '../components/Products';
import logo from '../static/logo.svg';
import '../styles/hero.css'

const Home = () => {


    return (
        <main className="wrapper">
            <div className="hero">
                <div className="brand-container">
                    <img src={logo} alt="logo" className="brand-logo"/>
                    <p className="brand-slogan">Don't let anything get away from you, collect it all. </p>
                </div>
                <div className="form-group">
                    <label htmlFor="productSearch">Filtra un producto por su nombre:</label>
                    <input
                        type="search"
                        name="productSearch"
                        id="productSearch"
                        className="form-group__input--auto form-group__input"
                    />
                </div>
            </div>

            <Products />
            <Products />
            <Products />
            



        </main>
    );
}
export default Home;