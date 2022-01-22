import React from 'react';

const HeroSection = ({
   illustration,
   headingTitle,
   paragraph,
   chrome,
   firefox,
}) => {
   return (
      <section className="hero">
         <div className="hero__container container">
            <div className="hero__wrapper">
               <div className="hero__image">
                  <img src={illustration} alt="illustration" />
               </div>
               <div className="hero__intro">
                  <h1 className="hero__title heading">{headingTitle}</h1>
                  <p className="hero__paragraph paragraph">{paragraph}</p>
                  <div className="hero__cta__wrapper">
                     <button className="hero__cta btn btn--blue btn--intro">
                        {chrome}
                     </button>
                     <button className="hero__cta btn btn--white">
                        {firefox}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
