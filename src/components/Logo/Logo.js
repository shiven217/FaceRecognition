import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';
const Logo=()=>{
    
        return(
        <div className="ma4 mt0 pt3 center">

            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner pa2">  
                <img style={{paddingTop:'2px'}} alt='logo' src={brain}/>
                
                </div>
            </Tilt>
        </div>
        );
    }


export default Logo;