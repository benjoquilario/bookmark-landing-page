import React from 'react';
import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';

const HeaderIcon = () => {
   return (
      <div className="header__socialIcon">
         <a
            href="/"
            className="header__socialIcon__link"
            aria-label="visit facebook"
         >
            <img src={facebook} alt="facebook" />
         </a>
         <a
            href="/"
            className="header__socialIcon__link"
            aria-label="visit twitter"
         >
            <img src={twitter} alt="facebook" />
         </a>
      </div>
   );
};

export default HeaderIcon;
