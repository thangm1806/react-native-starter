/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import Forecast from './Forecast';

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends React.Component<Props> {
  constructor(props) {
    console.log(Forecast);
    super(props);
    this.state = {
      zip: "",
      forecast: {
        main: "Clouds",
        description: "few clouds",
        temp: 45.7
      }
    };
    this._handleTextChange = this._handleTextChange.bind(this);
  }

  _handleTextChange(event) {
    var zip = event.nativeEvent.text;
    this.setState(state => {
      return { zip: zip };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>You input {this.state.zip}.</Text>
        <Forecast main={this.state.forecast.main} description={this.state.forecast.description} temp={this.state.forecast.temp}/>
        <TextInput
          style={styles.input}
          returnKeyType="go"
          onSubmitEditing={this._handleTextChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  }
});
