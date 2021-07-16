import React from 'react';

function MeetingStoryFormExample() {
  const handleCancelClick = () => {

  };
  const date = new Date(2020, 11, 6).toISOString().substring(0, 10);
  return (
    <div
      className="card-container card-container_type_personal-area example-form"
      title="Это пример заполнения"
    >
      <div className="card personal-area__card personal-area__card_type_add-photo">

        <p
          className="caption personal-area__bottom-caption"
        />

      </div>
      <div className="card personal-area__card personal-area__card_type_content">
        <div className="personal-area__form">
          <div className="personal-area__form-input_wrap">
            <input
              type="text"
              placeholder="Место встречи"
              className="personal-area__form-input personal-area__form-input_type_place"
              id="place"
              minLength={2}
              maxLength={50}
              value="Парк горького"
              disabled
            />
          </div>
          <div className="personal-area__form-input_wrap_data">
            <input
              type="date" // здесь выбор даты
              placeholder=""
              className="personal-area__form-input personal-area__form-input_type_data"
              id="date"
              value={date}
              disabled
            />
          </div>
          <div className=" personal-area__form-input_wrap_type_textarea">
            <textarea
              className="personal-area__form-input personal-area__form-input_type_textarea"
              placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
              maxLength={5000}
              minLength={2}
              id="description"
              value="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
              disabled
            />
          </div>
          <div className="personal-area__rating">
            <p
              className="personal-area__rate personal-area__rate_type_good-example "
              aria-label="good"
              title="Было классно"
            />

            <p
              className="personal-area__rate personal-area__rate_type_neutral"
              aria-label="neutral"
              title="Хорошо"
            />

            <p
              className="personal-area__rate personal-area__rate_type_bad"
              aria-label="bad"
              title="Бывает и лучше"
            />
            <p className="personal-area__rating-label personal-area__rating-label-example">
              Было классно
            </p>

          </div>

          <div className="personal-area__buttons">
            <button
              className="button personal-area__delete"
              type="button"
              onClick={handleCancelClick}
            >
              Отменить
            </button>
            <button className="button personal-area__save" type="button">
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

MeetingStoryFormExample.propTypes = {

};

export default MeetingStoryFormExample;
