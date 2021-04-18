import {
  RootStackNavigationProps,
  RootStackParamList,
} from '../../components/navigations/RootStackNavigator';

import Button from '../uis/Button';
import React from 'react';
import {RouteProp} from '@react-navigation/core';
import styled from 'styled-components/native';
import {useTheme} from '../../providers/ThemeProvider';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'Temp'>;
  route: RouteProp<RootStackParamList, 'Temp'>;
}

function Page(props: Props): React.ReactElement {
  const {theme} = useTheme();

  const {
    route: {
      params: {param},
    },
    navigation,
  } = props;

  return (
    <Container>
      <Button
        testID="btn-back"
        onPress={(): void => navigation.goBack()}
        text={param}
        style={{
          backgroundColor: theme.text,
        }}
      />
    </Container>
  );
}

export default Page;
