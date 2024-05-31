import React, { ReactNode } from "react";
import "./Footer.scss";

interface Props {
  children?: ReactNode;
}

const Footer = ({ children }: Props) => {
  return (
    <>
      <div>children</div>
    </>
  );
};

export default Footer;
