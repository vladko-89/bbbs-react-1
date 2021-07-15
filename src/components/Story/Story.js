import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { getMonthPrescription } from '../../utils/utils';

import 'swiper/swiper-bundle.css';
import './Story.scss';

SwiperCore.use([Navigation]);

function Story({
  arrImages,
  imageUrl,
  title,
  date,
  text,
  id,
  prolog,
}) {
  const w = true;

  return (
    <section className="page__section stories" id={`${id}`}>
      <img className="stories__image" src={imageUrl} alt={title} />
      <h2 className="chapter-title stories__name">{title}</h2>
      <p className="paragraph stories__caption">
        {`Вместе с ${getMonthPrescription(date.slice(5, 7))} ${date.slice(0, 4)}`}
      </p>
      <p className="section-title stories__about">
        {prolog}
      </p>
      <p className="paragraph stories__about-full stories__text-box">
        {text}
      </p>
      <blockquote className="stories__quote">
        <p className="chapter-title stories__quote-text">
          Первые месяцы дружбы с Никитой были непростыми – мы привыкали друг к другу. Никита не
          верил, что я надолго в его жизни
        </p>
      </blockquote>
      <Swiper
        className="stories__images-box"
        centeredSlides={w}
        initialSlide="0"
        slidesPerView="3"
        loop={w}
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
        {arrImages.map((item) => (
          <SwiperSlide key={item}>
            <img className="stories__slide" src={item.image} alt="Фото истории" />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <img className="stories__slide" src={imageUrl} alt="Фото истории" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="stories__slide" src="https://picsum.photos/id/180/800/600" alt="Фото истории" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="stories__slide" src="https://picsum.photos/id/3/800/600" alt="Фото истории" />
        </SwiperSlide>
        <button className="swiper__button swiper__button-prev" type="button" aria-label="Назад" />
        <button className="swiper__button swiper__button-next" type="button" aria-label="Вперед" />
      </Swiper>
      <div className="stories__paragraph">
        <p className="paragraph stories__parahraphs stories__text-box">
          {text}
        </p>
        <p className="paragraph stories__parahraphs stories__text-box">
          {text}
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
          {text}
        </p>
      </div>
    </section>
  );
}

Story.propTypes = {
  arrImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  prolog: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Story;
