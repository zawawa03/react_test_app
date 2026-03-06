import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-type": "application/json" },
});

api.intercepters.request.use(
  (config: any) => {
    const accessToken = localStorage.getItem("access-token")
    const client = localStorage.getItem("client")
    const uid = localStorage.getItem("uid")

    if (accessToken && client && uid) {
      config.headers["access-token"] = accessToken
      config.headers["client"] = client
      config.headers["uid"] = uid
    }

    return config
  }
)

api.intercepters.response.use(
  (response: any) => response,
  (error: any) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access-token");
      localStorage.removeItem("client");
      localStorage.removeItem("uid");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
)
