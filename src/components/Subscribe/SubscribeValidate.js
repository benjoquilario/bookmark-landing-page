import { useState } from 'react';

const SubscribeValidate = () => {
   const [email, setEmail] = useState('');
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   const onHandleChange = event => {
      setEmail(event.target.value);
   };

   const onHandleSubmit = event => {
      event.preventDefault();
      validateFormSubscribe();
   };

   const validateFormSubscribe = () => {
      const re = /^([a-z\d-]+)@([a-z\d-]+)([a-z]{2,8})([a-z]{2,8})?$/;

      if (re.test(email)) {
         setEmail('');
         setErrorMessage('Successfully submitted!');
         setTimeout(() => {
            setErrorMessage('');
         }, 1500);
         setError(false);
      } else if (!email) {
         setError(!email);
         setEmail('');
         setErrorMessage("Whoops, make sure it's not empty");
      } else {
         setEmail('');
         setErrorMessage("Whoops, make sure it's an email");
         setError(true);
      }
   };

   return { onHandleChange, onHandleSubmit, email, error, errorMessage };
};

export default SubscribeValidate;
