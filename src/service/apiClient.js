import axios from "axios";

const TOKEN = localStorage.getItem('access_token')

const apiClient = axios.create({
  baseURL: "http://localhost:3008/api",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${TOKEN} `
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
    // const {config,status, data} = error.response;
    // if(config.url === '/api/register' && status === 400) {
    //   console.log(error.response);
    //   throw new Error('Invalid configuration');
    // }
    console.log(error.response.data)
    return Promise.reject(error.response.data.msg);
  }
);
export default apiClient;