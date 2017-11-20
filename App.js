import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import CodePush from 'react-native-code-push'
import Analytics from 'appcenter-analytics'
import Crashes from 'appcenter-crashes'

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      status : ''
    }
  }

  sendEvent(){
    Analytics.trackEvent('Log Event', {
      prop1 : new Date().getSeconds()
    })
  }

  nativeCrash(){
    Crashes.generateTestCrash();
  }

  componentWillMount(){
    this.checkupdate()
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
          Welcome to App Center React Native!
        </Text>
        <Text style={styles.instructions}>
          CodePush
        </Text>

        <Button title="Event" onPress={ ()=> this.sendEvent() } />


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
