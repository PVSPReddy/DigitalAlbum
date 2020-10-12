import { NavigationContainer } from '@react-navigation/native';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { RootReducer } from './app/BAL/RootReducer';
import AppNavigation from './app/Navigation/AppNavigation';

const store = createStore(RootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
