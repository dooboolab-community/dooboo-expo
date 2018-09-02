import User from '../models/User';
import { observable } from 'mobx';

import moment from 'moment';
import 'moment/locale/ko';
import 'moment/locale/ja';
// import 'moment/locale/zh-cn';
// import 'moment/locale/es';
// import 'moment/locale/fr';
// import 'moment/locale/id';

interface ILocale {
  value: string;
  locale_moment: string;
}

class ObservableListStore {
  @observable ready: boolean;
  @observable rootNavigatorActionHorizontal: boolean;
  @observable _locale: ILocale = {
    value: 'ko',
    locale_moment: 'ko',
  };
  @observable user: User;

  constructor() {
    this._rootNavigatorActionHorizontal = false;
    this._user = new User();
  }

  get locale(): Locale {
    return this._locale;
  }

  set locale(locale: ILocale ) {
    this._locale = locale;
    switch (locale.value) {
      case 'ko':
      case 'ja':
      moment.locale(locale.value);
      return;
    }
    moment.locale('en');
  }
}

const observableListStore = new ObservableListStore();
export default observableListStore;
