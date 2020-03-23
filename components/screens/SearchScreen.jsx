import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../component/SearchBar";
import useBusinessSearch from "../api/useBusinessSearch";
import ResultList from "../component/ResultList";

export default function SearchScreen() {
  const [term, setTerm] = useState("");

  const [results, getBusiness, errorMsg] = useBusinessSearch();

  const filterResults = price => {
   return results.filter(result => {
      return result.price == price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onEndEdit={() => getBusiness({ term })}
      ></SearchBar>
      
       {errorMsg ? <Text>{errorMsg}</Text> : null} 
      <ScrollView>
      {filterResults('$').length>0 ?<ResultList title="Cheap Restaurants" results={filterResults('$')}></ResultList> :null}
      {filterResults('$$').length>0 ? <ResultList title="Mediocre Restaurants" results={filterResults('$$')}></ResultList> :null}
      {filterResults('$$$').length>0 ? <ResultList title="Expensive Restaurants" results={filterResults('$$$')}></ResultList> :null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc"
  }
});
