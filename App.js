import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import CodePush from 'react-native-code-push'

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      status : ''
    }
  }

  checkupdate(){
    CodePush.sync({
      updateDialog : true,
      installMode: CodePush.InstallMode.INMADIATE
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button title="CodePush" onPress={ ()=> this.checkupdate() }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
