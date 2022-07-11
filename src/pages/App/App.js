import { NavBarResponsive, NavBar } from "../../components/NavBar/NavBar";
import './App.css';
import MediaWithText from '../../components/MediaWithContent/MediaWithContent';
import { useState, useEffect } from "react";

function App() {

  const [isMobile, setMobile] = useState(window.innerWidth < 641);
  const [isTablet, setTablet] = useState(window.innerWidth < 1007 && window.innerWidth > 640);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1006);
    
    //work out what type of screen we are on
    function updateMedia () {
        setMobile(window.innerWidth < 600);
    };

    //listener to update screen size
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });


  return (
    <div class="app-container-div">
      {isMobile ? <NavBarResponsive /> : <NavBar />}
      <MediaWithText/>
    </div>
    
  );
}

export default App;
