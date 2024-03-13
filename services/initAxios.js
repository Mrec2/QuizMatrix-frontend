import axios from "axios";

class InitAxios {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/todos/",
    });
  }
}

export default InitAxios;
