import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Routes from "./Routes/Routes";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
