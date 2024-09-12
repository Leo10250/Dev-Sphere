import React from "react";
import "./ProjectOverview.scss";

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
                                src="src\assets\images\website.jpg"
                                alt="Personal Website"
                            />
                        </a>

                        <a
                            className="project-overview-link"
                            href="https://github.com/Leo10250/Vite-Project"
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
                                src="src\assets\images\discord-icon.png"
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
                                src="src\assets\images\webscrapper-icon.png"
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
                                src="src\assets\images\predictor-icon.png"
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
                                src="src\assets\images\UCSD_logo.png"
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
                                src="src\assets\images\Zoo_icon.jpg"
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
                                src="src\assets\images\web-design.png"
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
                                src="src\assets\images\counter_icon.png"
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
                                src="src\assets\images\file-compressor-icon.png"
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
