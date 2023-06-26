import {Button, Icon, useDooboo} from 'dooboo-ui';
import type {
  RootStackNavigationProps,
  RootStackParamList,
} from '../navigations/RootStack';

import React from 'react';
import type {RouteProp} from '@react-navigation/core';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.bg.default};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'Temp'>;
  route: RouteProp<RootStackParamList, 'Temp'>;
}

function Page(props: Props): React.ReactElement {
  const {theme} = useDooboo();

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
        startElement={
          <Icon
            name="ArrowLeftAlt"
            size={16}
            color={theme.text.contrast}
            style={{
              marginRight: 12,
            }}
          />
        }
        text={param}
      />
    </Container>
  );
}

export default Page;
