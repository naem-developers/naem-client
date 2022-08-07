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
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const STANDARD_DEVICE_WIDTH = 390;
export const STANDARD_DEVICE_HEIGHT = 844;
export const H_PADDING = 16;
export const DISABLED_TYPE = [
  '정신장애',
  '지적장애',
  '지체장애',
  '시각장애',
  '청각장애',
  '자폐성장애',
  '언어장애',
  '뇌병변장애',
  '신장장애',
  '호흡기장애',
  '안면장애',
  '장루, 요루장애',
  '심장장애',
  '간장애',
  '긴질장애',
];
export const APP_VERSION = {
  android: pkg.version,
  ios: pkg.version,
};
