import React from "react";
import Clarifai from "clarifai";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import "./App.css";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm";
import Particles from "react-particles-js";
import FaceRecognition from "./components/facerecognition/FaceRecognition";
import SignIn from "./components/signin/SignIn";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 300,
      },
    },
  },
};
const app = new Clarifai.App({
  apiKey: "57985cb41cb449de9ed182ecf9672d6a",
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl:"",
      box:{},
      route:"signin"
    };

  }

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace)
    let inputImage = document.getElementById("input-image");
    const width = Number(inputImage.width);
    const height = Number(inputImage.height);
    console.log(width,height)
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height-(clarifaiFace.bottom_row * height),
    }
  }
  displayFaceBox = (box) =>{
    this.setState({box:box})
  }
  onInputChange = (event) => {
    this.setState({input:event.target.value})
  };
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        // THE JPG
        this.state.input
      )
      .then((response) => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onRouteChange = (route) =>{
    this.setState({route:route})
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation onRouteChange = {this.onRouteChange}/>
        {this.state.route === "signin" ? 

        <SignIn onRouteChange = {this.onRouteChange}/>
       :
       <div>
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box = {this.state.box} imageUrl = {this.state.imageUrl}/>
        </div>
        }
      </div>
    );
  }
}

export default App;
