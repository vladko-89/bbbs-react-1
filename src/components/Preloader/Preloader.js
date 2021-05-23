import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <section className="preloader">
      <i className="preloader__circle" />
      <p className="preloader__caption">Загрузка данных...</p>
    </section>
  );
}

export default Preloader;
