import React from 'react';
import './App.scss';

import {
   heroData,
   featuresInfo,
   extensionData,
   faqData,
   subscribeData,
} from './assets/data';
import {
   Header,
   HeroSection,
   Features,
   Extension,
   Faq,
   Subscribe,
   Footer,
} from './components';

const App = () => {
   return (
      <React.Fragment>
         <a href="#features" className="skip-to-content">
            Skip to content
         </a>
         <Header />
         <main>
            <HeroSection {...heroData} />
            <Features {...featuresInfo} />
            <Extension {...extensionData} />
            <Faq {...faqData} />
            <Subscribe {...subscribeData} />
            <Footer />
         </main>
      </React.Fragment>
   );
};

export default App;
