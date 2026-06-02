import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  Reactotron.configure({
    name: 'MyApp',
    // 👇 REQUIRED for Android Emulator
    host: '10.0.2.2',
  })
    .useReactNative({
      networking: true,
      asyncStorage: true,
      errors: true,
      overlay: false,
    })
    .connect();

  Reactotron.clear();
}

export default Reactotron;
