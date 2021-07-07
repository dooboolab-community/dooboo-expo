import {Button, useTheme} from 'dooboo-ui';
import {Image, View} from 'react-native';

import {IC_MASK} from '../../utils/Icons';
import IntroView from '../uis/IntroTemp';
import React from 'react';
import {RootStackNavigationProps} from '../navigations/RootStack';
import {User} from '../../types';
import {getString} from '../../../STRINGS';
import styled from '@emotion/native';
import {useAppContext} from '../../providers/AppProvider';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({theme}) => theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40px;
  width: 72%;
  align-self: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {
  let timer: any;

  const {setUser} = useAppContext();

  const {changeThemeType} = useTheme();
  const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false);

  const onLogin = (): void => {
    setIsLoggingIn(true);

    timer = setTimeout(() => {
      const tempUser: User = {
        displayName: 'dooboolab',
        age: 30,
        job: 'developer',
      };

      setUser(tempUser);
      setIsLoggingIn(false);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <Container>
      <IntroView />
      <ButtonWrapper>
        <Button
          testID="btn-login"
          leftElement={
            <Image
              source={IC_MASK}
              style={{
                position: 'absolute',
                left: 12,
                width: 24,
                height: 24,
              }}
            />
          }
          loading={isLoggingIn}
          onPress={(): void => onLogin()}
          text={getString('LOGIN')}
        />
        <View style={{marginTop: 12}} />
        <Button
          testID="btn-navigate"
          onPress={(): void =>
            props.navigation.navigate('Temp', {
              param: 'GO BACK',
            })
          }
          text={getString('NAVIGATE', {name: 'Temp'})}
        />
        <View style={{marginTop: 12}} />
        <Button
          testID="btn-theme"
          onPress={(): void => changeThemeType()}
          text={getString('CHANGE_THEME')}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;
