import React from "react";
import { Card } from "../components/card";
// import "./styles/homeScreen.css";

const HomeScreen = () => {
    return (
        <div className="con">
            <div className="stage">
                <h1>Liat Meadows</h1>
                <h2>Web Developement & Design</h2>
                <h3>
                    I am an experienced web and mobile app developer with a
                    strong focus on React Native.
                </h3>
                <h3>
                    I bring with me perennial design work experience as a UI/UX
                    specialist.
                </h3>
            </div>
            <div className="box">
                <Card />
            </div>
        </div>
    );
};

export default HomeScreen;
