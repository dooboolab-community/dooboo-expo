
import Expo from 'expo';
import appStore from '@stores/appStore';

const strings = {
  en: {
    HELLO: 'Hello',
    LOGIN: 'Login',
    EMAIL: 'Email',
    PASSWORD: 'Password',
    SIGNUP: 'SIGN UP',
    LOGIN: 'LOGIN',
    FORGOT_PW: 'Forgot password?',
  },
  ko: {
    HELLO: '안녕하세요',
    LOGIN: '로그인',
    EMAIL: '이메일',
    PASSWORD: '패스워드',
    SIGNUP: '회원가입',
    LOGIN: '로그인',
    FORGOT_PW: '비밀번호를 잊어버리셨나요?',
  },
};

export const setLocale = async () => {
  const locale = await Expo.Util.getCurrentLocaleAsync();
  const localeStr = locale.substring(0, 2);

  appStore.locale = {
    value: localeStr,
    locale_moment: localeStr,
  };
};

export const getString = (param) => {
  const LANG = appStore.locale.value;
  const string = strings[LANG] ? strings[LANG][param.toString()] : null;

  if (!string) {
    return '...';
  }
  return string.toString();
};
