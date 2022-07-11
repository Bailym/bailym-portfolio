import "./NavBar.css";

function NavBar() {
    return (
        <div class="nav-div">
            <div class="nav-logo-div">
                <a href="/"><img class="nav-logo" src="/NavLogo.png" alt="Logo"/></a>
            </div>
            <div class="nav-items">
                <ul class ="nav-items-list">
                    <li class ="nav-item"><a href="/" class="underline">Item 1</a></li>
                    <li class ="nav-item"><a href="/" class="underline">Item 2</a></li>
                    <li class ="nav-item"><a href="/" class="underline">Item 3</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
