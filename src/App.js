
import React from 'react';
import claps from'./data/claps.wav'
import crash from './data/crash.wav'
import cymbal from './data/cymbal.wav'
import fx from './data/fx.wav'
import kick from './data/kick.wav'  
import percussions from './data/percussions.wav'
import shaker from './data/shaker.wav'
import snare from './data/snare.wav'
import tom from './data/tom.wav'

import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [infoboton, setInfoboton] = useState('π»πΊπΈπ΅πΆπΌ');
    
  const handleActivate =(e) =>{
      const boton = e.target.innerText
      setInfoboton(e.target.title)
      console.log(boton)
      console.log(infoboton)
      const audio = document.getElementById(boton)
      audio.play()
  }

  const handleKey =(tecla) =>{
      const audio = document.getElementById(tecla)
      audio?.play()
      if(audio?.title){setInfoboton(audio?.title)} else {setInfoboton('Tecla incorrecta, intenta de nuevo')}
      
  }
  

useEffect(() => {
  const listener = event => {
      event.preventDefault();
      let tecla = event.key?.toLocaleUpperCase()
      handleKey(tecla)
      
      
  }
  document.addEventListener("keydown", listener);
  return () => {
    document.removeEventListener("keydown", listener);
  };
}, []);

  return (
    <div className='centrar'>

    
      <h1 className='title'>Caja de ritmos</h1>
    <div id="drum-machine">
    {/* div con clase contenedor */}
    <div className='contenedor'>
      <div className='drum-pads'>
            <button className="drum-pad" id="claps" title='Claps π΅' onClick={handleActivate}>Q
                <audio src={claps} className='clip' id='Q' title='claps'></audio>
            </button>
            <button className="drum-pad" id="crash" title='Crash πΆ' onClick={handleActivate}>W
                <audio src={crash} className='clip' id='W'title='crash'></audio>
            </button>
            <button className="drum-pad" id="cymbal" title='Cymbal π΅' onClick={handleActivate}>E
                <audio src={cymbal} className='clip' id='E' title='cymbal'></audio>
            </button>
            <button className="drum-pad" id="fx" title='fx (Effect) πΌ' onClick={handleActivate}>A
                <audio src={fx} className='clip' id='A' title='fx'></audio>
            </button>
            <button className="drum-pad" id="kick" title='Kick π΅' onClick={handleActivate}>S
                <audio src={kick} className='clip' id='S' title='kick'></audio>
            </button>
            <button className="drum-pad" id="percussions" title='Percussions πΆ' onClick={handleActivate}>D
                <audio src={percussions} className='clip' id='D' title='percussions'></audio>
            </button>
            <button className="drum-pad" id="shaker" title='Shaker πΌ' onClick={handleActivate}>Z
                <audio src={shaker} className='clip' id='Z' title='shaker'></audio>
            </button>
            <button className="drum-pad" id="snare" title='Snare π΅' onClick={handleActivate}>X
                <audio src={snare} className='clip' id='X' title='snare'></audio>
            </button>
            <button className="drum-pad" id="tom" title='Tom πΆ' onClick={handleActivate}>C
                <audio src={tom} className='clip' id='C' title='tom'></audio>
            </button>
      </div>
      
  </div>
      <div id="display"><h3>{infoboton}</h3></div>
  </div>
  </div>
  );
}

export default App;
