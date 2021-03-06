import React,{Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImagelinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'


const app = new Clarifai.App({
 apiKey: 'cf3d9c553d914a6698a45e0e7702d9a5'
});
const particles={
    particles: {
      number:{
        value:70,
        density:{
          enable:true,
          value_area:800
        }
      
      }
      
    }
  }
class App extends Component{
    constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:''
    }
  }
  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }

  calulateFacePosition=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputImage');
    const width=Number(image.width);
    const height=Number(image.height);
    return{

      leftCol:clarifaiFace.left_col*width,
      topRow:clarifaiFace.top_row*height,
      rightCol:width-(clarifaiFace.right_col*width),
      bottomRow:height-(clarifaiFace.bottom_row*height)

    }
    
  }

  displayFace=(box)=>{
    this.setState({box:box});
  }

  onButtonSubmit=()=>{
         this.setState({imageUrl:this.state.input});
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        .then(response => {
          this.displayFace(this.calulateFacePosition(response));
        })
        .catch(err => {
          console.log(err);
        });
  }

  render(){ 
    return (
    <div className="App">
      <Particles className="particle"
              params={particles}
            />
       <Logo/>
       <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>

      
    </div>
  );
}
}

export default App;
