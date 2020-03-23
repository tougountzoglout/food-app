import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

export default function Restaurant({ result }) {
  
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.text}>Photos</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}
        data={result.photos}
        keyExtractor={result => result}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }}></Image>;
        }}
      />
     
      <Text style={styles.rating}>Rating : {result.rating}</Text>
      <Text  style={styles.text}>Categories: </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={result.categories}
        keyExtractor={res => res.alias}
        renderItem={({ item }) => {
          return <Text style={styles.list}>{item.alias} </Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    margin: 3,
    flex: 1
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    paddingVertical: 3,
    alignSelf: "center"
  },
  text: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 10,
    marginHorizontal:10,
    paddingHorizontal: 5
    ,paddingBottom: 5
  },
  rating: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderTopColor:"black",
    borderTopWidth:2,
    margin: 10,
    padding: 5
  },
  list: {
    marginHorizontal: 10,
    paddingHorizontal: 5
  },
  image: {
    borderRadius: 3,
    width: 250,
    flex: 1,
    margin: 4
  }
});
