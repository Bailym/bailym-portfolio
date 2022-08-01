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
                        <h2>Binary Bingo (React.js)</h2>
                        <img src="https://github.com/Bailym/BinaryBingo/raw/main/images/BinaryBingo%205.png" alt="Binary Bingo"></img>

                    </div>
                    <div className='tile-footer'>
                        <a href="https://github.com/Bailym/BinaryBingo/" target="_blank" rel="noreferrer"><button>View on Github</button></a>
                        <a href="https://bailym.github.io/BinaryBingo/" target="_blank" rel="noreferrer"><button>View Live</button></a>

                    </div>
                </motion.div>
                <motion.div className="tile" id="tile-2" whileHover={{ scale: 1.05 }}>
                    <div className="tile-content">
                        <h2>GalaxyRun (Unity 2D)</h2>
                        <img src="https://github.com/Bailym/GalaxyRun/blob/main/images/Gameplay.gif?raw=true" alt="GalxyRun"></img>
                    </div>
                    <div className='tile-footer'>
                        <a href="https://github.com/Bailym/GalaxyRun" target="_blank" rel="noreferrer"><button>View on Github</button></a>
                        <a href="https://github.com/Bailym/GalaxyRun/releases/download/v0.0.2/GalaxyRun.01-08-22.zip" target="_blank" rel="noreferrer"><button>Download</button></a>

                    </div>
                </motion.div>
                <motion.div className="tile" id="tile-3" whileHover={{ scale: 1.05 }}>
                    <div className="tile-content">
                        <h2>TCG-DB (React.js + Node.js + MySQL)</h2>
                        <img src="https://github.com/Bailym/TCG-DB/blob/main/images/Base%20.png?raw=true" alt="tcg-db"></img>
                    </div>
                    <div className='tile-footer'>
                        <a href="https://github.com/Bailym/TCG-DB" target="_blank" rel="noreferrer"><button>View on Github</button></a>
                        <a href="https://bailym-tcgdb.herokuapp.com/" target="_blank" rel="noreferrer"><button>View Live</button></a>
                    </div>
                </motion.div>
                <motion.div className="tile" id="tile-4" whileHover={{ scale: 1.05 }}>
                    <div className="tile-content">
                        <h2>Extra Armor (Java + Minecraft Forge API)</h2>
                        <img src="https://i.imgur.com/N003tfh.gif" alt="tcg-db"></img>
                    </div>
                    <div className='tile-footer'>
                        <a href="https://www.curseforge.com/minecraft/mc-mods/extra-armor" target="_blank" rel="noreferrer"><button>View on CurseForge</button></a>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default ProjectTiles;