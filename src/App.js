import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyACMrot0c1R8z-wGFkjI9--3otuYbaNnxY',
    authDomain: 'bossmanager-9c0bd.firebaseapp.com',
    databaseURL: 'https://bossmanager-9c0bd.firebaseio.com',
    projectId: 'bossmanager-9c0bd',
    storageBucket: '',
    messagingSenderId: '694063534892'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
