import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./components/homeScreen";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";
import Design from "./components/design";
import Development from "./components/development";
import "./styles/App.css";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/development" component={Development} />
                    <Route path="/design" component={Design} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>

            <Footer />
        </>
    );
}

export default App;
