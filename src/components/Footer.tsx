import React, { ReactNode } from "react";
import "./Footer.scss";
import "./HeroContainer.scss";
// import "./../App.css";

interface Props {
    children?: ReactNode;
}

// let navigate = useNavigate();

// const handleButtonClick = () => {
//     navigate("srcassetsdocumentsWanquan-Zhang-Resume.pdf");
// };

const Footer = ({ children }: Props) => {
    return (
        <>
            <section className="footer">
                <h1 className="footer-header center">{children}</h1>

                <div className="footer-content">
                    <a href="mailto: leoz10250@gmail.com">
                        <img
                            className="footer-img"
                            src="src\assets\images\email Icon.jpg"
                            alt="email"
                        />
                    </a>

                    <a href="http://github.com/Leo10250" target="_blank">
                        <img
                            className="footer-img"
                            src="src\assets\images\Github Icon.jpg"
                            alt="github"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/wanquanzhang/"
                        target="_blank"
                    >
                        <img
                            className="footer-img"
                            src="src\assets\images\Linkedin Icon.jpg"
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
