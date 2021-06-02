import React from "react"
import "./HamburgerIcon.css";

function HamburgerIcon({clickHandler, sidebar}) {
    return (
        <div className="container" onClick={clickHandler}>
            <div className={sidebar ? "container__menu-top container__menu-top--active" : "container__menu-top"}> </div>
            <div className={sidebar ? "container__menu-middle container__menu-middle--active" : "container__menu-middle"}> </div>
            <div className={sidebar ? "container__menu-bottom container__menu-bottom--active" : "container__menu-bottom"}> </div>
        </div>
    );
}

export default HamburgerIcon;