import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";
import Day from "../components/Day";
import ChallengeCard from "../components/ChallengeCard";
import ProjectCard from "../components/ProjectCard";

export default class Home extends Component {
  state = {
    activestate: "rgba(255, 255, 255, 0.291821)",
  };
  change = () => {
    return this.props.navigation.navigate("Challenge");
  };
  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.firstContainer}>
          <View style={styles.firstSection}></View>
          <View style={styles.secondSection}>
            <Text style={styles.name}>Hi.. John</Text>
            <Text style={styles.subtitle}>Here is your progress</Text>
          </View>
          <View style={styles.thirdSection}>
            <ImageBackground
              source={require("../assets/chart.png")}
              style={{
                width: "100%",
                height: 250,
              }}
            />
          </View>
          <View style={styles.fourthSection}>
            <Day dayname="Sun" />
            <Day dayname="Mon" />
            <Day dayname="Tue" />
            <Day dayname="Wed" />
            <Day dayname="Thu" active={this.state.activestate} />
            <Day dayname="Fri" />
            <Day dayname="Sat" />
          </View>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.line}></View>
          <View style={styles.progress}>
            <Text style={[styles.textone]}>My Progress</Text>
          </View>
          <View style={styles.cards}>
            <ChallengeCard
              move="bounceInLeft"
              title="Challenges"
              subtitle="7 out of 10 challenges"
              completed={`${(7 / 10) * 100}%`}
              screenchange={() => this.change()}
            />
            <ProjectCard
              move="bounceInRight"
              title="Projects"
              subtitle="2 out of 4 projects"
              completed={`${(2 / 4) * 100}%`}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#f08a5d",
  },
  firstContainer: {
    flex: 1.5,
  },
  firstSection: {
    flex: 1,
  },
  secondSection: {
    flex: 0.8,
    marginLeft: 35,
  },
  thirdSection: {
    flex: 2.5,
    justifyContent: "center",
  },
  fourthSection: {
    flex: 0.5,
    color: "#f6f6f6",
    flexDirection: "row",
  },
  secondContainer: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  name: {
    fontSize: 38,
    color: "#f6f6f6",
    fontWeight: "bold",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 20,
    color: "#f6f6f6",
  },
  line: {
    width: "20%",
    height: 8,
    backgroundColor: "#BEC4C9",
    borderRadius: 4,
    marginVertical: "4%",
    left: "40%",
  },
  progress: {
    left: 50,
  },
  textone: {
    fontSize: 20,
    color: "#1b1b2f",
    letterSpacing: -0.5,
  },
  cards: {
    flex: 1,
    width: "90%",
    marginTop: 10,
    marginHorizontal: 30,
  },
});
