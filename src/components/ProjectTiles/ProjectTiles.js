import './ProjectTiles.css'
import { motion } from 'framer-motion'

function ProjectTiles() {
    return (
        <>
            <div className='tiles-title'>
                <h1>Projects</h1>
            </div>
            <div className="tiles-container">
                <motion.div className="tile" id="tile-1" whileHover={{ scale: 1.05 }}>
                    <div className="tile-content">
                        <h2>Binary Bingo</h2>
                        <img src="/Pac Man.jpg" alt="pacman"></img>

                    </div>
                    <div className='tile-footer'>
                        <a href="/"><button>View on Github</button></a>
                        <a href="/"><button>View Live</button></a>

                    </div>
                </motion.div>
                <motion.div className="tile" id="tile-2" whileHover={{ scale: 1.05 }}>
                    <div className="tile-content">
                        <h2>Binary Bingo</h2>
                        <img src="/Pac Man.jpg" alt="pacman"></img>
                    </div>
                    <div className='tile-footer'>
                        <a href="/"><button>View on Github</button></a>
                        <a href="/"><button>View Live</button></a>

                    </div>
                </motion.div>
                <motion.div className="tile" id="tile-3" whileHover={{ scale: 1.05 }}>
                    <div className="tile-content">
                        <h2>Binary Bingo</h2>
                        <img src="/Pac Man.jpg" alt="pacman"></img>
                    </div>
                    <div className='tile-footer'>
                        <a href="/"><button>View on Github</button></a>
                        <a href="/"><button>View Live</button></a>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default ProjectTiles;