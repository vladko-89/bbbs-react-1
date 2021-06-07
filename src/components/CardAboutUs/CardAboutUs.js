import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardAboutUs.module.scss';

function CardAboutUs(
  {
    color,
    title,
    children,
    linkText,
  },
) {
  return (
    <article className={`${styles['card-container']} ${styles['about__card-container']}`}>
      <div className={`${styles.card} ${styles[`card_color_${color}`]} ${styles.about__card}`}>
        <h2 className={styles['section-title']}>{title}</h2>
      </div>
      <div className={`${styles.card} ${styles.card_content_annotation}`}>
        <div className={`${styles.card__content} ${styles['about__card-content']}`}>
          {children}
        </div>
        <a
          href="https://yandex.ru"
          rel="noreferrer"
          target="_blank"
          className={`${styles.link} ${styles.card__link} ${styles['about__card-link']}`}
        >
          {linkText}
        </a>
      </div>
    </article>
  );
}

CardAboutUs.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default CardAboutUs;
