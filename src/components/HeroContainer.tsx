import "./HeroContainer.scss";
import selfie from "../assets/images/selfie_square.jpg";

const HeroContainer = () => {
    const handleSelfieClick = () => {
        window.open("https://www.linkedin.com/in/wanquanzhang/", "_blank");
    };
    return (
        <>
            <section className="hero-banner">
                <div className="hero-container">
                    <div className="selfie-link">
                        <img
                            onClick={handleSelfieClick}
                            className="selfie-img"
                            src={selfie}
                            alt="Selfie"
                        ></img>
                    </div>
                    <h1 className="hero-header">Hello there, I am Leo!!</h1>

                    <h2 className="hero-header">
                        Mathematics-Computer Science
                    </h2>

                    <h3 className="hero-header">UC San Diego</h3>
                    <div className="hero-btns">
                        <a
                            href="https://www.linkedin.com/in/wanquanzhang/"
                            target="_blank"
                        >
                            <button className="hero-btn">LinkedIn</button>
                        </a>
                        <a href="https://github.com/Leo10250/" target="_blank">
                            <button className="hero-btn">GitHub</button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroContainer;
