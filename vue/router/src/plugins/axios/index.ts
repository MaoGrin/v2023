import Axios from "./Axios";

const http = new Axios({
  baseURL:"/api",
  timeout:100000,
  
})

export {http}