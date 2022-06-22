import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:9367",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 요청 전 처리
api.interceptors.request.use(
  async (config) => {
    console.log("------- axios before -------");
    //console.log(config);
    return config;
  },
  (error) => {
    console.log("axios request error : ", error);
    return Promise.reject(error);
  }
);

// 요청 후 처리
api.interceptors.response.use(
  async (response) => {
    console.log("------- axios after -------");
    //console.log(response);
    return response;
  },
  (error) => {
    console.log("axios response error : ", error);
    return Promise.reject(error);
  }
);

export default api;
