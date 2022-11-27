import 'react-native';

import {
  createTestElement,
  createTestProps,
} from '../../../test/utils/testUtils';

import IntroTemp from '../../../src/components/uis/IntroTemp';
import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {render} from '@testing-library/react-native';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

describe('[IntroTemp] render', () => {
  props = createTestProps();

  component = createTestElement(<IntroTemp {...props} />);

  it('renders without crashing', () => {
    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
