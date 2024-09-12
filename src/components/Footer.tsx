import React, { ReactNode } from "react";
import "./Footer.scss";
import "./HeroContainer.scss";

import EMAIL_ICON from "../assets/images/email Icon.jpg";
import GITHUB_ICON from "../assets/images/Github Icon.jpg";
import LINKEDIN_ICON from "../assets/images/Linkedin Icon.jpg";

interface Props {
    children?: ReactNode;
}

const Footer = ({ children }: Props) => {
    return (
        <>
            <section className="footer">
                <h1 className="footer-header center">{children}</h1>

                <div className="footer-content">
                    <a href="mailto: leoz10250@gmail.com">
                        <img
                            className="footer-img"
                            src={EMAIL_ICON}
                            alt="email"
                        />
                    </a>

                    <a href="http://github.com/Leo10250" target="_blank">
                        <img
                            className="footer-img"
                            src={GITHUB_ICON}
                            alt="github"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/wanquanzhang/"
                        target="_blank"
                    >
                        <img
                            className="footer-img"
                            src={LINKEDIN_ICON}
                            alt="linkedin"
                        />
                    </a>
                </div>

                <div className="footer-resume">
                    <a href="Wanquan Zhang Resume (1).pdf" target="_blank">
                        <button type="button" className="footer-btn">
                            Resume
                        </button>
                    </a>
                </div>
            </section>
        </>
    );
};

export default Footer;
