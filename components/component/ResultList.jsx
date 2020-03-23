import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ResultDetail from "./ResultsDetail";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

function ResultList({ title, results,navigation }) {
  //console.log(props)
  
  if (!results){
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>
            {
              navigation.navigate("ShowResult",{id:item.id})
            }
            
            }>
              <ResultDetail result={item}></ResultDetail>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
export default withNavigation(ResultList);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    borderRadius: 3,
    alignContent: "stretch",
    margin: 3
  },
  title: {
    fontSize: 18,
    fontWeight: "900",
    paddingVertical: 3
  },
  list: {
    padding: 4
  }
});
