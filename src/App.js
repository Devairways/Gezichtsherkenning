import React, { Component } from 'react';
import './App.css';
import Navigatie from "./componenten/navigatie/navigatie";
import LogIn from "./componenten/inloggen/inlog";
import Registreer from "./componenten/registreer/registreer";
import GezichtDetect from "./componenten/gezichtdetect/gezichtdetect";
import UrlFormulier from './componenten/url/urlFormulier';
import Rank from './componenten/rank/rank';
import Particles from 'react-particles-js';


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

const beginState = {
        input:"",
        imgUrl:"",
        boxes:[],
        route:'login',
        IngeLogd: false,
        gebruiker:   {
                        id:'',
                        naam:'',
                        email: "",
                        entries: 0,
                        joined: ""
                         }
      }

class App extends Component {
  constructor(){
    super();
      this.state = beginState;
  }


  berGezchtloc = (data) => {
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return data.outputs[0].data.regions.map(gezicht => {
      const clarifaiFace = gezicht.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    });
  }
  
  gezichtBox = (box) =>{
    this.setState({boxes:box});
  }


  onInputChange = (event) =>{
    this.setState({input:event.target.value});
  }
  
  onButtonSubmit = () =>{
    this.setState({imgUrl: this.state.input})
     fetch('https://floating-reef-84982.herokuapp.com/imageurl',{
      method:'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(res => res.json())
    .then(response => { 
         fetch('https://floating-reef-84982.herokuapp.com/image',{
      method:'put',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        id: this.state.gebruiker.id
      })
    })
    .then(res => res.json())
    .then(cijfer =>{
      this.setState(Object.assign(this.state.gebruiker,{entries: cijfer}))
      })
    this.gezichtBox(this.berGezchtloc(response))
    })
    .catch(err => console.log(err));
  }

  onRouteChange = (route)=>{
    if (route === 'login'){
     this.setState(beginState);
    }else if (route === "home"){
      this.setState({IngeLogd: true});
    }
    this.setState({route: route});
  }

  laadGebruiker = (data) =>{
    this.setState((state, props) => {
      return {  gebruiker:   {
                    id: data.id,
                    naam:data.naam,
                    email: data.email,
                    entries: data.entries,
                    joined: data.joined
                     }}
              })
  }

  render() {
    const {imgUrl,route,IngeLogd} =this.state;
    return (
      <div className="App">
        <Particles  className= 'particles' params={particleOpties} />
        <Navigatie IngeLogd={IngeLogd} onRouteChange={this.onRouteChange}/>
        { (route === 'home') 
        ?<div>
        <Rank naam={this.state.gebruiker.naam} entries={this.state.gebruiker.entries}/>
        <UrlFormulier onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <GezichtDetect imgUrl={imgUrl} boxes={this.state.boxes}/>
        </div>:(route === 'login')
          ? <LogIn  laadGebruiker = {this.laadGebruiker} onRouteChange={this.onRouteChange}/>
          : <Registreer  laadGebruiker = {this.laadGebruiker} onRouteChange={this.onRouteChange}/>}
      </div>
  )}
}

export default App;
