import React from 'react';
import { faqDetails } from '../../assets/data';

const FaqDetails = () => {
   return (
      <React.Fragment>
         {faqDetails.map(faq => {
            return (
               <details className="faq__question" key={faq.id}>
                  <summary>
                     {faq.summary}{' '}
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                     >
                        <path
                           fill="none"
                           stroke="#5267DF"
                           strokeWidth="3"
                           d="M1 1l8 8 8-8"
                        ></path>
                     </svg>
                  </summary>
                  <p className="faq__question__paragraph paragraph">
                     {faq.answer}
                  </p>
               </details>
            );
         })}
      </React.Fragment>
   );
};

export default FaqDetails;
