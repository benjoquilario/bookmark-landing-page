import { useState, useRef } from 'react';
import { featuresData } from '../../assets/data';

const FeaturesTabs = () => {
   const [isTransition, setIsTransition] = useState(false);
   const [featuresDisplay, setFeaturesDisplay] = useState(featuresData[0]);
   const dataIndex = useRef(0);
   const transition = 900;

   const onHandleClick = event => {
      const currIndex = +event.target.dataset.index;
      if (isTransition || dataIndex.current === currIndex) return;

      dataIndex.current = currIndex;
      setIsTransition(!isTransition);

      setTimeout(() => {
         setIsTransition(false);
      }, transition);

      setTimeout(() => {
         setFeaturesDisplay(featuresData[currIndex]);
      }, transition / 3);

      return currIndex;
   };

   return { onHandleClick, featuresDisplay, isTransition, dataIndex };
};

export default FeaturesTabs;
