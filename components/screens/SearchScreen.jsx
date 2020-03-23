import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import SearchBar from "../component/SearchBar";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc"
  }
});
