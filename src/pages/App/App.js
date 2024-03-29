import { NavBarResponsive, NavBar } from "../../components/NavBar/NavBar";
import './App.css';
import MediaWithText from '../../components/MediaWithContent/MediaWithContent';
import { useState, useEffect } from "react";
import MediaWithOverlay from "../../components/MediaWithOverlay/MediaWithOverlay";
import ProjectTiles from "../../components/ProjectTiles/ProjectTiles";

function App() {

  const [isMobile, setMobile] = useState(window.innerWidth < 641);;
    
    //work out what type of screen we are on
    function updateMedia () {
        setMobile(window.innerWidth < 641);
    };

    //listener to update screen size
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });

  return (
    <div className="app-container-div">
      {isMobile ? <NavBarResponsive /> : <NavBar />}
      <MediaWithText/>
      <MediaWithOverlay/>
      <ProjectTiles/>
    </div>
    
  );
}

export default App;
