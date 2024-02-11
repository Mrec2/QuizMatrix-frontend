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
          <EmpleadoComp empleado="Mario" descripcion="Full Stack Developer" tecnologias="Mongo DB, ExpressJS, ReactJS, NodeJS" foto="mario" />
        </div>

        <div className="about-empleado">
          <EmpleadoComp empleado="Alberto" descripcion="Front-end Developer" tecnologias="HTML, CSS, Javascript" foto="juanma" />
        </div>
          
        <div className="about-empleado">
          <EmpleadoComp empleado="Juanma" descripcion="Back-end Developer" tecnologias="Javascript, ReactJS, Python, Flask" foto="juanma" />
        </div>

      </div>

    </>
  );
};

export default About;