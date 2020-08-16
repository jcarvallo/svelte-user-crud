import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:5000/api",
});

const apiRequest = (method, url, request = {}) => {
  const headers = { authorization: "" };

  return axiosApi({
    method,
    url,
    data: request,
    headers,
  }).then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const Api = {
  get: (url, request) => apiRequest("get", url, request),
  post: (url, request) => apiRequest("post", url, request),
  put: (url, request) => apiRequest("put", url, request),
  patch: (url, request) => apiRequest("patch", url, request),
  deleteRequest: (url) => apiRequest("delete", url),
};
export default Api;
