# Expo React Native Typescript Starter
> Specification
* typescript
* react-navigation
* test jest with typescript
* localization
* mobx
* data models

# Gain points
```
1. Typescript support. No need to run tsc because webpack is doing it for you with ts-loader.
2. Sample of mobx and data modeling.
3. Able to learn how to structure react app with typescript and mobx.
4. Test with jest-ts.
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
> node node_modules/jest/bin/jest.js -u

 PASS  src/components/shared/__tests__/Button.test.tsx
  ● Console

    console.log src/utils/Styles.ts:5
      calRatio: 8.995502248875562
    console.log src/utils/Styles.ts:19
      calRatio: 83.33333333333333
    console.log src/utils/Styles.ts:24
      ratio: 2.083333333333333

 PASS  src/components/screen/__tests__/Intro.test.tsx
  ● Console

    console.log src/utils/Styles.ts:5
      calRatio: 8.995502248875562
    console.log src/utils/Styles.ts:19
      calRatio: 83.33333333333333
    console.log src/utils/Styles.ts:24
      ratio: 2.083333333333333

 › 1 snapshot written.
 › 1 snapshot updated.

Snapshot Summary
 › 1 snapshot written in 1 test suite.
 › 1 snapshot updated in 1 test suite.

Test Suites: 2 passed, 2 total
Tests:       5 passed, 5 total
Snapshots:   1 updated, 1 added, 4 passed, 6 total
Time:        2.472s, estimated 4s
Ran all test suites.
```

# Writing tests with Jest
We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `npm test` to test if it succeeds and look more closer opening the source.

# Localization
We've defined Localization strings in `STRINGS.js` which is in root dir.
```
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
```

## Expo version
25.0.0
