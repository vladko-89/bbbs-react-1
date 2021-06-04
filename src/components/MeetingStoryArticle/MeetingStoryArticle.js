import React from 'react';
import PropTypes from 'prop-types';
import MeetingStoryForm from '../MeetingStoryForm/MeetingStoryForm';
import img from '../../images/personal-area/lk.png';

function MeetingStoryArticle({
  story,
  onDelete,
  onSubmit,
}) {
  const [isEdit, setIsEdit] = React.useState(false);
  const handleEditClick = (e) => {
    setIsEdit(true);
    e.target.closest('article').classList.add('hidden');
  };
  const handleCanselEdit = () => {

  }

  const date = new Date(story.date);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <>
      <article className="card-container card-container_type_personal-area">
        <div className="card card_content_media">
          <img src={img} alt="Катя" className="personal-area__photo" />
        </div>
        <div className="card personal-area__card personal-area__date-container">
          <div className="personal-area__text-wrap">
            <h2 className="section-title personal-area__card-title">{story.title}</h2>
            <p className="paragraph">
              {story.description}
            </p>
          </div>
          <div className="personal-area__card-date">
            <p className="personal-area__card-weekday">{`${month}, ${year}`}</p>
            <p className="personal-area__card-day">{day}</p>
          </div>
          <div className="personal-area__actions">
            <div className="personal-area__rating">
              <button
                className="personal-area__rate personal-area__rate_type_active-good"
                type="button"
                aria-label="rate"
              />
              <p
                className="caption personal-area__rating-label personal-area__rating-label_type_good"
              >
                Было
                классно
              </p>
            </div>

            <div className="personal-area__action-elements">
              <p className="caption personal-area__opened-info">Открыто Александре К.</p>
              <button
                className="caption personal-area__button personal-area__button_action_edit-card"
                onClick={handleEditClick}
                type="button"
              >
                Редактировать
              </button>
              <button
                className="caption personal-area__button personal-area__button_action_delete-card"
                type="button"
                onClick={onDelete}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </article>
      {isEdit && (
      <MeetingStoryForm
        onSubmit={onSubmit}
        onDelete={onDelete}
        values={story}
      />
      )}
    </>
  );
}

MeetingStoryArticle.propTypes = {
  story: PropTypes.objectOf(PropTypes.string, PropTypes.number, PropTypes.bool)
    .isRequired,

  onDelete: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default MeetingStoryArticle;
