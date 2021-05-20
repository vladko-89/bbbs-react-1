import React from 'react';
import { Link } from 'react-router-dom';
import rafting from "../../images/where-to-go/img-xl.jpg"

function MainMentor() {
  return (
    <div className="card card_type_main card_color_yellow">
    <p className="rubric card__rubric">Выбор наставника</p>
    <div className="card__title-wrap">
      <Link to="/place" className="card__link-wrap">
        <h2 className="section-title card__title">Сплав на байдарках в 2 строки</h2>
      </Link>
      <p className="caption card__title-caption">усадьба Архангельское в две строки</p>
    </div>
    <Link to="/place" className="card__link-wrap card__link-wrap_content_article-img">
      <img src={rafting} alt="Сплав на байдарках" className="card__img" />
    </Link>
    <Link to="#" className="link card__link">перейти на сайт</Link>
  </div>
  )
}

export default MainMentor;