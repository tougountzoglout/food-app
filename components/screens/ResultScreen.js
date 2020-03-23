import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { getBusinessDetails } from "../api/Webservice2";
import Restaurant from "../component/Restaurant";

export default function ResultScreen({ navigation }) {
  const id = navigation.getParam("id");
  console.log(id);
  const [result, setResult] = useState([]);

  
  const getBusinessDetail2 = (idd) => {
    // setupJWT2();
   // console.log(value);
    getBusinessDetails(idd)
      .then(response => {
        console.log(response.data);
        setResult(response.data);
      })
      .catch( (error) => {
        console.log(error.response.request._response);
      });
  };

  useEffect(() => {
    // console.log("Hhndsakjhd");
    getBusinessDetail2(id);
  }, []);


  if (!result){
    return null;
  }
  return (
    <View style={styles.container}>
      <Restaurant result={result}></Restaurant>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc"
  }
});
