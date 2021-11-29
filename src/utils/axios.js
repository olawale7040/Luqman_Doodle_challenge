import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=6sQgBPf4EnBJ`,
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
