import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({term,onTermChange,onEndEdit}) {
  //console.log(props)
  return (
    <View style={styles.container}>
      <Feather name="search" size={30} style={styles.icon}></Feather>
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
        style={styles.textinput}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onEndEdit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcfcfc",
    flexDirection: "row",
    backgroundColor: "grey",
    borderRadius: 3,
    alignContent: "stretch",
    height: 50,
    margin: 15
  },
  textinput: {
    marginVertical: 5,
    marginLeft: 8
  },
  icon: {
    marginVertical: 8,
    marginHorizontal: 8
  }
});
