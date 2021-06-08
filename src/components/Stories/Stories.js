/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper-bundle.css';
import './Stories.scss';

import arrowRight from '../../images/svg/arrow-right-black.svg';
import mainStoryImage from '../../images/stories/DG7B0561(1).jpg';

SwiperCore.use([Navigation]);

export default function Stories() {
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
          <ul className="tags__list stories__list">
            <li className="tags__list-item">
              <button className="button tags__button tags__button_active" type="button">
                Алина и Марина
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Кирилл и Никита</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Алик и Артём</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Нина и Виталик</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Юля и Вова</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Катя и Петя</button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">Вероника и Виталик</button>
            </li>
            <li className="tags__list-item">
              <img src={arrowRight} alt="Стрелка" className="stories__arrow" />
            </li>
          </ul>
        </div>
        <img className="stories__image" src={mainStoryImage} alt="Алина и Марина" />
        <h2 className="chapter-title stories__name">Алина и Марина</h2>
        <p className="paragraph stories__caption">Вместе с февраля 2013 года</p>
        <p className="section-title stories__about">
          Волонтёром в программе «Старшие Братья Старшие Сёстры» я стал в 2012 году, а в первые
          месяцы 2013-го после всех тестов и тренингов у меня появился младший – Никита. Надо
          сказать, что шёл я к этому довольно долго два или три года. Нет, не потому что собирался с
          мыслями. Я совершенно чётко осознавал, что накопил достаточный эмоциональный бэкграунд и
          готов делиться им с детьми, а точнее – с каким-то одним ребёнком.
        </p>
        <p className="paragraph stories__about-full stories__text-box">
          Волонтёром в программе «Старшие Братья Старшие Сёстры» я стал в 2012 году, а в первые
          месяцы 2013-го после всех тестов и тренингов у меня появился младший — Никита. Надо
          сказать, что шёл я к этому довольно долго два или три года. Нет, не потому что собирался с
          мыслями. Я совершенно чётко осознавал, что накопил достаточный эмоциональный бэкграунд и
          готов делиться им с детьми, а точнее — с каким-то одним ребёнком. Но большинство
          некоммерческих организаций, которые работают с сиротами, практикуют массовые выезды
          волонтёров к группам детей, а мне хотелось найти программу, где организуют индивидуальное
          общение взрослого и ребёнка, поскольку я понимал, что дети в интернатах гораздо больше
          нуждаются во внимании и индивидуальном общении, чем в подарках. На поиски подходящей
          программы ушло некоторое время, и вдруг в конце 2012 года общество сильно всколыхнулось
          после принятия «закона Димы Яковлева», все волонтёрские программы стали очень активны в
          Интернете, в том числе и «Старшие братья Старшие сёстры». Прочитав первую страницу на
          сайте «Старших братьев…», я понял: вот оно! И сразу заполнил заявку на участие в
          программе.
        </p>
        <blockquote className="stories__quote">
          <p className="chapter-title stories__quote-text">
            Первые месяцы дружбы с Никитой были непростыми – мы привыкали друг к другу. Никита не
            верил, что я надолго в его жизни
          </p>
        </blockquote>
        <Swiper
          className="stories__images-box"
          centeredSlides={true}
          slidesPerView="auto"
          breakpoints={{
            320: {
              spaceBetween: 15,
            },
            720: {
              spaceBetween: 30,
            },
            1024: {
              spaceBetween: 130,
            },
          }}
          navigation={{
            prevEl: '.swiper__button-prev',
            nextEl: '.swiper__button-next',
            disabledClass: 'swiper__button_disabled',
          }}
        >
          <SwiperSlide>
            <img className="stories__slide" src={mainStoryImage} alt="Фото истории" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="stories__slide" src="https://picsum.photos/id/180/800/600" alt="Фото истории" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="stories__slide" src="https://picsum.photos/id/3/800/600" alt="Фото истории" />
          </SwiperSlide>
          <button className="swiper__button swiper__button-prev" type="button" />
          <button className="swiper__button swiper__button-next" type="button" />
        </Swiper>
        <div className="stories__paragraph">
          <p className="paragraph stories__parahraphs stories__text-box">
            Переломить эту ситуацию помогли каникулы. Когда я впервые провожал его в зимний лагерь,
            он сказал, что не хочет уезжать, потому что, когда он вернётся, меня уже не будет рядом.
            Убеждения и заверения в том, что я никуда не денусь, не помогли, и даже то, что после
            каникул я пришёл, не добавило Никите уверенности в долгосрочности нашей дружбы. Ситуация
            повторилась летом: уезжая в лагерь, он снова боялся, что наша дружба кончится, но я
            снова встретил его осенью. И тогда Никита понял, что я в его жизни надолго и всерьёз, и
            стал доверять мне. Например, я могу позвонить и сказать, что на этих выходных у меня не
            получится приехать, и он совершенно спокойно спрашивает, приду ли я на следующих.
          </p>
          <p className="paragraph stories__parahraphs stories__text-box">
            Сейчас всё хорошо, и я очень рад нашим встречам и общению. Вдохновляет то, что Никита
            начал больше рассказывать о своей жизни и друзьях, стал более открытым и чутким. Он даже
            запомнил дату нашей первой встречи, понимая, что это важная дата для нас обоих. Мы
            назвали эту дату днём рождения нашей пары, и, когда нам исполнилось три года, он всем в
            группе рассказывал о нашем дне рождения и приглашал на торт.
          </p>
          <p className="paragraph stories__parahraphs stories__text-box">
            Ещё одна радость — он учится рассуждать, понимать свои потребности и выбирать то, что
            ему больше нравится. Для стороннего наблюдателя это кажется неочевидным достижением, но,
            если знать, как неохотно воспитанники сиротских учреждений включают голову, особенно в
            ситуации выбора, то всё станет ясно. Тем не менее мне порой приходится прилагать
            некоторые усилия к тому, чтобы он аргументировал свой выбор. Например, когда я
            спрашиваю: «Куда мы пойдем: в парк Горького или в кино?» — он какое-то время пытается
            угадать «правильный ответ», но, когда видит, что со мной этот номер не проходит,
            начинает объяснять, почему сделал тот или иной выбор.
          </p>
          <p className="paragraph stories__parahraphs stories__text-box">
            Переломить эту ситуацию помогли каникулы. Когда я впервые провожал его в зимний лагерь,
            он сказал, что не хочет уезжать, потому что, когда он вернётся, меня уже не будет рядом.
            Убеждения и заверения в том, что я никуда не денусь, не помогли, и даже то, что после
            каникул я пришёл, не добавило Никите уверенности в долгосрочности нашей дружбы. Ситуация
            повторилась летом: уезжая в лагерь, он снова боялся, что наша дружба кончится, но я
            снова встретил его осенью. И тогда Никита понял, что я в его жизни надолго и всерьёз, и
            стал доверять мне. Например, я могу позвонить и сказать, что на этих выходных у меня не
            получится приехать, и он совершенно спокойно спрашивает, приду ли я на следующих.
          </p>
        </div>
      </section>
      <section className="page__section stories">
        <img className="stories__image" src={mainStoryImage} alt="Алина и Марина" />
        <h2 className="chapter-title stories__name">Алина и Марина</h2>
        <p className="paragraph stories__caption">Вместе с февраля 2013 года</p>
        <p className="section-title stories__about">
          Волонтёром в программе «Старшие Братья Старшие Сёстры» я стал в 2012 году, а в первые
          месяцы 2013-го после всех тестов и тренингов у меня появился младший – Никита. Надо
          сказать, что шёл я к этому довольно долго два или три года. Нет, не потому что собирался с
          мыслями. Я совершенно чётко осознавал, что накопил достаточный эмоциональный бэкграунд и
          готов делиться им с детьми, а точнее – с каким-то одним ребёнком.
        </p>
      </section>
    </main>
  );
}
