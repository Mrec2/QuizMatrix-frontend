import InitAxios from "./initAxios";

class TestAxios extends InitAxios {
  constructor() {
    super();
  }

  getTest() {
    console.log("Entra en la función getTest()");
    return this.axios
      .get("")
      .then(() => console.log("Probando que se retorne la promesa"));
  }
}

export default TestAxios;
