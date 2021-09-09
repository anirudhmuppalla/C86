import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {RFValue, TouchableOpacity} from "react-native-gesture-handler"
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

let stories = require("./temp_stories.json");

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.signInWithGoogleAsync()
        }}>
          <Image source={require("../assets/google_icon.png")}
          style={styles.googleIcon}/>
          <Text style={styles.googleText}>
            Sign In With Google
          </Text>
        </TouchableOpacity>
      </View>
    );
  }}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
