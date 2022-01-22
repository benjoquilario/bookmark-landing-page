import React from 'react';
import FeaturesButton from './FeaturesButton';
import FeaturesTabs from './FeaturesTabs';

const Features = ({ headingTitle, paragraph }) => {
   const { onHandleClick, featuresDisplay, isTransition, dataIndex } =
      FeaturesTabs();

   return (
      <section className="features" id="features">
         <div className="features__container container">
            <div className="features__heading">
               <h2 className="features__title heading">{headingTitle}</h2>
               <p className="features__paragraph paragraph">{paragraph}</p>
            </div>
            <div className="features__wrapper">
               <div className="features__button">
                  <FeaturesButton
                     onHandleClick={onHandleClick}
                     dataIndex={dataIndex}
                  />
               </div>
               <div
                  className={`features__content ${
                     isTransition ? 'transitioning' : ''
                  }`}
               >
                  <div className="features__content__illustration">
                     <img
                        src={featuresDisplay.image}
                        alt={featuresDisplay.altText}
                     />
                  </div>
                  <div className="features__content__info">
                     <h3 className="features__content__title heading">
                        {featuresDisplay.heading}
                     </h3>
                     <p className="features__content__paragraph paragraph">
                        {featuresDisplay.paragraph}
                     </p>
                     <button className="btn btn--blue btn--info hide">
                        More Info
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Features;
