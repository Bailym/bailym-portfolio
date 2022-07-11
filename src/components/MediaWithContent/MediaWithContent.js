import "./MediaWithContent.css";

function MediaWithContent() {
    return(
        <div class="container-div">
            <div class="media-div">
                <img class="media-img" src="/Retrowave.jpg" alt="home-img" />
            </div>
            <div class="content-div">
                <div class="socials-div">
                    <ul class ="socials-list">
                        <li class="socials-item"><a href="/"><img src="/Github.png" alt="github"></img></a></li>
                        <li class="socials-item"><a href="/"><img src="/LinkedIn.png" alt="LinkedIn"></img></a></li>
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