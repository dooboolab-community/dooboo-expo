# Expo Flow Starter
> Specification
* flow
* react-navigation
* test jest with flow
* localization
* mobx
* data models

# Gain points
```
1. Flow support.
2. Sample of mobx and data modeling.
3. Able to learn how to structure react app with flow and mobx.
4. Test with jest.
5. Learn how to localize your project.
```

# INSTALL
```
1. npm install
2. expo start
```

# Structures
```text
app/
├─ .doobooo // necessary if using dooboo-cli
├─ .expo
├─ assets
│  └─ icons // app icons
│  └─ images // app images like background images
├─ node_modules/
├─ src/
│  └─ apis
│  └─ components
│  └─ models
│  └─ stores
│  └─ utils
│  └─ index.tsx
├─ test/
├─ .babelrc
├─ .gitignore
├─ .watchmanconfig
├─ App.js
├─ app.json
├─ package.json
├─ README.md
├─ rn-cli.config.js
├─ STRINGS.js
├─ tsconfig.json
└─ tslint.json
```

# Running the project
Running the project is as simple as running
```sh
exp start
```
Or you can use `exp xde`.

# Testing the project
Testing is also just a command away:
```sh
npm test
```
> Result
```
> jest -u
 PASS  src/components/screen/__tests__/Intro.test.tsx (6.1s)
 › 2 snapshots updated.
 PASS  src/components/shared/__tests__/Button.test.tsx (6.106s)
 › 3 snapshots updated.

Snapshot Summary
 › 5 snapshots updated in 2 test suites.

Test Suites: 2 passed, 2 total
Tests:       5 passed, 5 total
Snapshots:   5 updated, 1 passed, 6 total
Time:        9.322s
Ran all test suites.s
```

# Writing tests with Jest
We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `npm test` to test if it succeeds and look more closer opening the source.

# Localization
We've defined Localization strings in `STRINGS.js` which is in root dir.
```
import Expo from 'expo';
import appStore from './stores/appStore';

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
```

## Expo version
25.0.0
