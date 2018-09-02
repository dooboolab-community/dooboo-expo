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
  @observable public ready: boolean;
  @observable public rootNavigatorActionHorizontal: boolean;
  @observable public user: User;
  @observable private _locale: ILocale = {
    value: 'ko',
    locale_moment: 'ko',
  };

  constructor() {
    this.rootNavigatorActionHorizontal = false;
    this.user = new User();
  }

  get locale(): ILocale {
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
