import '@emotion/react';
import type {DoobooTheme as DoobooUiTheme} from '@dooboo-ui/theme';
import type {CustomAppTheme} from './theme';

type AllTheme = CustomAppTheme & DoobooUiTheme;

declare module '@emotion/react' {
  export interface Theme extends AllTheme {}
}

declare module 'dooboo-ui' {
  export interface DoobooTheme extends AllTheme {}
}
