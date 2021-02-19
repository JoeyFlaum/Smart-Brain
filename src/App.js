import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import './App.css';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Particles from 'react-particles-js';


const particlesOptions = {
  particles: {
      number:{
        value:30,
        density:{
          enable:true, 
          value_area:300,
        }
    }
  }
}

function App() {
  return (
    <div className="App">
                  <Particles 
                className = "particles"
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
