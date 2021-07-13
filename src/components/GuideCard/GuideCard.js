import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { onLinkNav } from '../../utils/utils';
import './GuideCard.scss';

export const shapes = [
  'square',
  'circle',
  'arch',
];

export default function GuideCard({
  shape, title, clickOnCard, card, id, image,
}) {
  return (

    <div className="catalog-card card-pagination card-pagination_type_shapes">
      <div className={`card card_form_${shape} rights__card`}>
        <Link to={`/guides/${id}`} onClick={() => { onLinkNav(); clickOnCard(card); }} className="rights__link">
          <img src={image} alt={title} className="catalog-card__image" />
        </Link>
      </div>
      <h2 className="section-title catalog-card__title">{title}</h2>
    </div>

  );
}

GuideCard.defaultProps = {
  shape: shapes[0],
  title: 'Без названия',
  image: '',
};

GuideCard.propTypes = {
  shape: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  clickOnCard: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
