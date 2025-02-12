import "./ProjectOverview.scss";
import WEBSITE_ICON from "../assets/images/website.jpg";
import DISCORD_ICON from "../assets/images/discord-icon.png";
import WEBSCRAPPER_ICON from "../assets/images/webscrapper-icon.png";
import PREDICTOR_ICON from "../assets/images/predictor-icon.png";
import UCSD_ICON from "../assets/images/UCSD_logo.png";
import ZOO_ICON from "../assets/images/Zoo_icon.jpg";
import WEB_DESIGN_ICON from "../assets/images/web-design.png";
import COUNTER_ICON from "../assets/images/counter_icon.png";
import FILE_COMPRESSOR_ICON from "../assets/images/file-compressor-icon.png";

const ProjectOverview = () => {
    return (
        <>
            <section className="project-overview">
                <h1 className="project-overview-header">Projects</h1>
                <div className="flexbox">
                    <div className="flex-item">
                        <a
                            href="https://github.com/Leo10250/Website"
                            target="_blank"
                        >
                            <img
                                className="project-overview-round-img"
                                src={WEBSITE_ICON}
                                alt="Personal Website"
                            />
                        </a>

                        <a
                            className="project-overview-link"
                            href="https://github.com/Leo10250/Dev-Sphere"
                            target="_blank"
                        >
                            <p className="project-overview-txt">
                                Personal Website
                            </p>
                        </a>
                    </div>

                    <div className="flex-item">
                        <a
                            href="https://github.com/Leo10250/Discord-Bot"
                            target="_blank"
                        >
                            <img
                                className="project-overview-img"
                                src={DISCORD_ICON}
                                alt="Discord Bot"
                            />
                        </a>

                        <a
                            className="project-overview-link"
                            href="https://github.com/Leo10250/Discord-Bot"
                            target="_blank"
                        >
                            <p className="project-overview-txt">Discord Bot</p>
                        </a>
                    </div>

                    <div className="flex-item">
                        <a
                            href="https://github.com/Leo10250/Simple-Webscrapper"
                            target="_blank"
                        >
                            <img
                                className="project-overview-round-img"
                                src={WEBSCRAPPER_ICON}
                                alt="Simple Webscrapper"
                            />
                        </a>

                        <a
                            className="project-overview-link"
                            href="https://github.com/Leo10250/Simple-Webscrapper"
                            target="_blank"
                        >
                            <p className="project-overview-txt">
                                Simple Webscrapper
                            </p>
                        </a>
                    </div>

                    <div className="flex-item">
                        <a
                            href="https://github.com/Leo10250/Amazon-Question-Type-Predictor"
                            target="_blank"
                        >
                            <img
                                className="project-overview-img"
                                src={PREDICTOR_ICON}
                                alt="Amazon-Question-Type-Predictor"
                            />
                        </a>

                        <a
                            className="project-overview-link"
                            href="https://github.com/Leo10250/Amazon-Question-Type-Predictor"
                            target="_blank"
                        >
                            <p className="project-overview-txt">
                                Question-Type Predictor
                            </p>
                        </a>
                    </div>

                    <div className="flex-item">
                        <a
                            href="https://github.com/Leo10250/Game-of-Life"
                            target="_blank"
                        >
                            <img
                                className="project-overview-round-img"
                                src={UCSD_ICON}
                                alt="UCSD Logo"
                            />
                        </a>

                        <a
                            className="project-overview-link"
                            href="https://github.com/Leo10250/Game-of-Life"
                            target="_blank"
                        >
                            <p className="project-overview-txt">Game of Life</p>
                        </a>
                    </div>

                    <div className="flex-item">
                        <a
                            href="https://github.com/Leo10250/ZooSeeker-App"
                            target="_blank"
                        >
                            <img
                                className="project-overview-round-img"
                                src={ZOO_ICON}
                                alt="San Diego Zoo"
                            />
                        </a>

                        <a
                            className="project-overview-link"
                            href="https://github.com/Leo10250/ZooSeeker-App"
                            target="_blank"
                        >
                            <p className="project-overview-txt">
                                ZooSeeker App
                            </p>
                        </a>
                    </div>

                    <div className="flex-item">
                        <a
                            href="https://leoz10250.wixsite.com/elden-ring-review"
                            target="_blank"
                        >
                            <img
                                className="project-overview-round-img"
                                src={WEB_DESIGN_ICON}
                                alt="Elden Ring"
                            />
                        </a>

                        <a
                            className="project-overview-link"
                            href="https://leoz10250.wixsite.com/elden-ring-review"
                            target="_blank"
                        >
                            <p className="project-overview-txt">Web Design</p>
                        </a>
                    </div>

                    <div className="flex-item">
                        <a
                            href="https://github.com/Leo10250/Counter-App"
                            target="_blank"
                        >
                            <img
                                className="project-overview-round-img"
                                src={COUNTER_ICON}
                                alt="Counter Icon"
                            />
                        </a>

                        <a
                            className="project-overview-link"
                            href="https://github.com/Leo10250/Counter-App"
                            target="_blank"
                        >
                            <p className="project-overview-txt">Counter App</p>
                        </a>
                    </div>

                    <div className="flex-item">
                        <a
                            href="https://github.com/Leo10250/File-Compressor"
                            target="_blank"
                        >
                            <img
                                className="project-overview-img"
                                src={FILE_COMPRESSOR_ICON}
                                alt="File Compressor Icon"
                            />
                        </a>

                        <a
                            className="project-overview-link"
                            href="https://github.com/Leo10250/File-Compressor"
                            target="_blank"
                        >
                            <p className="project-overview-txt">
                                File Compressor
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectOverview;
