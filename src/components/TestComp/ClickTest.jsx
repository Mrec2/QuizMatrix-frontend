import "./ClickTest.css";
import TestAxios from "../../../services/testAxios";

const ClickTest = () => {
  const getJsTest = () => {
    console.log("Entra en getJsTest");
    const jsAxios = new TestAxios();
    jsAxios.postTest("js");
  };

  return (
    <div className="testImgContainer">
      <button>
        <img src="/imgs-tests-page/html.png" alt="HTML" />
        <p>HTML</p>
      </button>
      <button>
        <img src="/imgs-tests-page/css.png" alt="CSS" />
        <p>CSS</p>
      </button>
      <button>
        <img
          src="/imgs-tests-page/js.png"
          alt="Javascript"
          type="button"
          onClick={getJsTest}
        />
        <p>Javascript</p>
      </button>
      <button>
        <img src="/imgs-tests-page/java.png" alt="Java" />
        <p>Java</p>
      </button>
    </div>
  );
};
export default ClickTest;
