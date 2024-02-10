import "./About.css";

import AboutComp from "../../components/AboutComp/AboutComp";
import EmpleadoComp from "../../components/AboutComp/EmpleadoComp";

const About = () => {
  return (
    <>
      <AboutComp />
      <AboutComp />
      <AboutComp />

      <div className="about-empleados">

        <div className="about-empleado">
          <EmpleadoComp empleado="Mario" descripcion="FullStack Developer" foto="mario" />
        </div>

        <div className="about-empleado">
          <EmpleadoComp empleado="Alberto" descripcion="Frontend Developer" foto="juanma" />
        </div>
          
        <div className="about-empleado">
          <EmpleadoComp empleado="Juanma" descripcion="Backend Developer" foto="juanma" />
        </div>

      </div>

    </>
  );
};

export default About;