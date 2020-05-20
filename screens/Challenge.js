import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Constants from "expo-constants";
import HorizontalList from "../components/HorizontalList";
import Reference from "../components/Reference";

export default class Challenge extends Component {
  render() {
    return (
      <View style={styles.challengeContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{ width: "100%", height: "120%" }}
        >
          <View style={styles.header}>
            <Text style={styles.inline}>My Challenges</Text>
          </View>
          <View style={styles.horizontalList}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ width: "200%" }}
              showsHorizontalScrollIndicator={false}
            >
              <HorizontalList
                background={require("../assets/vue.png")}
                title="Vue"
                week="Week 1"
                animation="bounceInLeft"
              />
              <HorizontalList
                background={require("../assets/react.png")}
                title="React"
                week="Week 2"
                animation="bounceInLeft"
              />
              <HorizontalList
                background={require("../assets/react.png")}
                title="React Native"
                week="Week 3"
              />
              <HorizontalList
                background={require("../assets/angular.png")}
                title="Angular"
                week="Week 4"
              />
            </ScrollView>
          </View>
          <View style={styles.referenceView}>
            <Text style={styles.reference}>References</Text>
          </View>
          <TouchableOpacity>
            <Animatable.View
              animation="fadeInLeft"
              duration={1500}
              style={styles.referenceList}
            >
              <Reference
                image={require("../assets/vue.png")}
                title="Vue"
                subtitle="The Progressive JavaScript Framework "
              />
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Animatable.View
              animation="fadeInRight"
              duration={1500}
              style={styles.referenceList}
            >
              <Reference
                image={require("../assets/react.png")}
                title="React"
                subtitle="A JavaScript library for building user interfaces"
              />
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Animatable.View
              animation="fadeInLeft"
              duration={1500}
              style={styles.referenceList}
            >
              <Reference
                image={require("../assets/angular.png")}
                title="Angular"
                subtitle="One framework. Mobile & desktop."
              />
            </Animatable.View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  challengeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  inline: {
    fontSize: 38,
    letterSpacing: -0.5,
    fontWeight: "bold",
    color: "#1b1b2f",
  },
  horizontalList: {
    height: 250,
    width: "100%",
  },
  reference: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: -0.5,
    color: "#1b1b2f",
  },
  referenceList: {
    height: 85,
    width: "100%",
    alignSelf: "center",
    borderRadius: 18,
    marginBottom: 10,
    backgroundColor: "#F4F9FC",
  },
});
