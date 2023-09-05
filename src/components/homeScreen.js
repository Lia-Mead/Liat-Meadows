import Development from "./development";
import Design from "./design";
import About from "./about";
// import { useScrollToLocation } from "./srollToLocation";

const HomeScreen = () => {
    return (
        <div className="con home">
            <div className="stage">
                <h1>Liat Meadows</h1>
                <div className="brush">
                    <h2 className="brush-text">Web Developement & Design</h2>
                </div>
                <h3>
                    I make websites. Hell pretty websites. <br />
                    That&apos;s what I do.
                </h3>
            </div>
            <Development />
            <Design />
            <About />
            {/* <div className="box"></div> */}
        </div>
    );
};

export default HomeScreen;
