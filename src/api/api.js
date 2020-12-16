import axios from "axios";

const callAxios = (url, params, method, reqbody = {}) => {

  const endpoint = "https://jsonplaceholder.typicode.com/todos"+url;

  const axiosInstance = axios.create({
    headers: { "Content-Type": "application/json" },
  });

  switch (method) {
    case "GET":
      return axiosInstance
        .get(endpoint, { params })
        .then((response) => response)
        .catch((error) => {
          throw error;
        });
   
    case "PUT":
      return axiosInstance
        .put(endpoint, reqbody, { params })
        .then((response) => response)
        .catch((error) => {
          throw error;
        });
   
  }
};

export default callAxios;
