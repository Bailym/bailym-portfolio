import "./MediaWithContent.css";
import { motion } from "framer-motion";

function MediaWithContent() {
    return(
        <div className="container-div">
            <motion.div className="media-div" animate={{x: ["-100vw","0vw"]}}>
                <img className="media-img" src="/Retrowave.jpg" alt="home-img" />
            </motion.div>
            <motion.div className="content-div" animate={{x: ["100vw","0vw"]}}>
                <div className="socials-div">
                    <ul className ="socials-list">
                        <li className="socials-item"><a href="/" ><motion.img src="/Github.png" alt="github" id="github-img" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}/></a></li>
                        <li className="socials-item"><a href="/"><motion.img src="/LinkedIn.png" alt="linkedin" id="linkedin-img" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}/></a></li>
                        <li className="socials-item"><a href="/"><motion.img src="/Instagram.png" alt="instagram" id="instagram-img" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}/></a></li>
                    </ul>
                    <div id="cv-buttons">
                        <a href="/"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Download CV</motion.button></a>
                        <a href="/"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Button 2</motion.button></a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default MediaWithContent;