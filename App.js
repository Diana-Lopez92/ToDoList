/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Header } from 'react-native-elements';

import Lista from './src/components/Lista';
import Formulario from './src/components/Formulario';

const App = (props) => {

  const [screen, setScreen] = useState('Lista')

  const renderScreen = () => {
    return screen == 'Lista' ? (<Lista switchScreen={setSwitch}/>) : <Formulario/>;
  }

  const setSwitch = (screenName) => {
    setScreen(screenName)
  }


  return (
    <View style={style.container}>
      <Header centerComponent={{ text: 'To Do List', style: { color: '#fff' } }}/>
      {renderScreen()}
    </View>
  )
};


export default App;

const style = {
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  h1Style: {
    fontWeight: 'bold',
    fontSize: 35
  }
}