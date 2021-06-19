import {ThemeProvider, ThemeType} from 'dooboo-ui';

import {AppProvider} from './AppProvider';
import React from 'react';

interface Props {
  initialThemeType?: ThemeType;
  children?: React.ReactElement;
}

// Add providers here
const RootProvider = ({
  initialThemeType,
  children,
}: Props): React.ReactElement => {
  return (
    <ThemeProvider initialThemeType={initialThemeType}>
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
