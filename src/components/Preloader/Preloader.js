import React from 'react';
import './Preloader.css';
import preloaderImg from '../../images/preloader/loading.png';

function Preloader() {
  return (
    <section className="preloader">
      <img className="preloader__circle" src={preloaderImg} alt="Preloader" />
    </section>
  );
}

export default Preloader;
