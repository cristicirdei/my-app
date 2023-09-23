import React from "react";
import { Link } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("user")) || {
  type: "user",
  auth: false,
};

const handleLogOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.reload();
};

/*if (localStorage.getItem("token")) {
  user.auth = true;
}*/
/*
localStorage.removeItem("token");
localStorage.removeItem("user");
*/

const Header = () => {
  return (
    <div className="header">
      <h1>cristi cîrdei</h1>
    </div>
  );
};
export default Header;
