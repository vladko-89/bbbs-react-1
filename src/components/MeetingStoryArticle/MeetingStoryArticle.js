import React from 'react';
import PropTypes from 'prop-types';
import MeetingStoryForm from '../MeetingStoryForm/MeetingStoryForm';
import { getAccessToken } from '../../utils/utils';
import api from '../../utils/Api';
// import img from '../../images/personal-area/lk.png';

function MeetingStoryArticle({
  story,
  onEdit,
  onDelete,
  onEditSubmit,
}) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [dataStory, setDataStory] = React.useState({});
  const [isOpenTo, setIsOpenTo] = React.useState(false);
  const [reaction, setReaction] = React.useState('');

  React.useEffect(() => {
    setDataStory({ ...story });
    setIsOpenTo(story.sendToCurator);
  }, []);

  const handleEditClick = (e) => {
    onEdit(dataStory);
    setIsEdit(true);
    e.target.closest('article').classList.add('hidden');
  };
  const handleCancelForm = () => {
    setIsEdit(false);
  };
  const handleSubmitEditStory = (data) => {
    // проверка какие поля изменились и только их отправлять на бэк
    const editedFildForRequest = { id: dataStory.id };
    const arrKey = Object.keys(data);
    console.log(arrKey);
    for (let i = 0; i < arrKey.length; i += 1) {
      if (arrKey[i] === 'smile') {
        editedFildForRequest.smile = data.smile === null ? dataStory.smile : data.smile;
      } else
      if (data[arrKey[i]] !== dataStory[arrKey[i]]) {
        editedFildForRequest[arrKey[i]] = data[arrKey[i]];
      } else { console.log(`No change in ${arrKey[i]}`); }
    }
    console.log(editedFildForRequest);
    onEditSubmit(editedFildForRequest)
      .then((res) => setDataStory({ ...res }))
      .catch((err) => console.log(err));

    setIsEdit(false);
  };

  const handleShareToClick = () => {
    api.shareMeetingStoryTo(getAccessToken(), dataStory)
      .then(() => {
        setIsOpenTo(true);
      })
      .catch((err) => console.log(err));
  };
  // даты
  const date = new Date(dataStory.date);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  // название картинки из строки
  const altImage = dataStory.image?.substring(dataStory.image.lastIndexOf('/') + 1, dataStory.image.lastIndexOf('.')) || '';

  // установка реакций
  // const setReaction = () => {
  //   switch (dataStory.smile) {
  //     case 'bad':
  //       return 'Бывает и лучше';
  //     case 'neutral':
  //       return 'Хорошо';
  //     case 'good':
  //       return 'Было классно';
  //     default:
  //       return '';
  //   }
  // };
  // const reaction = setReaction();

  const handleDelete = () => {
    const time = `${month}, ${year}`;
    onDelete(time, dataStory);
  };
  React.useEffect(() => {
    setReaction(() => {
      switch (dataStory.smile) {
        case 'bad':
          return 'Бывает и лучше';
        case 'neutral':
          return 'Хорошо';
        case 'good':
          return 'Было классно';
        default:
          return '';
      }
    });
  }, [dataStory]);
  return (
    <>
      {!isEdit && (
        <article className="card-container card-container_type_personal-area">
          <div className="card card_content_media">
            <img src={dataStory.image} alt={altImage} className="personal-area__photo" />
          </div>
          <div className="personal-area__card personal-area__date-container">
            <div className="personal-area__text-wrap">
              <h2 className="section-title personal-area__card-title">
                {dataStory.place}
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
                  className={`personal-area__rate personal-area__rate_type_active-${dataStory.smile}`}
                  type="button"
                  aria-label="rate"
                />
                <p
                  className={`personal-area__rating-label personal-area__rating-label_type_${dataStory.smile}`}
                >
                  {reaction}
                </p>
              </div>
              <button
                className="personal-area__curator-select"
                onClick={handleShareToClick}
                type="button"
                disabled={!!isOpenTo}
              >
                {isOpenTo ? `Открыто ${dataStory.name}` : 'Поделиться с куратором'}
              </button>
              <div className="personal-area__action-elements">
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
    place: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    smile: PropTypes.string,
    image: PropTypes.string,
    sendToCurator: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
};
export default MeetingStoryArticle;
