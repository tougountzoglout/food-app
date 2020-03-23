import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../component/SearchBar";
import WebService, {URL,EP_BUS_SEARCH} from "../api/WebService";
import axios from 'axios'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc"
  }
});

class SearchScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      results: []
    };
  }

  getBusiness = term => {
    WebService.setupJWT();
    axios.get(`${URL}/${EP_BUS_SEARCH}`, {
      params: {
        limit: 50,
        term: term,
        location: "san jose"
      }
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          term={this.state.term}
          onTermChange={newTerm => this.setState({ term: newTerm })}
          onEndEdit={()=>this.getBusiness('pasta')}
        ></SearchBar>
        <Text>{this.state.term}</Text>
      </View>
    );
  }
}

export default SearchScreen2;
