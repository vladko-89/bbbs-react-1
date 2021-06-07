/* eslint-disable max-len */
import React from 'react';
import logo from '../../images/svg/calendar_logo.svg';
import CardAboutUs from '../CardAboutUs/CardAboutUs';

import styles from './AboutUs.module.scss';

function AboutUs() {
  return (
    <div className={styles.main}>
      <section className={`${styles.about} ${styles.page__section}`}>
        <h3 className={`${styles['chapter-title']} ${styles.about__title}`}>
          Наставники.про – цифоровая информационная платформа огрганизации «Старшие
          Братья Старшие Сестры». Созданная для поддержки наставников программы.

        </h3>
        <img src={logo} alt="Логотип наставники.про" className={styles.about__logo} />

        <div className={styles.about__us}>
          <div className={`${styles.card} ${styles.card_color_yellow} ${styles.about__circle}`}>
            <h2 className={styles['section-title']}>
              Об организации
            </h2>
          </div>
          <article className={`${styles.card} ${styles.card_content_annotation} ${styles.about__caption}`}>
            <div className={styles.card__content}>
              <div className={styles.card__annotation}>
                <p className={`${styles.paragraph} ${styles['about__main-text']}`}>
                  «Старшие Братья Старшие Сестры» — межрегиональная общественная
                  организация содействия воспитанию подрастающего поколения. Мы поддерживаем детей, которым требуется
                  внимание: оставшихся без попечения родителей, приемных, детей из неполных, многодетных или
                  неблагополучных семей, детей с ограниченными возможностями.
                </p>
                <p className={`${styles.paragraph} ${styles['about__main-text']}`}>
                  Любому человеку, тем более ребенку, необходимо общение. Без него
                  дети растут неуверенными и замкнутыми. Одиночество токсично, а самое надежное противоядие – дружба.
                </p>
                <p className={`${styles.paragraph} ${styles['about__main-text']}`}>
                  Мы помогаем детям, которым не хватает поддержки взрослого друга,
                  «Младшим». Таким другом становится наш волонтер, «Старший». Он принимает ребенка, какой он есть,
                  поддерживает, помогает раскрыть потенциал, почувствовать уверенность в своих силах, узнать элементарные
                  вещи о жизни, адаптироваться и полноценно участвовать в жизни общества.
                </p>
              </div>
            </div>
          </article>
        </div>

        <blockquote className={styles.about__quote}>
          <h3 className={`${styles['chapter-title']} ${styles['about__quote-text']}`}>
            Мы хотим, чтобы наставник был у каждого ребенка, который в нем
            нуждается
          </h3>
        </blockquote>

        <div className={styles.about__cards}>
          <CardAboutUs
            title="Пожертвования"
            linkText="сделать пожертвование"
            color="blue"
          >
            <div className={`${styles.card__content} ${styles['about__card-content']}`}>
              <div className={styles.card__annotation}>
                <p className={`${styles.paragraph} ${styles.card__paragraph}`}>
                  Деньги пойдут на оплату работы кураторов программы
                  (профессиональные психологи/социальные работники), которые поддерживают дружбу между
                  ребенком и наставником.
                </p>
              </div>
            </div>
          </CardAboutUs>

          <CardAboutUs
            title="Наставничество"
            linkText="подробнее"
            color="pink"
          >
            <div className={`${styles.card__content} ${styles['about__card-content']}`}>
              <div className={styles.card__annotation}>
                <p className={`${styles.paragraph} ${styles.card__paragraph}`}>
                  Наставник «Старшие Братья Старшие Сестры» — значимый взрослый,
                  который становится для ребенка старшим другом, ролевой моделью, принимает
                  своего «Младшего» таким, какой он есть. «Старший» открывает для ребенка дверь в большой мир и дарит
                  ему надежду на более счастливое и успешное будущее.
                </p>
              </div>
            </div>
          </CardAboutUs>

          <CardAboutUs
            title="Партнерство"
            linkText="подробнее"
            color="green"
          >
            <div className={`${styles.card__content} ${styles['about__card-content']}`}>
              <div className={styles.card__annotation}>
                <p className={`${styles.paragraph} ${styles.card__paragraph}`}>
                  Компании поддерживают нас не только деньгами, но и делами. Мы
                  собрали все возможные способы поддержки и сотрудничества: профессиональная
                  помощь Pro Bono, организационная помощь, корпоративное волонтерство, мастер-классы, лекции, учебные
                  программы.
                </p>
              </div>
            </div>
          </CardAboutUs>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
