import React from 'react';
import { featuresButton } from '../../assets/data';

const FeaturesButton = ({ onHandleClick, dataIndex }) => {
   return (
      <React.Fragment>
         {featuresButton.map((btn, index) => {
            return (
               <button
                  key={index}
                  className={
                     dataIndex.current === index
                        ? 'features__button__tabs features__button__tabs-active'
                        : 'features__button__tabs'
                  }
                  data-index={index}
                  onClick={onHandleClick}
               >
                  {btn.title}
               </button>
            );
         })}
      </React.Fragment>
   );
};

export default FeaturesButton;
