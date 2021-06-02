import React, {useState} from "react";
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import "./Navbar.css";
import HamburgerIcon from "../hamburgerIcon/HamburgerIcon";


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="navbar">
                <Link to="#" className="navbar__menu-bars">
                    <HamburgerIcon clickHandler={showSidebar} sidebar={sidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu nav-menu__active" : "nav-menu"}>
                <ul className="nav-menu__items" onClick={showSidebar}>
                    <li className="nav-menu__navbar-toggle">
                        <Link to="#" className="nav-menu__menu-bars">
                            <HamburgerIcon sidebar={sidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;