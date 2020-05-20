import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Day extends Component {
  render() {
    return (
      <View style={styles.dayContainer}>
        <View
          style={{
            borderRadius: 8,
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: this.props.active,
          }}
        >
          <Text style={{ color: "#f6f6f6" }}>{this.props.dayname}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dayContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
