import React from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import South from "./pages/south/South";
import Noord from "./pages/noord/Noord";
import West from "./pages/west/West";
import Hooglanden from "./pages/hooglanden/Hooglanden";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/south">
                        <South/>
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
