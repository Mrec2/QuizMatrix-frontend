import axios from "axios";

class InitAxios {
  constructor(url) {
    this.axios = axios.create({
      // baseURL: "http://localhost:8080/TestBackEnd/testServlet/",

      // baseURL: "http://localhost:8080/test-project-backend/testServlet",

      baseURL: url,
    });
  }
}

export default InitAxios;
