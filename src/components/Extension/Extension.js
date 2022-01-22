import React from 'react';
import ExtensionCard from './ExtensionCard';

const Extension = ({ headingTitle, paragraph }) => {
   return (
      <section className="extension">
         <div className="extension__container container">
            <h2 className="extension__title heading">{headingTitle}</h2>
            <p className="extension__paragraph paragraph">{paragraph}</p>
            <div className="extension__wrapper">
               <ExtensionCard />
            </div>
         </div>
      </section>
   );
};

export default Extension;
