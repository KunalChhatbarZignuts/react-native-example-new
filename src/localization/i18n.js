import { I18n } from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './en.json';
import hi from './hi.json';

const i18n = new I18n({
  en,
  hi,
});

const locales = RNLocalize.getLocales();

if (locales.length > 0) {
  i18n.locale = locales[0].languageCode;
}

i18n.enableFallback = true;
i18n.defaultLocale = 'en';

export default i18n;
