import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Header.css'

import logoSmall from '../static/logoSmall.svg';
import logo from '../static/logo.svg';
import avatar from '../static/emoji-smile.svg';
import fav from '../static/icons_favorite.svg';
import cart from '../static/shopping-cart.svg';

const Header = () => {

    let initialPosition = window.pageYOffset;
    
    useEffect(() => {
        let header = document.getElementById('header');
        console.log(header);

        window.onscroll = () => {
            let move = window.pageYOffset;
            if (initialPosition >= move) {
                header.style.top = "0";
            } else {
                header.style.top = "-48px";
            }
            initialPosition = move;
        }
    }, [])

    console.log(window.innerWidth);

    return (
        <>
            <header className="header wrapper--header" id="header">
                <Link to="/" className="header__logo" >
                    {
                        (window.innerWidth > 600)
                            ? (<img src={logo} alt="logo" />)
                            : (<img src={logoSmall} alt="logo" />)
                    }

                </Link>


                <div className="header__icons">
                    <img className="header__favorite" src={fav} alt="icons_favorite.svg" />
                    <img className="header__cart" src={cart} alt="shopping-cart.svg" />
                    <img className="header__avatar" src={avatar} alt="emoji-smile.svg" />

                </div>
            </header>
        </>
    );
}
export default Header;
