import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import './App.css';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Particles from 'react-particles-js';


const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

function App() {
  return (
    <div className="App">
                  <Particles 
                params={particlesOptions} />
      <Navigation/>
      <Logo/>
     <Rank/>
     <ImageLinkForm/>
       {/*<FaceRecognition/>*/}
    </div>
  );
}

export default App;
