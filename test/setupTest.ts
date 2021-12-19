import {cleanup} from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Cleanup after each case.
afterEach(cleanup);

process.on('unhandledRejection', (err) => {
  fail(err);
});

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
