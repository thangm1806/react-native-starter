import React from "react";
import { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(this.props);
  }
  render() {
    return (
      <View>
        <Text>
          {this.props.main}
        </Text>
        <Text>
          Current conditions: {this.props.description}
        </Text>
        <Text>
          {this.props.temp}°F</Text>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF"
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF"
  }
});
