import React, { useContext } from "react";
import "./styles.css";
import { UserContext } from "../../providers/UserContext";
import { useHistory } from "react-router-dom";

function Topbar() {
  const { value2 } = useContext(UserContext);

  const [user] = value2;
  const history = useHistory();

  function handleExit() {
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <div className="topbar-container">
      <div className="topbar-container__user">
        <i class="fas fa-user"></i>
        {user.name}
        <button
          onClick={() => {
            handleExit();
          }}
        >
          Salir
        </button>
      </div>
    </div>
  );
}

export default Topbar;
