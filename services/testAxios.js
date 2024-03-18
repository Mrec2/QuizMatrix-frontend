import InitAxios from "./initAxios";

class TestAxios extends InitAxios {
  // getTest() {
  //   console.log("Entra en la función getTest()");
  //   return this.axios
  //     .get("")
  //     .then(() => console.log("Probando que se retorne la promesa"));
  // }

  constructor() {
    super("http://localhost:8080/test-project-backend/testServlet");
  }

  async postTest(data) {
    try {
      const response = await this.axios.post("", data);
      alert("Datos enviados correctamente. -->" + data);
      if (response.status === 200) {
        // const nuevaUrl = response.data.url;
        window.location.href = "/test-doing";
      } else {
        console.error("Respuesta del servidor no fue 200 OK");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  }
}

export default TestAxios;
