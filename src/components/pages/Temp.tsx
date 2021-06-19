import {
  RootStackNavigationProps,
  RootStackParamList,
} from '../navigations/RootStack';

import {Button} from 'dooboo-ui';
import React from 'react';
import {RouteProp} from '@react-navigation/core';
import styled from '@emotion/native';

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
      />
    </Container>
  );
}

export default Page;
