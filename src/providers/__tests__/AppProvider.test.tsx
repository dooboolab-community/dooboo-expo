import * as React from 'react';

import {AppProvider, useAppContext} from '../AppProvider';
import {Button, Text, View} from 'react-native';
import {act, fireEvent, render} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import type {ReactTestRendererJSON} from 'react-test-renderer';
import type {RenderAPI} from '@testing-library/react-native';

let testingLib: RenderAPI;

const FakeChild = (): React.ReactElement => {
  const {state, resetUser, callDefault} = useAppContext();

  return (
    <View>
      <Text testID="TEXT">{JSON.stringify(state, null, 2)}</Text>
      <Button
        testID="BUTTON"
        onPress={(): void => {
          resetUser();
        }}
        title="Button"
      />
      <Button
        testID="BUTTON_NOT_VALID"
        onPress={(): void => {
          callDefault();
        }}
        title="Button"
      />
    </View>
  );
};

describe('[AppProvider] rendering test', () => {
  let json: ReactTestRendererJSON | ReactTestRendererJSON[] | null;

  const component = (
    <AppProvider>
      <FakeChild />
    </AppProvider>
  );

  it('should match component and snapshot', () => {
    testingLib = render(component);
    json = testingLib.toJSON();
    expect(json).toBeTruthy();
  });

  it('should call [resetUser] when button pressed', () => {
    testingLib = render(component);

    const btn = testingLib.getByTestId('BUTTON');

    act(() => {
      fireEvent.press(btn);
    });

    expect(btn).toBeTruthy();
  });

  it('should call [default] when button pressed', () => {
    testingLib = render(component);

    const btn = testingLib.getByTestId('BUTTON_NOT_VALID');

    act(() => {
      fireEvent.press(btn);
    });

    expect(btn).toBeTruthy();
  });
});

describe('[AppProvider] error rendering test', () => {
  let error: unknown;
  const component = <FakeChild />;

  it('should throw error when [AppProvider] is not wrapped', () => {
    try {
      render(component);
    } catch (e) {
      error = e;
    }

    expect(error).toBeInstanceOf(Error);
  });
});
