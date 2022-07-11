import logo from '../../logo.svg';
import Box from '@mui/material/Box';
import NavBar from "../../components/NavBar/NavBar";
import './App.css';
import MediaWithText from '../../components/MediaWithContent/MediaWithContent';

function App() {
  return (
    <div class="app-container-div">
      <NavBar/>
      <MediaWithText/>
    </div>
    
  );
}

export default App;
