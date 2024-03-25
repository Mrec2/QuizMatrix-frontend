import LoginComp from "../../components/LoginComp/LoginComp";

import styles from "./login.module.css";

const Login = () => {
  return (
    <>
      <LoginComp errorText = "El usuario no es correcto"/>
    </>
  );
};

export default Login;