import "./MediaWithOverlay.css";
import { motion, useAnimation } from "framer-motion";
import {useInView} from "react-intersection-observer";
import { useEffect } from "react";
import { duration } from "@mui/material";

function MediaWithOverlay() {

    return (
        <motion.div className="media-container">
            <div className="avatar-div">
                <h2>About</h2>
                <img className="avatar" src={process.env.PUBLIC_URL + "/Main.png"} alt="avatar" />
                <p id="avatar-description">Baily Martin</p>
            </div>
            <motion.div className="overlay-content-div" initial={{x:"-90vw"}} whileInView={{x:0}} transition={{type:"spring", duration:2, bounce:0.3}}>
                <p id='about-text'>Hello! My name is Baily. Im a full-stack software developer based in Cornwall, England. I'm a recent graduate of the University of Plymouth who loves creating things for the web.
                As a developer I look to design and create projects that are user friendly, intuitve and visually appealing, using the latest technologies and frameworks from the world of web development. My focus is 
                on creating clean, efficient and responsive websites that solve problems, provide a fantastic user experience and most importantly, look great!
                I've experimented with a variety of technologies and frameworks, and I'm always looking to learn new things. Im currently learning game development with Unity, 3D modelling, and WordPress.
                Right now I'm looking for opportunities to work on my skills and build some new, exciting web-based systems.
                </p>
            </motion.div>
        </motion.div>
    )
}

export default MediaWithOverlay;