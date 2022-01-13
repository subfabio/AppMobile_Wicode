import axios from "axios";

export default axios.create({
  baseURL: "http://10.200.100.30:3000/api",
});
