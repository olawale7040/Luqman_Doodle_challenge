import axios from "axios";

const myToken = "6sQgBPf4EnBJ";
const axiosInstance = axios.create({
  baseURL: `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/`,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
