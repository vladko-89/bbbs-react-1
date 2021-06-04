import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../images/where-to-go/img-xl.jpg';

export default function MainArticle({
  title, author, image, link, annotation,
}) {
  return (
    <article className="card-container card-container_type_main-article">
      <div className="card card_type_main card_color_yellow">
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{title}</h2>
          <p className="caption card__title-caption">{author}</p>
        </div>
        <img src={image} alt="Картинка основной статьи" className="card__img card__img_position_main-article" />
        <a href={link} className="link card__link">читать на сайте</a>
      </div>
      <div className="card card_content_annotation card_type_main">
        <div className="card__content">
          <div className="card__annotation card__annotation_position_main-card card__annotation_type_main-article">
            {
              annotation.map((paragraph, i) => <p key={i.toString} className="paragraph card__paragraph">{paragraph}</p>)
            }
          </div>
        </div>
      </div>
    </article>
  );
}

MainArticle.defaultProps = {
  title: 'Без заголовка',
  author: 'Нет автора',
  image: defaultImage,
  link: '/article',
  annotation: '',
};

MainArticle.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  annotation: PropTypes.string,
};
