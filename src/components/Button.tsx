import React, { ReactNode } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];
interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset";
  buttonStyle?: string;
  buttonSize?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  color = "primary",
  onClick,
  type = "button",
  buttonStyle = STYLES[0],
  buttonSize = SIZES[0],
}: Props) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
