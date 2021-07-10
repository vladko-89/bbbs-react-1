/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import {
  bool, func, shape, string,
} from 'prop-types';

import './PopupVideo.scss';

export default function PopupVideo({ isOpened, setOpened, video }) {
  function onClose(event) {
    if (event.target === event.currentTarget) {
      setOpened(false);
    }
  }

  return (
    <div className={`popup-video${isOpened ? ' popup-video_visible' : ' popup-video_invisible'}`} onClick={onClose}>
      <div className="popup-video__container">
        <iframe className="popup-video__frame" title={video.title} src={isOpened && video.link} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <h2 className="popup-video__title" title={video.title}>{video.title}</h2>
        <p className="popup-video__subtitle" title={video.info}>{video.info}</p>
      </div>
    </div>
  );
}

PopupVideo.defaultProps = {
  isOpened: false,
  video: shape({
    title: 'Без названия',
    info: '',
    link: 'https://youtube.com/embed',
  }),
  setOpened: () => {},
};

PopupVideo.propTypes = {
  isOpened: bool,
  video: shape({
    title: string,
    info: string,
    link: string,
  }),
  setOpened: func,
};
