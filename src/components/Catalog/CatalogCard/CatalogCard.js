import React from 'react';
import PropTypes from 'prop-types';

export const shapes = [
  'square',
  'circle',
  'arch',
];

export default function CatalogCard({ shape, title, path }) {
  return (
    <div className="catalog-card card-pagination card-pagination_type_shapes">
      <div className={`card card_form_${shape} rights__card`}>
        <a href={path} className="rights__link">
          <img src="./images/catalog/catalog-hulk-boys.jpg" alt={title} className="catalog-card__image" />
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
};

CatalogCard.propTypes = {
  shape: PropTypes.string,
  title: PropTypes.string,
  path: PropTypes.string,
};
