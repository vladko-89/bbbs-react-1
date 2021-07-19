import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/Api';
import Preloader from '../Preloader/Preloader';
import './GuideArticle.scss';

export default function GuideArticle() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [article, setArticle] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    api.getGuideArticle(id)
      .then((res) => setArticle(res))
      .finally(() => setIsLoading(false));
  }, []);
  return isLoading ? <Preloader /> : (
    <main className="main">
      <section className="article page__section">
        <h1 className="chapter-title article__main-title">{article.title}</h1>
        <p className="section-title article__description">
          {article.description}
        </p>
        <figure className="article__figure">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="article__image"
          />
          <figcaption className="caption article__figcaption">
            {article.imageCaption}
          </figcaption>
        </figure>

        { /* eslint-disable-next-line react/no-danger */}
        <div className="article_" dangerouslySetInnerHTML={{ __html: article.text }} />

      </section>
    </main>
  );
}
