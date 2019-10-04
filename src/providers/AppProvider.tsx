import React, { useReducer } from 'react';
import { ThemeType, User } from '../types';

import { AppContext } from '../contexts';

const AppConsumer = AppContext.Consumer;

export enum ActionType {
  ResetUser = 'reset-user',
  SetUser = 'set-user',
  ChangeThemeMode = 'change-theme-mode',
}

interface ResetUserAction {
  type: ActionType.ResetUser;
  payload: User;
}

interface SetUserAction {
  type: ActionType.SetUser;
  payload: User;
}

interface ChangeThemeModeAction {
  type: ActionType.ChangeThemeMode;
  payload: ThemeType;
}

type Action = ChangeThemeModeAction | SetUserAction | ResetUserAction;

interface Props {
  navigation?: any;
  children?: any;
}

export interface State {
  user: User;
  theme: ThemeType;
}

export const initialState: State = {
  theme: ThemeType.LIGHT,
  user: {
    displayName: '',
    age: 0,
    job: '',
  },
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.ChangeThemeMode:
      return { ...state, theme: action.payload };
    case ActionType.ResetUser:
      return { ...state, user: initialState.user };
    case ActionType.SetUser:
      return { ...state, user: action.payload };
  }
};

function AppProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export { AppConsumer, AppProvider, AppContext };
