import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css'
import ReactDOM from 'react-dom';
import { Col, Row } from 'react-bootstrap';
import logomuni from './assest/Logo muni-01.png';
import logoradio from './assest/Logo Radio-01.png';
import fb from './assest/FB-01.png';
import ig from './assest/IG-01.png';
const Player=()=>{

 
    

    return(
        
       <>
        
            <Row  className="footer grande">
                <a href='https://www.facebook.com/pamparadio879'target="_blank" rel="noopener noreferrer" >
                <img alt="" src={fb} width="40" height='40'/>
                </a>
                <a href='https://www.instagram.com/pamparadio879fm/'target="_blank" rel="noopener noreferrer" >
                <img alt="" src={ig} width="40" height='40'/>
                </a>
                <AudioPlayer
                
                    controls={false}
                    src="http://186.33.235.85:8088/;stream/1"
                    onPlay={e => console.log("onPlay")}
                    // other props here
                />
                <img alt="" src={logoradio} width="120" height='50'/>
                <img alt="" src={logomuni} width="80" height='80'/>
        </Row>

        <div className='chica header-footer'>
                <img alt="" src={logoradio} width="120" height='50' className='tamanio-radio'/>
                <img alt="" src={logomuni} width="80" height='80' className='tamanio-muni'/>
        <Row className='chica footer-ch'>
        <a href='https://www.facebook.com/pamparadio879'target="_blank" rel="noopener noreferrer" >
                <img alt="" src={fb} width="30" height='30'/>
                </a>
                <a href='https://www.instagram.com/pamparadio879fm/'target="_blank" rel="noopener noreferrer" >
                <img alt="" src={ig} width="30" height='30'/>
                </a>
                <AudioPlayer
                
                    controls={false}
                    src="http://186.33.235.85:8088/;stream/1"
                    onPlay={e => console.log("onPlay")}
                    // other props here
                />
              
            </Row>
            </div>
      </>
        
        
    )

}
export default Player;