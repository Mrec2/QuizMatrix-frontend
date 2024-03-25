import { useEffect, useState } from "react";

import styles from "./TestDoing.module.css";

const TestDoing = () => {
  // Define el estado para almacenar los datos
  const [datos, setDatos] = useState([]);
  const [miTest, setMiTest] = useState("");

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("misDatos");
    if (datosLocalStorage) {
      setDatos(JSON.parse(datosLocalStorage));
    }
  }, []);

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("queTest");
    if (datosLocalStorage) {
      console.log("miTest", datosLocalStorage);
      setMiTest(datosLocalStorage);
    }
  }, []);

  return (
    <div className={styles.testDoingContainer}>
      {miTest === "js" && <h1>Test de Javascript</h1>}
      {miTest === "css" && <h1>Test de CSS</h1>}
      {miTest === "html" && <h1>Test de HTML</h1>}
      {miTest === "java" && <h1>Test de Java</h1>}
      <div>
        {datos.length > 0 ? (
          datos.map((item, index) => (
            <div key={index}>
              <h2>{item.pregunta}</h2>
              <ul>
                {item.opciones.map((opcion, opcionIndex) => (
                  <li key={opcionIndex}>{opcion}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No hay datos</p>
        )}
      </div>
    </div>
  );
};

export default TestDoing;
