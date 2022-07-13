import "./MediaWithContent.css";

function MediaWithContent() {
    return(
        <div className="container-div">
            <div className="media-div">
                <img className="media-img" src="/Retrowave.jpg" alt="home-img" />
            </div>
            <div className="content-div">
                <div className="socials-div">
                    <ul className ="socials-list">
                        <li className="socials-item"><a href="/"><img src="/Github.png" alt="github" id="github-img"></img></a></li>
                        <li className="socials-item"><a href="/"><img src="/LinkedIn.png" alt="linkedin" id="linkedin-img"></img></a></li>
                        <li className="socials-item"><a href="/"><img src="/Instagram.png" alt="instagram" id="instagram-img"></img></a></li>
                    </ul>
                    <div id="cv-buttons">
                        <a href="/"><button>Download CV</button></a>
                        <a href="/"><button>Button 2</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaWithContent;