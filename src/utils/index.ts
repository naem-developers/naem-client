import { Dimensions, Platform, NativeModules } from 'react-native';

const getSystemLanguage = () => {
  let systemLanguage = '';
  if (Platform.OS === 'ios') {
    systemLanguage =
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0];
  } else {
    systemLanguage = NativeModules.I18nManager.localeIdentifier;
  }

  const language =
    systemLanguage.toLowerCase().indexOf('ko') >= 0 ? '한국어' : 'English';
  return language
};

const PLATFORM = Platform.select({
  android: 'android',
  ios: 'ios',
});

const SYSTEMLANGUAGE = getSystemLanguage();

export default {
  SYSTEMLANGUAGE,
  PLATFORM
}


