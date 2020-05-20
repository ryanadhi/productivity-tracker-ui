import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Reference extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={this.props.image} style={{ width: 50, height: 50 }} />
        </View>
        <View style={{ flex: 5, margin: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              letterSpacing: -0.5,
              color: "#1b1b2f",
            }}
          >
            {this.props.title}
          </Text>
          <Text style={{ fontSize: 15, color: "#BEC4C9" }}>
            {this.props.subtitle}
          </Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity>
            <Ionicons name="ios-arrow-forward" size={24} color="#1b1b2f" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
