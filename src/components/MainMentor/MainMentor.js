import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MainMentor(props) {
  return (
    <div className="card card_type_main card_color_yellow">
    <p className="rubric card__rubric">Выбор наставника</p>
    <div className="card__title-wrap">
      <Link to="/place" className="card__link-wrap">
        <h2 className="section-title card__title">{props.title}</h2>
      </Link>
      <p className="caption card__title-caption">{props.name}</p>
    </div>
    <Link to="/place" className="card__link-wrap card__link-wrap_content_article-img">
      <img src={props.imageUrl} alt="Сплав на байдарках" className="card__img" />
    </Link>
    <a href={props.link} className="link card__link">перейти на сайт</a>
  </div>
  )
}

MainMentor.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}
MainMentor.defaultProps = {
  title: 'Название',
  name: 'О видео',
  link: "/",
  imageUrl: "https://learn.getgrav.org/system/images/media/thumb-jpg.png",
};

export default MainMentor;