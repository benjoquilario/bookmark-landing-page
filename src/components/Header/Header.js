import React, { useEffect, useState } from 'react';
import HeaderIcon from './HeaderIcon';
import Logo from './HeaderLogo';

const Header = () => {
   const [click, setClick] = useState(false);
   const [width, setWidth] = useState(window.innerWidth);
   const breakpoint = 768;

   useEffect(() => {
      window.addEventListener('resize', () => setWidth(window.innerWidth));

      if (width >= breakpoint) backToDefault();
   });

   const backToDefault = () => setClick(false);

   const toggleMobileMenu = () => setClick(!click);
   return (
      <header className="header">
         <div className="header__container container">
            <a href="/" className="header__logo">
               <Logo click={click} />
            </a>
            <nav className="header__nav">
               <button
                  className={`btn btn--menu ${click ? 'is-active' : ''}`}
                  aria-label="menu toggle"
                  onClick={toggleMobileMenu}
                  aria-expanded={click ? true : false}
               >
                  <span className="btn--menu__bar"></span>
                  <span className="btn--menu__bar"></span>
                  <span className="btn--menu__bar"></span>
               </button>
               <div className={`header__menu ${click ? 'menu-active' : ''}`}>
                  <ul className="header__list">
                     <li className="header__item">
                        <a href="/">Features</a>
                     </li>
                     <li className="header__item">
                        <a href="/">Pricing</a>
                     </li>
                     <li className="header__item">
                        <a href="/">Contact</a>
                     </li>
                     <li className="header__item">
                        <a href="/">Login</a>
                     </li>
                  </ul>
                  {width <= breakpoint ? <HeaderIcon /> : ''}
               </div>
            </nav>
            {click ? <span className="header__overlay"></span> : ''}
         </div>
      </header>
   );
};

export default Header;
