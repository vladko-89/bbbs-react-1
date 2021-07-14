/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

import Preloader from '../Preloader/Preloader';
import Story from '../Story/Story';
import api from '../../utils/Api';

import './Stories.scss';

import arrowRight from '../../images/svg/arrow-right-black.svg';
import arrowLeft from '../../images/svg/arrow-left-black.svg';

export default function Stories() {
  const [stories, setStories] = React.useState([]);
  const [showButtons, setShowButtons] = React.useState([]);
  const [count, setCount] = React.useState(0);

  function getStories() {
    api.getStories()
      .then((res) => {
        setStories(res.results);
        setShowButtons(res.results.slice(0, 5));
      })
      .catch((error) => console.log(error));
  }

  function slideRight() {
    setShowButtons(stories.slice(count + 1, count + 6));
    setCount(count + 1);
  }

  function slideLeft() {
    setShowButtons(stories.slice(count - 1, count + 5));
    setCount(count - 1);
  }

  function slideToStory(id) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  React.useEffect(() => {
    getStories();
  }, []);

  if (stories?.length > 0) {
    return (
      <main className="main">
        <section className="page__section stories">
          <h1 className="main-title stories__title">Истории дружбы</h1>
          <p className="section-title stories__description">
            Результат нашей работы сложно показать цифрами. Как измерить и взвесить дружбу? Как
            оценить успехи абсолютно разных детей? У каждой пары — свой результат и свои достижения.
            Именно об этом мы рассказываем в историях.
          </p>
          <div className="tags stories__tags stories__tags_content_long-list">
            <button disabled={count === 0} className={`${count === 0 ? 'stories__slide-button stories__slide-button_disabled' : 'stories__slide-button'}`} type="button" onClick={slideLeft}>
              <img src={arrowLeft} alt="Стрелка" className="stories__arrow" />
            </button>
            <ul className="tags__list stories__list">
              {showButtons.map((tag) => (
                <li className="tags__list-item" key={tag.id}>
                  {/* <Link to={`#${tag.id}`} className="button tags__button" type="button">
                    {tag.title}
                  </Link> */}
                  <button onClick={() => slideToStory(tag.id)} className="button tags__button" type="button">
                    {tag.title}
                  </button>
                </li>
              ))}
            </ul>
            <button disabled={count === stories.length - 6} className={`${count === stories.length - 6 ? 'stories__slide-button stories__slide-button_disabled' : 'stories__slide-button'}`} type="button" onClick={slideRight}>
              <img src={arrowRight} alt="Стрелка" className="stories__arrow" />
            </button>
          </div>
          <ul className="list__stories">
            {stories.map((story) => (
              <li key={story.id} id={story.id}>
                <Story
                  card={story}
                  id={story.id}
                  title={story.title}
                  text={story.text}
                  prolog={story.prolog}
                  imageUrl={story.imageUrl}
                  date={story.beginningOfFriendship}
                  arrImages={story.imagesUrls}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
  return (
    <Preloader />
  );
}
