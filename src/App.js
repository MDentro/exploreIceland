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
import North from "./pages/noord/North";
import West from "./pages/west/West";
import Hooglanden from "./pages/highlands/Highlands";

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
                    <Route path="/north">
                        <North/>
                    </Route>
                    <Route path="/west">
                        <West/>
                    </Route>
                    <Route path="/highlands">
                       <Hooglanden/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
