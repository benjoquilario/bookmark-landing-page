import React from 'react';
import FaqDetails from './FaqDetails';

const Faq = ({ headingTitle, paragraph }) => {
   return (
      <section className="faq">
         <div className="faq__container container">
            <h2 className="faq__title heading">{headingTitle}</h2>
            <p className="faq__paragraph paragraph">{paragraph}</p>
            <div className="faq__section">
               <FaqDetails />
            </div>
            <button className="btn btn--blue btn--info">More Info</button>
         </div>
      </section>
   );
};

export default Faq;
