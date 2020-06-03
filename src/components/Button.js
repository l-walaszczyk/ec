import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Button.css";

const Button = ({
  to,
  exact = false,
  handleClick = () => undefined,
  children,
}) => {
  return (
    <NavLink
      className="button-typ"
      to={to}
      exact={exact}
      onClick={() => handleClick(false)}
    >
      {children}
    </NavLink>
  );
};

export default Button;
