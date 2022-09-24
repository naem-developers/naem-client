import Reactotron from 'reactotron-react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

Reactotron.setAsyncStorageHandler(EncryptedStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
