import React, { ReactNode } from "react";
import "./HeroContainer.scss";

interface Props {
  children: ReactNode;
}

const HeroContainer = ({ children }: Props) => {
  return (
    <>
      <div className="hero-container">children</div>
    </>
  );
};

export default HeroContainer;
