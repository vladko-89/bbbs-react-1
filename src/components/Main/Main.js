import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import MainLead from '../MainLead/MainLead';
import MainStory from '../MainStory/MainStory';
import MainMentor from '../MainMentor/MainMentor';
import MainArticle from '../MainArticle/MainArticle';
import MainVideoPreview from '../MainVideoPreview/MainVideoPreview';
import MainVideo from '../MainVideo/MainVideo';
import MainQuestion from '../MainQuestion/MainQuestion';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import CalendarDescription from '../CalendarDescription/CalendarDescription';
import CalendarConfirmation from '../CalendarConfirmation/CalendarConfirmation';
import CalendarSuccessRegistration from '../CalendarSuccessRegistration/CalendarSuccessRegistration';
import Preloader from '../Preloader/Preloader';
import api from '../../utils/Api';
import { cardsOnMain } from '../../utils/constants';
import './Main.scss';
import { getAccessToken } from '../../utils/utils';

function Main({
  loggedIn,
  activeRubrics,
  selectRubric,
  onBooking,
  onDescription,
  onCancel,
  onClose,
  isConfirmationPopupOpen,
  isDescriptionPopupOpen,
  isSuccessRegPopupOpen,
  handleSuccessRegPopup,
  handleImmidiateBooking,
  calendarData,
}) {
  const [mainState, setMainState] = React.useState({});
  const [isDataReady, setIsDataReady] = React.useState(false);

  React.useEffect(() => {
    api.getMain(getAccessToken()).then((res) => {
      console.log('main', res);
      setMainState(res);
      localStorage.setItem('mainState', JSON.stringify(res));
    })
      .then(() => setIsDataReady(true))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [calendarData]);

  // Обнуляем выставленные фильтры при монтировании компонента
  React.useEffect(() => {
    selectRubric('all', true);
  }, []);

  if (isDataReady) {
    return (
      <main className="main">
        <section className="lead page__section">
          <article className="card-container card-container_type_identical">
            {loggedIn ? (
              <CalendarEvent
                calendar={mainState.event}
                key={mainState.event.id}
                booked={mainState.event.booked}
                title={mainState.event.title}
                address={mainState.event.address}
                contact={mainState.event.contact}
                startAt={mainState.event.startAt}
                endAt={mainState.event.endAt}
                seats={mainState.event.seats}
                takenSeats={mainState.event.takenSeats}
                onBooking={onBooking}
                onDescription={onDescription}
                onCancel={onCancel}
                activeRubrics={activeRubrics}
                tags={[{
                  name: format(new Date(mainState.event.startAt), 'LLLL', { locale: ruLocale }),
                  slug: format(new Date(mainState.event.startAt), 'LLLL', { locale: ruLocale }),
                }]}
              />
            ) : <MainLead />}
            <MainStory
              title={mainState?.history?.title}
              imageUrl={mainState?.history?.imageUrl}
            />
          </article>
        </section>

        <MainMentor
          id={mainState?.place.id}
          chosen={mainState?.place.chosen}
          title={mainState?.place.title}
          address={mainState?.place.address}
          link={mainState?.place.link}
          imageUrl={mainState?.place.imageUrl}
          info={mainState?.place.info}
          description={mainState?.place.description}
        />

        <section className="main-section page__section">
          <MainArticle
            title={mainState?.articles[0]?.title}
            color={mainState?.articles[0]?.color}
          />
        </section>

        <section className="main-section page__section cards-grid cards-grid_content_small-cards">
          {mainState?.movies.slice(0, cardsOnMain).map((movie) => (
            <MainVideoPreview
              link={movie.link}
              key={movie.id}
              title={movie.title}
              imageUrl={movie.imageUrl}
              caption={movie.caption}
              info={movie.info}
              tags={movie.tags}
              activeRubrics={activeRubrics}
            />
          ))}
        </section>

        <section className="main-section page__section">
          <MainVideo
            title={mainState?.video.title}
            info={mainState?.video.info}
            link={mainState?.video.link}
            imageUrl={mainState?.video.imageUrl}
            duration={mainState?.video.duration}

          />
        </section>

        <section className="main-section page__section">
          <article className="card-container card-container_type_iframe">
            <div className="card card_color_blue card_content_media">
              <iframe className="card__iframe" title="iframe" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=630&height=630&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" scrolling="no" allowFullScreen allow="clipboard-write; encrypted-media; picture-in-picture; web-share" />
            </div>
            <div className="main-questions">
              {mainState?.questions.map((q) => (
                <MainQuestion
                  key={q.id}
                  question={q.question}
                  tag={q.tags}
                />
              ))}
            </div>
          </article>
        </section>

        <section className="main-section page__section">
          <MainArticle
            title={mainState?.articles[1]?.title}
            color={mainState?.articles[1]?.color}
          />
        </section>
        {loggedIn && (
        <>
          <CalendarConfirmation
            isOpen={isConfirmationPopupOpen}
            handleSuccessRegClick={handleSuccessRegPopup}
            onClose={onClose}
            currentEvent={mainState?.event}
          />
          <CalendarDescription
            isOpen={isDescriptionPopupOpen}
            onClose={onClose}
            currentEvent={mainState?.event}
            onActionClick={handleImmidiateBooking}
          />
          <CalendarSuccessRegistration
            currentEvent={mainState?.event}
            isOpen={isSuccessRegPopupOpen}
            handleCloseSuccessRegPopup={onClose}
            onClose={onClose}
            textPopupButton="Вернуться"
          />
        </>
        )}
      </main>
    );
  }
  return (
    <Preloader />
  );
}
Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
  onBooking: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDescription: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  handleImmidiateBooking: PropTypes.func.isRequired,
  handleSuccessRegPopup: PropTypes.func.isRequired,
  isConfirmationPopupOpen: PropTypes.bool.isRequired,
  isDescriptionPopupOpen: PropTypes.bool.isRequired,
  isSuccessRegPopupOpen: PropTypes.bool.isRequired,
  calendarData: PropTypes.arrayOf(PropTypes.shape({
    booked: PropTypes.bool,
    startAt: PropTypes.string,
    endAt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    seats: PropTypes.number,
    takenSeats: PropTypes.number,
    address: PropTypes.string,
    contact: PropTypes.string,
  })),
};

Main.defaultProps = {
  calendarData: PropTypes.arrayOf(PropTypes.shape({
    booked: false,
    startAt: '',
    endAt: '',
    title: '',
    description: '',
    seats: 0,
    takenSeats: 0,
    address: '',
    contact: '',
  })),
};
export default Main;
