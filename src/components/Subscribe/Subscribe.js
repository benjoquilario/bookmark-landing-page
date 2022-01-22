import React from 'react';
import SubscribeValidate from './SubscribeValidate';

const Cta = ({ heading, subHeading }) => {
   const { onHandleChange, onHandleSubmit, email, error, errorMessage } =
      SubscribeValidate();

   return (
      <section className="cta">
         <div className="cta__container container">
            <span className="cta__subheading">{subHeading}</span>
            <h3 className="cta__heading">{heading}</h3>
            <form className="cta__form" onSubmit={onHandleSubmit}>
               <label className="visually-hidden" htmlFor="email">
                  Enter email to subsrcibe
               </label>
               <div
                  className={`${
                     error ? 'cta__form__wrapper error' : 'cta__form__wrapper'
                  }`}
               >
                  <input
                     className="cta__form__input"
                     id="email"
                     type="text"
                     placeholder="Enter your email address"
                     value={email}
                     onChange={onHandleChange}
                  />
                  {error ? (
                     <span className="input__error">{errorMessage}</span>
                  ) : (
                     ''
                  )}
               </div>

               <button className="btn btn--red" aria-label="submit email">
                  Contact Us
               </button>
            </form>
         </div>
      </section>
   );
};

export default Cta;
