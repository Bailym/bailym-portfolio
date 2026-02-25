import "./MediaWithContent.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function MediaWithContent() {

    const controls = useAnimation();

    //runs when the component loads. i specifies the delay before the animation starts so items futher down the list will start later. to remove delay just set them all to 1.
    useEffect(() => {
        controls.start((i) => ({
          x: [0,10,0],
          color: ["#fff","#900137","#fff"],
          transition: { delay: i * 0.3, duration: 0.5, ease: "easeInOut" }
        }));
      }, [controls]);

    return (
        <div className="container-div">
            <motion.div className="media-div">
                <motion.div className="title-div">
                    <motion.h1>Baily Martin</motion.h1>
                    <motion.h2 custom={0} animate={controls}>HTML + CSS</motion.h2>
                    <motion.h2 custom={1} animate={controls}>React.js</motion.h2>
                    <motion.h2 custom={2} animate={controls}>Node.js + Express.js</motion.h2>
                    <motion.h2 custom={3} animate={controls}>MySQL + MongoDB</motion.h2>
                    <motion.h2 custom={4} animate={controls}>C/C++</motion.h2>
                    <motion.h2 custom={5} animate={controls}>Embedded Programming + Electronics</motion.h2>
                    <motion.h2 custom={6} animate={controls}>Unity 2D</motion.h2>
                    <motion.h2 custom={7} animate={controls}>AWS</motion.h2>
                    <motion.h2 custom={8} animate={controls}>UI/UX Design</motion.h2>
                </motion.div>
            </motion.div>
                <motion.div className="content-div" animate={{ x: ["100vw", "0vw"] }}>
                    <div className="socials-div">
                        <ul className="socials-list">
                            <li className="socials-item"><a href="https://github.com/Bailym" target="_blank" rel="noreferrer" ><motion.img src={process.env.PUBLIC_URL + "/Github.png"} alt="github" id="github-img" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} /></a></li>
                            <li className="socials-item"><a href="https://www.linkedin.com/in/baily-martin-16b655152/" target="_blank" rel="noreferrer"><motion.img src={process.env.PUBLIC_URL + "/LinkedIn.png"} alt="linkedin" id="linkedin-img" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} /></a></li>
                            <li className="socials-item"><a href="https://www.instagram.com/bailym18/" target="_blank" rel="noreferrer"><motion.img src={process.env.PUBLIC_URL + "/Instagram.png"} alt="instagram" id="instagram-img" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} /></a></li>
                        </ul>
                        <div id="cv-buttons">
                            <a href={process.env.PUBLIC_URL + "/CV.pdf"} target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Download CV</motion.button></a>
                            <a href="mailto:BM39@hotmail.co.uk"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Email Me</motion.button></a>
                        </div>
                    </div>
                </motion.div>
        </div>
    )
}

export default MediaWithContent;