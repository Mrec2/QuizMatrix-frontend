import "./Homepage.css";
import TestAxios from "../../../services/testAxios";
import SectionMain01 from "../../components/SectionMain/SectionMain01";
import SectionMain02 from "../../components/SectionMain/SectionMain02";
import SectionMain03 from "../../components/SectionMain/SectionMain03";
import SectionMain04 from "../../components/SectionMain/SectionMain04";

const Homepage = () => {
  // Probando la llamada Axios

  const testAxios = new TestAxios();
  testAxios.postTest();

  return (
    <>
      <SectionMain01 />
      <SectionMain02 />
      <SectionMain03 />
      <SectionMain04 />
    </>
  );
};

export default Homepage;
