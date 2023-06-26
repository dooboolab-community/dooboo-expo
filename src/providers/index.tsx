import {AppProvider} from './AppProvider';
import {DoobooProvider} from 'dooboo-ui';
import type {ReactElement} from 'react';
import type {ThemeType} from 'dooboo-ui';
import {theme} from '../theme';

interface Props {
  initialThemeType?: ThemeType;
  children?: ReactElement;
}

// Add providers here
const RootProvider = ({initialThemeType, children}: Props): ReactElement => {
  return (
    <DoobooProvider
      themeConfig={{
        customTheme: theme,
        initialThemeType: initialThemeType || undefined,
      }}
    >
      <AppProvider>{children}</AppProvider>
    </DoobooProvider>
  );
};

export default RootProvider;
