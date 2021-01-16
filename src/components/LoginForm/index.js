import React from "react";
import "./styles.css";
import env from "react-dotenv";

function LoginForm() {
  return (
    <div className="login-container">
      <a
        className="login-container__text"
        href={`https://connect.deezer.com/oauth/auth.php?app_id=457362&redirect_uri=${env.APP_SECRET.MY_SITE}/recent&perms=basic_access,email,offline_access,listening_history`}
      >
        ingresar
      </a>
    </div>
  );
}

export default LoginForm;
