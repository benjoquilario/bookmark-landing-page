import illustrationHero from './images/illustration-hero.svg';
import featuresTab1 from './images/illustration-features-tab-1.svg';
import featuresTab2 from './images/illustration-features-tab-2.svg';
import featuresTab3 from './images/illustration-features-tab-3.svg';
import chromeCard from './images/logo-chrome.svg';
import firefoxCard from './images/logo-firefox.svg';
import operaCard from './images/logo-opera.svg';

export const heroData = {
   illustration: illustrationHero,
   headingTitle: 'A Simple Bookmark Manager',
   paragraph: `A clean and simple interface to organize your favourite websites. Open a new 
      browser tab and see your sites load instantly. Try it for free.`,
   chrome: 'Get it on Chrome',
   firefox: 'Get it on Firefox',
};

export const featuresData = [
   {
      id: 0,
      image: featuresTab1,
      heading: 'Bookmark in one click',
      paragraph: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
      gives you complete control over how you manage your favourite sites.`,
      altText: 'Bookmark in one click',
   },
   {
      id: 1,
      image: featuresTab2,
      heading: 'Intelligent search',
      paragraph: `Our powerful search feature will help you find saved sites in no time at all. 
      No need to trawl through all of your bookmarks.`,
      altText: 'Intelligent search',
   },
   {
      id: 2,
      image: featuresTab3,
      heading: 'Share your bookmarks',
      paragraph: `Easily share your bookmarks and collections with others. Create a shareable 
      link that you can send at the click of a button.`,
      altText: 'Share your bookmarks',
   },
];

export const featuresButton = [
   {
      id: 0,
      title: 'Simple Bookmarking',
   },
   {
      id: 1,
      title: 'Speedy Searching',
   },
   {
      id: 2,
      title: 'Easy Sharing',
   },
];

export const featuresInfo = {
   headingTitle: 'Features',
   paragraph: `Our aim is to make it quick and easy for you to access your
   favourite websites. Your bookmarks sync between your devices
   so you can access them on the go.`,
};

export const extensionData = {
   headingTitle: 'Download the extension',
   paragraph:
      'We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.',
};

export const extensionCard = [
   {
      image: chromeCard,
      headingTitle: 'Add to Chrome',
      paragraph: 'Minimum version 62',
      altText: 'chrome',
   },
   {
      image: firefoxCard,
      headingTitle: 'Add to Firefox',
      paragraph: 'Add to Firefox',
      altText: 'firefox',
   },
   {
      image: operaCard,
      headingTitle: 'Add to Opera',
      paragraph: 'Minimum version 46',
      altText: 'opera',
   },
];

export const faqData = {
   headingTitle: 'Frequently Asked Questions',
   paragraph:
      'Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.',
};

export const faqDetails = [
   {
      id: 0,
      summary: 'What is Bookmark?',
      answer:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
   },
   {
      id: 1,
      summary: 'How can I request a new browser?',
      answer:
         'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
   },
   {
      id: 2,
      summary: 'Is there a mobile app?',
      answer:
         'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
   },
   {
      id: 3,
      summary: 'What about other Chromium browsers?',
      answer:
         'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
   },
];

export const subscribeData = {
   subHeading: '35,000+ already joined',
   heading: 'Stay up-to-date with what we’re doing',
};
