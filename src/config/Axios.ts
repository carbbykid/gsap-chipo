import axios from "axios";

const Axios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${process.env.URL}/api`,
});

export default Axios;
