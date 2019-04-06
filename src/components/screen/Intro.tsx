import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { inject } from 'mobx-react/native';
import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';

import { ratio, colors } from '../../utils/Styles';
import { IC_MASK } from '../../utils/Icons';
import User from '../../models/User';
import { getString } from '../../../STRINGS';
import Button from '../shared/Button';

interface IStyles {
  container: ViewStyle;
  titleTxt: TextStyle;
  txtLogin: TextStyle;
  imgBtn: ImageStyle;
  viewUser: ViewStyle;
  txtUser: TextStyle;
  btnBottomWrapper: ViewStyle;
  btnLogin: ViewStyle;
  btnNavigate: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleTxt: {
    marginTop: 100,
    color: colors.dusk,
    fontSize: 24,
  },
  txtLogin: {
    fontSize: 14,
    color: 'white',
  },
  imgBtn: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
  },
  viewUser: {
    marginTop: 60,
    alignItems: 'center',
  },
  txtUser: {
    fontSize: 16,
    color: colors.dusk,
    lineHeight: 48,
  },
  btnBottomWrapper: {
    position: 'absolute',
    bottom: 40,
  },
  btnLogin: {
    backgroundColor: colors.dodgerBlue,
    alignSelf: 'center',
    borderRadius: 4,
    width: 320,
    height: 52,

    alignItems: 'center',
    justifyContent: 'center',
  },
  btnNavigate: {
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 4,
    width: 320,
    height: 52,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface IProps {
  store?: any;
  navigation?: any;
}
interface IState {
  isLoggingIn: boolean;
}

@inject('store') @observer
class Page extends Component<IProps, IState> {
  public state = {
    isLoggingIn: false,
  };

  private timer: any;

  public componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleTxt}>DOOBOO NATIVE</Text>
        <View style={styles.viewUser}>
          <Text style={styles.txtUser}>{this.props.store.user.displayName}</Text>
          <Text style={styles.txtUser}>{this.props.store.user.age}</Text>
          <Text style={styles.txtUser}>{this.props.store.user.job}</Text>
        </View>
        <View style={styles.btnBottomWrapper}>
          <Button
            isLoading={this.state.isLoggingIn}
            onPress={this.onLogin}
            style={styles.btnLogin}
            textStyle={styles.txtLogin}
            imgLeftSrc={IC_MASK}
            imgLeftStyle={styles.imgBtn}
          >{getString('LOGIN')}</Button>
          <Button
            onPress={() => this.props.navigation.navigate('Temp') }
            style={[
              styles.btnNavigate,
              {
                marginTop: 15,
              },
            ]}
            textStyle={{
              color: colors.dodgerBlue,
            }}
          >Navigate</Button>
        </View>
      </View>
    );
  }

  private onLogin = () => {
    this.props.store.user = new User();
    this.setState({ isLoggingIn: true }, () => {
      this.timer = setTimeout(() => {
        this.props.store.user.displayName = 'dooboolab';
        this.props.store.user.age = 30;
        this.props.store.user.job = 'developer';
        this.setState({ isLoggingIn: false });
      }, 1000);
    });
  }
}

export default Page;
