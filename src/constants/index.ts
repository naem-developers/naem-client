import { Dimensions, Platform, NativeModules } from 'react-native';

const pkg = require('../../package.json');
const getSystemLanguage = () => {
  let systemLanguage = '';
  if (Platform.OS === 'ios') {
    systemLanguage =
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0];
  } else {
    systemLanguage = NativeModules.I18nManager.localeIdentifier;
  }

  const language = systemLanguage.toLowerCase().indexOf('ko') >= 0 ? '한국어' : 'English';
  return language;
};

export const PLATFORM = Platform.select({
  android: 'android',
  ios: 'ios',
});

export const SYSTEMLANGUAGE = getSystemLanguage();
export const STANDARD_DEVICE_WIDTH = 390;
export const STANDARD_DEVICE_HEIGHT = 844;
export const H_PADDING = 16;
export const APP_VERSION = {
  android: pkg.version,
  ios: pkg.version,
};
