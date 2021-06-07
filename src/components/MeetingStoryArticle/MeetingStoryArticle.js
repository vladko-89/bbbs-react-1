import React from 'react';
import PropTypes from 'prop-types';
import MeetingStoryForm from '../MeetingStoryForm/MeetingStoryForm';
import img from '../../images/personal-area/lk.png';

function MeetingStoryArticle({
  story,
  onEdit,
  onDelete,
  // onEditSubmit,
}) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [dataStory, setDataStory] = React.useState({ ...story });
  const handleEditClick = (e) => {
    onEdit(dataStory);
    setIsEdit(true);
    e.target.closest('article').classList.add('hidden');
  };
  const handleCancelForm = () => {
    setIsEdit(false);
  };
  const handleSubmitEditStory = (data) => {
    // onEditSubmit(data);
    setDataStory({ ...data });
    setIsEdit(false);
  };
  // даты
  const date = new Date(dataStory.date);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();
  // реакции
  // const labelReaction = document.querySelector('.personal-area__rating-label');
  // установка реакций
  const setReaction = () => {
    switch (dataStory.mood) {
      case 'bad':
        return 'Бывает и лучше';
      case 'neutral':
        return 'Хорошо';
      case 'good':
        return 'Было классно';
      default:
        return '';
    }
  };
  const reaction = setReaction();

  const handleDelete = () => {
    const time = `${month}, ${year}`;
    onDelete(time, dataStory);
  };

  return (
    <>
      {!isEdit && (
        <article className="card-container card-container_type_personal-area">
          <div className="card card_content_media">
            {/* пока так, будут ссылки от бэка, будем брать их */}
            <img src={img} alt="Катя" className="personal-area__photo" />
          </div>
          <div className="personal-area__card personal-area__date-container">
            <div className="personal-area__text-wrap">
              <h2 className="section-title personal-area__card-title">
                {dataStory.title}
              </h2>
              <p className="paragraph paragraph_article">
                {dataStory.description}
              </p>
            </div>
            <div className="personal-area__card-date-wrap">
              <p className="personal-area__card-weekday">{`${month}, ${year}`}</p>
              <p className="personal-area__card-day">{day}</p>
            </div>
            <div className="personal-area__actions">
              <div className="personal-area__rating">
                <button
                  className={`personal-area__rate personal-area__rate_type_active-${dataStory.mood}`}
                  type="button"
                  aria-label="rate"
                />
                <p
                  className={`personal-area__rating-label personal-area__rating-label_type_${dataStory.mood}`}
                >
                  {reaction}
                </p>
              </div>
              <select defaultValue="title" name="curator" className="personal-area__curator-select">
                <option value="title" disabled hidden className="personal-area__curator-option">Поделиться с куратором</option>
                <option value="Alexandra" className="personal-area__curator-option">Открыто Александре К.</option>
                <option value="Olga" className="personal-area__curator-option">Открыто Ольге К.</option>
                <option value="Ekaterina" className="personal-area__curator-option">Открыто Екатерине К.</option>
              </select>
              <div className="personal-area__action-elements">
                {/* <p className="personal-area__opened-info"> */}
                {/*  Открыто Александре К. */}
                {/* </p> */}
                <button
                  className="personal-area__button personal-area__button_action_edit-card"
                  onClick={handleEditClick}
                  type="button"
                >
                  Редактировать
                </button>
                <button
                  className="personal-area__button personal-area__button_action_delete-card"
                  type="button"
                  onClick={handleDelete}
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </article>
      )}
      {/* карточка встречи скрывается, форма с данными карточки отображается */}
      {isEdit && (
        <MeetingStoryForm
          onSubmit={handleSubmitEditStory}
          onDelete={handleCancelForm}
          values={dataStory}
        />
      )}
    </>
  );
}

MeetingStoryArticle.propTypes = {

  story: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    mood: PropTypes.string,
    shared: PropTypes.bool,
    image: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  // onEditSubmit: PropTypes.func.isRequired,
};
export default MeetingStoryArticle;
