import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MainQuestion(props) {
  return (
    <article className="question main-questions__item">
      <Link to="/questions" className="main-questions__link">
        <h2 className="section-title question__title main-questions__title">{props.title}</h2>
      </Link>
      <p className="rubric question__rubric main-questions__rubric">{props.name}</p>
    </article>
  )
}

MainQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
MainQuestion.defaultProps = {
  title: 'Название',
  name: 'Рубрика',
};
export default MainQuestion;