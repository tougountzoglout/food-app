import axios from "axios";
import { Component } from "react";

export const URL = "https://api.yelp.com/v3";

export const API_KEY =
  "8UPMy4yI4lpQ1Rf0h2BolJ_9OIKf3EarZ_J_lvtcVSWB276I_a24eqzhetaajKhiXaIs8iFBpta7RUjt7GuOLcx61o2TH1La8B4fA7tiS9zzPAAMnS1fH363T850XnYx";

export const EP_BUS_SEARCH = "businesses/search";

export const EP_PHO_SEARCH = "businesses/search/phone";

export const EP_BUS_DETAILS = "businesses/";

class WebService extends Component {
  constructor(props) {
    super(props);
  }

  setupJWT = () => {
    // Add a request interceptor
    axios.interceptors.request.use(
      function(config) {
        // Do something before request is sent
        config.headers.authentication = `Bearer ${API_KEY}`;
        return config;
      },
      function(error) {
        // Do something with request error
        console.log(error);
        return Promise.reject(error);
      }
    );
  };

  getBusiness = term => {
    axios.get(`${URL}/${EP_BUS_SEARCH}`, {
      params: {
        limit: 50,
        term: term,
        location: "san jose"
      }
    });
  };
}

export default new WebService();
