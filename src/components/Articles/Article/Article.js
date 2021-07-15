/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../../Preloader/Preloader';
import NextArticleLink from './NextArticleLink/NextArticleLink';

import api from '../../../utils/Api';

import './Article.scss';

export default function Article() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const article = React.useRef({});
  const nextArticle = React.useRef(null);

  React.useEffect(() => {
    setIsLoading(true);

    api.getArticle(id)
      .then((resArticle) => {
        article.current = resArticle;

        return api.getArticle(Number(id) + 1)
          .catch((error) => {
            nextArticle.current = null;
            return Promise.reject(error);
          });
      })
      .then((resNextArticle) => {
        nextArticle.current = resNextArticle;
      })
      .catch((error) => console.log('Ошибка загрузки данных: ', error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <main className="main">
      {
        isLoading ? <Preloader /> : (
          <section className="article page__section">
            <h1 className="chapter-title article__main-title">{article.current.title}</h1>
            <p className="section-title article__description">{article.current.description}</p>
            <figure className="article__figure article__image-container">
              <img
                src={article.current.imageUrl}
                alt={article.current.title}
                className="article__image"
              />
              <figcaption className="caption article__figcaption">
                {`${article.current.author}. ${article.current.profession}`}
              </figcaption>
            </figure>

            {/* TEXT BLOCK */}
            <div className="article__container">
              <h2 className="section-title article__subtitle">
                {article.current.profession}
              </h2>
              <p className="paragraph">
                {article.current.text}
              </p>

              {/* TABLE */}
              <h2 className="section-title article__subtitle">
                {article.current.title}
              </h2>
              <ul className="card article__card">
                <li className="article__card-list-item">
                  <p className="paragraph">
                    {article.current.id}
                  </p>
                </li>
                <li className="article__card-list-item">
                  <p className="paragraph">
                    {String(article.current.isMain)}
                  </p>
                </li>
                <li className="article__card-list-item">
                  <p className="paragraph">
                    {article.current.title}
                  </p>
                </li>
                <li className="article__card-list-item">
                  <p className="paragraph">
                    {article.current.author}
                  </p>
                </li>
                <li className="article__card-list-item">
                  <p className="paragraph">
                    {article.current.profession}
                  </p>
                </li>
                <li className="article__card-list-item">
                  <p className="paragraph">
                    {article.current.description}
                  </p>
                </li>
                <li className="article__card-list-item">
                  <p className="paragraph">
                    {article.current.text}
                  </p>
                </li>
                <li className="article__card-list-item">
                  <p className="paragraph">
                    {article.current.color}
                  </p>
                </li>
                <li className="article__card-list-item">
                  <p className="paragraph">
                    {article.current.imageUrl}
                  </p>
                </li>
              </ul>

              {/* TEXT BLOCK */}
              <h2 className="section-title article__subtitle">{article.current.author}</h2>
              <p className="paragraph">
                {article.current.text}
              </p>

              {/* COLORED TEXT BLOCK */}
              <h2 className="section-title article__subtitle">{article.current.profession}</h2>
              <div className="card article__card" style={{ backgroundColor: article.current.color }}>
                <p className="paragraph">
                  {article.current.text}
                </p>
              </div>

              {
                nextArticle.current && <NextArticleLink nextArticle={nextArticle.current} />
              }

            </div>
          </section>
        )
      }
    </main>
  );
}
