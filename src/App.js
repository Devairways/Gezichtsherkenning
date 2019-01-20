import React, { Component } from 'react';
import Logo from './componenten/logo/logo';
import './App.css';
import Navigatie from "./componenten/navigatie/navigatie";
import LogIn from "./componenten/inloggen/inlog";
import Registreer from "./componenten/registreer/registreer";
import GezichtDetect from "./componenten/gezichtdetect/gezichtdetect";
import UrlFormulier from './componenten/url/urlFormulier';
import Rank from './componenten/rank/rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
const app = new Clarifai.App({
 apiKey: '50fc9203391d4b358c881e5513551955'
});

 const particleOpties = {particles: {
                  number:{
                    value:60,
                    density:{
                      Enable:true,
                      value_area:800
                    }
                    }
                  }
                }

class App extends Component {
  constructor(){
    super();
      this.state = {
        input:"",
        imgUrl:"",
        box:"",
        route:'login',
        IngeLogd: false
      }
  }

  berGezchtloc = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const img = document.getElementById("inputimg");
    const width = Number(img.width);
    const height = Number(img.height);
    console.log(clarifaiFace)
    return {
    leftCol: clarifaiFace.left_col * width,
    rightCol: width - (clarifaiFace.right_col * width),
    topRow: clarifaiFace.top_row * height,
    bottomRow: height - (clarifaiFace.bottom_row * height)
    }

  }
  
  gezichtBox = (box) =>{
    this.setState({box:box});
  }


  onInputChange = (event) =>{
    this.setState({input:event.target.value});
  }
  
  onButtonSubmit = () =>{
    this.setState({imgUrl: this.state.input})
    app.models
    .predict(
     Clarifai.FACE_DETECT_MODEL,
     this.state.input)
    .then(response => { this.gezichtBox(this.berGezchtloc(response))})

    .catch(err => console.log(err));
  }

  onRouteChange = (route)=>{
    if (route === 'home'){
     this.setState({IngeLogd: true});
    }else{
      this.setState({IngeLogd: false});
    }
    this.setState({route: route});
  }

  render() {
    const {imgUrl,route,IngeLogd} =this.state;
    return (
      <div className="App">
         <Particles  className= 'particles' params={particleOpties} />
        <Navigatie IngeLogd={IngeLogd} onRouteChange={this.onRouteChange}/>
        <Logo/>
        { (route === 'home') 
        ?<div>
        <Rank/>
        <UrlFormulier onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <GezichtDetect imgUrl={imgUrl} box={this.state.box}/>
        </div>:(route === 'login')
          ? <LogIn onRouteChange={this.onRouteChange}/>
          : <Registreer onRouteChange={this.onRouteChange}/>}
      </div>
  )}
}

export default App;
