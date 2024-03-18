import { useEffect, useState } from "react";

const TestDoingJs = () => {
  // Define el estado para almacenar los datos
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("misDatos");
    if (datosLocalStorage) {
      // Actualiza el estado con los datos procesados
      setDatos(JSON.parse(datosLocalStorage));
    }
  }, []);

  return (
    <>
      <h1>Testing JS TEST</h1>
      <div>
        {datos.map((item, index) => (
          <div key={index}>
            <h2>{item.pregunta}</h2>
            <ul>
              {item.opciones.map((opcion, opcionIndex) => (
                <li key={opcionIndex}>{opcion}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestDoingJs;
