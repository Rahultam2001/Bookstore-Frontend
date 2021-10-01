import axios from "axios";

const instance = axios.create({
  baseURL: "https://bookstore-in.herokuapp.com",
  withCredentials: true,
});

const obj = JSON.parse(localStorage.getItem("bookstore_user"));
if (obj?.authHeader) {
  instance.defaults.headers.common["Authorization"] = obj.authHeader;
}

export default instance;
