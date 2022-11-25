import * as Localization from 'expo-localization';

// import {I18n} from 'i18n-js';
import en from './assets/langs/en.json';
import ko from './assets/langs/ko.json';

// ad-hoc: https://github.com/fnando/i18n/issues/26#issuecomment-1225775247
const {I18n} = require('i18n-js/dist/require/index');
const i18n = new I18n({en, ko});

i18n.defaultLocale = 'en';
i18n.enableFallback = true;
i18n.locale = Localization.locale;

export const getString = (param: keyof typeof en, mapObj?: object): string => {
  if (mapObj) {
    return i18n.t(param, mapObj);
  }

  return i18n.t(param);
};
