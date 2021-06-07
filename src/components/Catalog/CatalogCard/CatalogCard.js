import React from 'react';
import PropTypes from 'prop-types';

import './CatalogCard.scss';

export const shapes = [
  'square',
  'circle',
  'arch',
];

export default function CatalogCard({
  shape, title, path, image,
}) {
  return (
    <div className="catalog-card card-pagination card-pagination_type_shapes">
      <div className={`card card_form_${shape} rights__card`}>
        <a href={path} className="rights__link">
          <img src={image} alt={title} className="catalog-card__image" />
        </a>
      </div>
      <h2 className="section-title catalog-card__title">{title}</h2>
    </div>
  );
}

CatalogCard.defaultProps = {
  shape: shapes[0],
  title: 'Без названия',
  path: '/',
  image: '',
};

CatalogCard.propTypes = {
  shape: PropTypes.string,
  title: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string,
};
