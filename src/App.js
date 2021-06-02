import React from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Zuid from "./pages/Zuid";
import Noord from "./pages/Noord";
import West from "./pages/West";
import Hooglanden from "./pages/Hooglanden";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/zuid">
                        <Zuid/>
                    </Route>
                    <Route path="/noord">
                        <Noord/>
                    </Route>
                    <Route path="/west">
                        <West/>
                    </Route>
                    <Route path="/hooglanden">
                       <Hooglanden/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
        ;
}

export default App;
