import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MainQuestion({ question, name }) {
  return (
    <article className="question main-questions__item">
      <Link to="/questions" className="main-questions__link">
        <h2 className="section-title question__title main-questions__title">{question}</h2>
      </Link>
      <p className="rubric question__rubric main-questions__rubric">{name}</p>
    </article>
  );
}

MainQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MainQuestion;
