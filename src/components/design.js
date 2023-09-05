import { Card } from "../ui/card";

const Design = () => {
    return (
        <div id="design" className="design-con">
            <div className="column">
                <div className="brush">
                    <h2 className="brush-text">
                        <a href="#my-design-projects">My design projects</a>
                    </h2>
                </div>

                <div className="box">
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Design;
