import "./MediaWithContent.css";
import { motion } from "framer-motion";

function MediaWithContent() {
    return(
        <div className="container-div">
            <motion.div className="media-div" animate={{x: ["-100vw","0vw"]}}>
                <img className="media-img" src="/Commodore.jpg" alt="home-img" />
            </motion.div>
            <motion.div className="content-div" animate={{x: ["100vw","0vw"]}}>
                <div className="socials-div">
                    <ul className ="socials-list">
                        <li className="socials-item"><a href="https://github.com/Bailym" target="_blank" rel="noreferrer" ><motion.img src="/Github.png" alt="github" id="github-img" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}/></a></li>
                        <li className="socials-item"><a href="https://www.linkedin.com/in/baily-martin-16b655152/" target="_blank" rel="noreferrer"><motion.img src="/LinkedIn.png" alt="linkedin" id="linkedin-img" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}/></a></li>
                        <li className="socials-item"><a href="https://www.instagram.com/bailym18/" target="_blank" rel="noreferrer"><motion.img src="/Instagram.png" alt="instagram" id="instagram-img" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}/></a></li>
                    </ul>
                    <div id="cv-buttons">
                        <a href="/CV.pdf" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Download CV</motion.button></a>
                        <a href="mailto:BM39@hotmail.co.uk"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Email Me</motion.button></a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default MediaWithContent;