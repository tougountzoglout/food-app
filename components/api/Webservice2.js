import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import axios from "axios";
import { URL, EP_BUS_SEARCH, API_KEY,EP_BUS_DETAILS } from "../api/WebService";

export const getBusiness2 = value => {
  return axios.get(`${URL}/${EP_BUS_SEARCH}`, {
    params: {
      limit: 50,
      term: value,
      location: "san jose"
    }
  });
};

export const getBusinessDetails = (value) => {
  return axios.get(`${URL}/${EP_BUS_DETAILS}/${value}`);
};

export const setupJWT2 = () => {
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${API_KEY}`;


      return config;
    },
    function (error) {
      // Do something with request error
      console.log(error);
      return Promise.reject(error);
    }
  );
};




export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  return <View style={styles.container}></View>;
}
