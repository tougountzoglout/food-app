import{ useState,useEffect } from "react";
import { getBusiness2, setupJWT2 } from "./Webservice2";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getBusiness = value => {
    setupJWT2();
    getBusiness2(value)
      .then(response => {
     
        setResults(response.data.businesses);
      })
      .catch(error => {
      
        setErrorMsg("Something went wrong");
      });
  };

  useEffect(() => {
    getBusiness("pasta");
  }, []);

  return [results, getBusiness,errorMsg];
};