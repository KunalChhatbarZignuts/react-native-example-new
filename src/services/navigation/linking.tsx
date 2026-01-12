// src/navigation/linking.ts

import { RouteNames } from './RouteNames';

export const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
    screens: {
      [RouteNames.INDEX]: 'index',
      [RouteNames.LEARNING_TOPIC_1]: 'learning-topic-1',
      [RouteNames.LEARNING_TOPIC_2]: 'learning-topic-2',
      [RouteNames.LEARNING_TOPIC_3]: 'learning-topic-3',
      [RouteNames.LEARNING_TOPIC_4]: 'learning-topic-4',
      [RouteNames.LEARNING_TOPIC_5]: 'learning-topic-5',
      [RouteNames.LEARNING_TOPIC_6]: 'learning-topic-6',
      [RouteNames.LEARNING_TOPIC_7]: 'learning-topic-7',
      [RouteNames.LEARNING_TOPIC_8]: 'learning-topic-8',
      [RouteNames.LEARNING_TOPIC_9]: 'learning-topic-9',
      [RouteNames.LEARNING_TOPIC_10]: 'learning-topic-10',
      [RouteNames.LEARNING_TOPIC_11]: 'learning-topic-11',
      [RouteNames.LEARNING_TOPIC_12]: 'learning-topic-12',
      [RouteNames.LEARNING_TOPIC_13]: 'learning-topic-13',
      [RouteNames.LEARNING_TOPIC_14]: 'learning-topic-14',
      [RouteNames.LEARNING_TOPIC_15]: 'learning-topic-15',
      [RouteNames.LEARNING_TOPIC_16]: 'learning-topic-16',
      [RouteNames.LEARNING_TOPIC_17]: 'learning-topic-17',
      [RouteNames.LEARNING_TOPIC_18]: 'learning-topic-18',
      [RouteNames.LEARNING_TOPIC_19]: 'learning-topic-19',
      [RouteNames.LEARNING_TOPIC_20]: 'learning-topic-20',
    },
  },
};

// Handling Deep Links Manually (Without Navigation)
// import { Linking } from 'react-native';

// useEffect(() => {
//   Linking.getInitialURL().then(url => {
//     if (url) {
//       console.log('Opened with URL:', url);
//     }
//   });

//   const subscription = Linking.addEventListener('url', event => {
//     console.log('URL event:', event.url);
//   });

//   return () => subscription.remove();
// }, []);
