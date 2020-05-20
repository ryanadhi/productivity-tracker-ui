import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animated from "react-native-animatable";

export default class HorizontalList extends React.Component {
  render() {
    return (
      <Animated.View
        animation={this.props.animation}
        duration={1200}
        style={styles.memo1}
      >
        <ImageBackground
          source={this.props.background}
          style={{
            width: "120%",
            height: "100%",
            position: "absolute",
            opacity: 0.5,
          }}
        />
        <View style={styles.insideone}>
          <Text style={{ fontSize: 20, color: "#1b1b2f", width: 200 }}>
            {this.props.title}
          </Text>
          <Text style={{ color: "#1b1b2f", fontSize: 14, marginVertical: 5 }}>
            {this.props.week}
          </Text>
        </View>
        <View style={styles.insidetwo}></View>
        <TouchableOpacity style={styles.insidethree}>
          <Ionicons
            name="ios-information-circle-outline"
            size={24}
            color="#1b1b2f"
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  memo1: {
    flex: 1,
    marginVertical: 10,
    marginRight: 15,
    borderRadius: 18,
    backgroundColor: "#F4F9FC",
  },
  insideone: {
    flex: 1,
    padding: 10,
  },
  insidetwo: {
    flex: 2,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  insidethree: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    margin: 10,
  },
});
