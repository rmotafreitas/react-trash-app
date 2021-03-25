import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Tecnologiamente Ecológico</h1>
      <p>Do que estás à espera?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          VAMOS COMEÇAR
        </Button>
        <button className="video" onClick={() => window.location = 'https://drive.google.com/file/d/1yT2yVGf7L_A9lRFJAQnfeoXpv-MTErht/view?usp=sharing'}>
          VÍDEO PROMOCIONAL <i class="fab fa-youtube"></i>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;