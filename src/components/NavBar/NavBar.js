import "./NavBar.css";
import { useState, useEffect } from "react";

export function NavBar() {
    return (
        <div class="nav-div">
            <div class="nav-logo-div">
                <a href="/"><img class="nav-logo" src="/NavLogo.png" alt="Logo" /></a>
            </div>
            <div class="nav-items">
                <ul class="nav-items-list">
                    <li class="nav-item"><a href="/" class="underline">Item 1</a></li>
                    <li class="nav-item"><a href="/" class="underline">Item 2</a></li>
                    <li class="nav-item"><a href="/" class="underline">Item 3</a></li>
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
            <div class="nav-div-responsive-open">
                <div class="nav-top-bar-responsive-open">
                    <div class="nav-logo-div-open">
                        <a href="/"><img class="nav-logo" src="/NavLogo.png" alt="Logo" /></a>
                    </div>
                    <div class="nav-hamburger-responsive-open">
                        <img src="/Hamburger.png" alt="hamburger" onClick={() => toggleMenu()}></img>
                    </div>
                </div>
                <div class="nav-items-responsive-open">
                    <ul class="nav-items-list-responsive-open">
                        <li class="nav-item-responsive-open"><a href="/" class="underline">Item 1</a></li>
                        <li class="nav-item-responsive-open"><a href="/" class="underline">Item 2</a></li>
                        <li class="nav-item-responsive-open"><a href="/" class="underline">Item 3</a></li>
                    </ul>
                </div>
            </div>
        )
    }
    else {
        return (
            <div class="nav-div-responsive-closed">
                <div class="nav-logo-div-closed">
                    <a href="/"><img class="nav-logo" src="/NavLogo.png" alt="Logo" /></a>
                </div>
                <div class="nav-hamburger-responsive-closed">
                    <img src="/Hamburger.png" alt="hamburger" onClick={() => toggleMenu()}></img>
                </div>
            </div>
        )
    }
}



