import styles from "./ClickTest.module.css";

import TestAxios from "../../../services/testAxios";

const ClickTest = () => {
  const getJsTest = () => {
    console.log("Entra en getJsTest");
    const jsAxios = new TestAxios();
    jsAxios.postTest("js");
  };

  const getHtmlTest = () => {
    console.log("Entra en getHtmlTest");
    const jsAxios = new TestAxios();
    jsAxios.postTest("html");
  };

  const getCssTest = () => {
    console.log("Entra en getCssTest");
    const jsAxios = new TestAxios();
    jsAxios.postTest("css");
  };

  const getJavaTest = () => {
    console.log("Entra en getJavaTest");
    const jsAxios = new TestAxios();
    jsAxios.postTest("java");
  };

  return (
    <div className={styles.testContainerImgs}>
      <button type="button" onClick={getHtmlTest}>
        <img 
          src="/imgs-tests-page/html.png" 
          alt="HTML"
          className={styles.testContainerImg}
        />
        <p className={styles.testContainerText}>HTML</p>
      </button>
      <button type="button" onClick={getCssTest}>
        <img 
          src="/imgs-tests-page/css.png" 
          alt="CSS" 
          className={styles.testContainerImg}  
        />
        <p className={styles.testContainerText}>CSS</p>
      </button>
      <button type="button" onClick={getJsTest}>
        <img 
          src="/imgs-tests-page/js.png" 
          alt="Javascript" 
          className={styles.testContainerImg}
        />
        <p className={styles.testContainerText}>Javascript</p>
      </button>
      <button type="button" onClick={getJavaTest}>
        <img 
          src="/imgs-tests-page/java.png" 
          alt="Java" 
          className={styles.testContainerImg}
        />
        <p className={styles.testContainerText}>Java</p>
      </button>
    </div>
  );
};
export default ClickTest;
