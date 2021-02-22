import React from "react";
import Clarifai from "clarifai";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import "./App.css";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm";
import Particles from "react-particles-js";
import FaceRecognition from "./components/facerecognition/FaceRecognition";

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
      imageUrl:""
    };

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
        console.log(response?.outputs[0]?.data?.regions[0]?.region_info.bounding_box);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl = {this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
