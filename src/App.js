import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./components/homeScreen";
import Header from "./ui/header";
import About from "./components/about";
import Footer from "./ui/footer";
import Design from "./components/design";
import Development from "./components/development";
import ProjectDetails from "./components/projectDetails";
import "./styles/App.scss";

function App() {
    return (
        <>
            <Router>
                <Header />
                <div className="main">
                    <Switch>
                        <Route path="/" exact component={HomeScreen} />
                        <Route path="/development" component={Development} />
                        <Route path="/design" component={Design} />
                        <Route path="/about" component={About} />
                        {/* <Route path="/projectDetails" component={ProjectDetails} /> */}
                        <Route
                            path="/projectDetails/:slug"
                            component={ProjectDetails}
                        />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </>
    );
}

export default App;
