import "./NavBar.css";
import { useState, useEffect } from "react";

export function NavBar() {
    return (
        <div className="nav-div">
            <div className="nav-logo-div">
                <a href="/"><img className="nav-logo" src={process.env.PUBLIC_URL + "/Joystick.png"} alt="Logo" /></a>
            </div>
            <div className="nav-items">
                <ul className="nav-items-list">
                    <li className="nav-item"><a href="/" className="underline">Item 1</a></li>
                    <li className="nav-item"><a href="/" className="underline">Item 2</a></li>
                    <li className="nav-item"><a href="/" className="underline">Item 3</a></li>
                </ul>
            </div>
        </div>
    )
}

export function NavBarResponsive() {

    const [openMenu, setOpenMenu] = useState(false);

    //toggles the menu open or closed
    function toggleMenu() {
        setOpenMenu(openMenu => !openMenu);
    }

    if (openMenu) {
        return (
            <div className="nav-div-responsive-open">
                <div className="nav-top-bar-responsive-open">
                    <div className="nav-logo-div-open">
                        <a href="/"><img className="nav-logo" src={process.env.PUBLIC_URL + "/Joystick.png"} alt="Logo" /></a>
                    </div>
                    <div className="nav-hamburger-responsive-open">
                        <img src={process.env.PUBLIC_URL + "/Hamburger.png"} alt="hamburger" onClick={() => toggleMenu()}></img>
                    </div>
                </div>
                <div className="nav-items-responsive-open">
                    <ul className="nav-items-list-responsive-open">
                        <li className="nav-item-responsive-open"><a href="/" className="underline">Item 1</a></li>
                        <li className="nav-item-responsive-open"><a href="/" className="underline">Item 2</a></li>
                        <li className="nav-item-responsive-open"><a href="/" className="underline">Item 3</a></li>
                    </ul>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="nav-div-responsive-closed">
                <div className="nav-logo-div-closed">
                    <a href="/"><img className="nav-logo" src={process.env.PUBLIC_URL + "/Joystick.png"} alt="Logo" /></a>
                </div>
                <div className="nav-hamburger-responsive-closed">
                    <img src={process.env.PUBLIC_URL + "/Hamburger.png"} alt="hamburger" onClick={() => toggleMenu()}></img>
                </div>
            </div>
        )
    }
}



