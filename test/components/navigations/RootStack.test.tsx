import {createTestElement, createTestProps} from '../../utils/testUtils';

import type {ReactElement} from 'react';
import StackNavigator from '../../../src/components/navigations/RootStack';
import renderer from 'react-test-renderer';

let props: any;
let component: ReactElement;

describe('[Stack] navigator', () => {
  beforeEach(() => {
    props = createTestProps();

    component = createTestElement(<StackNavigator {...props} />);
  });

  it('should renders without crashing', async () => {
    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('should renders [Dark] mode', async () => {
    component = createTestElement(<StackNavigator {...props} />, 'dark');

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });
});
