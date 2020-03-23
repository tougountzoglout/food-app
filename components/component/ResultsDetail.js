import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";


export default function ResultDetail({ result }) {
  //console.log(props)
  return (
    <View style={styles.container}>
      <Image style={styles.image}  source={{uri:result.image_url}}/>
      <Text style={styles.text}>{result.name}</Text>
      <Text style={styles.text2}>{result.rating} Reviews: {result.review_count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      marginLeft:3
},
  image: {
    borderRadius:3,
    width:250
    ,height:120

  },
  text: {
fontSize:14,
fontWeight:"bold"    
}, text2: {
    fontSize:12,
    fontWeight:"100"    
    }
});
