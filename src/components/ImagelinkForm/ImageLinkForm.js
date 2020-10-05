import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
    
        return(
        <div>
            <p className="f3 white">
                {`This brain will detect faces in your picture`}
            </p>
            
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                <input className="f4 pa2 w-70 center" type='text'onChange={onInputChange}/>
                <button className="w-30 link grow f4 pv2 dib ph3 bg-light-purple white" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
            
        </div>
        );
    }


export default ImageLinkForm;