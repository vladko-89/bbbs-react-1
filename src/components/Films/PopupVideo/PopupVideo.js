/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import {
  bool, func, shape, string,
} from 'prop-types';

import './PopupVideo.scss';

export default function PopupVideo({ isOpened, setOpened, video }) {
  const [link, setLink] = React.useState('');
  const timer = React.useRef(null);

  function onClose(event) {
    if (event.target === event.currentTarget || event.key === 'Escape') {
      clearTimeout(timer.current);
      setOpened(false);
      setLink('');
    }
  }

  if (isOpened) {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setLink(video.link);
    }, 300);
  }

  React.useEffect(() => {
    function pressEsc(event) {
      if (event.key === 'Escape') {
        onClose(event);
      }
    }

    document.addEventListener('keyup', pressEsc);

    return () => {
      document.removeEventListener('keyup', pressEsc);
    };
  }, []);

  return (
    <div className={`popup-video${isOpened ? ' popup-video_visible' : ''}`} onClick={onClose}>
      <div className={`popup-video__container${isOpened ? ' popup-video__container_visible' : ''}`}>
        <iframe className="popup-video__frame" title={video.title} src={isOpened ? link : undefined} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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
