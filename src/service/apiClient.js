import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3008/api",
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
apiClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiClient.interceptors.response.use(
  function (response) {
   
    return response.data;
  },
  function (error) {
    console.log(error.response.data);
    return Promise.reject(error.response.data);
  }
);
export default apiClient;