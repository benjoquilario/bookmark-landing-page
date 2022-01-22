import React from 'react';
import { extensionCard } from '../../assets/data';

const ExtensionCard = () => {
   return (
      <React.Fragment>
         {extensionCard.map((extension, index) => {
            return (
               <div className="extension__card" key={index}>
                  <div className="extension__card__image">
                     <img src={extension.image} alt={extension.altText} />
                  </div>
                  <div className="extenstion__card__info">
                     <h3 className="extension__name heading">
                        {extension.headingTitle}
                     </h3>
                     <p className="extension__paragraph paragraph">
                        {extension.paragraph}
                     </p>
                     <button className="extension__card__button btn btn--blue">
                        Add & Install Extension
                     </button>
                  </div>
               </div>
            );
         })}
      </React.Fragment>
   );
};

export default ExtensionCard;
