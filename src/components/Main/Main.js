import React from 'react';
import PropTypes from 'prop-types';
import MainLead from '../MainLead/MainLead';
import MainStory from '../MainStory/MainStory';
import MainMentor from '../MainMentor/MainMentor';
import MainAnnotation from '../MainAnnotation/MainAnnotation';
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

// TODO create wrapper component
function Main({ loggedIn }) {
  const [mainState, setMainState] = React.useState({});
  const [isDataReady, setIsDataReady] = React.useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = React.useState(false);
  const [isDescriptionPopupOpen, setIsDescriptionPopupOpen] = React.useState(false);
  const [isSuccessRegPopupOpen, setIsSuccessRegPopupOpen] = React.useState(false);

  React.useEffect(() => {
    api.getMain(localStorage.getItem('bbbs-access')).then((res) => {
      setMainState(res);
    })
      .then(() => setIsDataReady(true))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [setMainState]);

  function openConfirmationPopup() {
    setIsConfirmationPopupOpen(true);
  }
  function handleSuccessRegPopup() {
    setIsSuccessRegPopupOpen(true);
    openConfirmationPopup();
  }
  function handleDescription() {
    setIsDescriptionPopupOpen(true);
  }
  function handleBooking() {
    openConfirmationPopup();
  }

  function handleCancelBooking(calendar) {
    // some handle code for backend
    // eslint-disable-next-line no-console
    console.log(calendar);
  }

  function handleImmidiateBooking(calendar) {
    // eslint-disable-next-line no-console
    console.log(calendar);
    setIsSuccessRegPopupOpen(true);
  }
  function closeAllPopups() {
    setIsConfirmationPopupOpen(false);
    setIsDescriptionPopupOpen(false);
    setIsSuccessRegPopupOpen(false);
  }
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
                onBooking={handleBooking}
                onDescription={handleDescription}
                onCancel={handleCancelBooking}
              />
            ) : <MainLead />}
            <MainStory
              title={mainState.history?.title}
              imageUrl={mainState.history?.imageUrl}
            />
          </article>
        </section>

        <section className="main-section page__section">
          <article className="card-container card-container_type_main-article">
            <MainMentor
              title={mainState.place.title}
              name={mainState.place.name}
              link={mainState.place.link}
              imageUrl={mainState.place.imageUrl}
            />
            <MainAnnotation
              info={mainState.place.info}
              description={mainState.place.description}
            />
          </article>
        </section>

        <section className="main-section page__section">
          <MainArticle
            title={mainState.articles[0].title}
            color={mainState.articles[0].color}
          />
        </section>

        <section className="main-section page__section cards-grid cards-grid_content_small-cards">
          {mainState.movies.map((movie) => (
            <MainVideoPreview
              link={movie.link}
              key={movie.id}
              title={movie.title}
              imageUrl={movie.imageUrl}
              caption={movie.caption}
              info={movie.info}
              tags={movie.tags}
            />
          ))}
        </section>

        <section className="main-section page__section">
          <MainVideo
            title={mainState.video.title}
            info={mainState.video.info}
            link={mainState.video.link}
            imageUrl={mainState.video.imageUrl}
            duration={mainState.video.duration}
          />
        </section>

        <section className="main-section page__section">
          <article className="card-container card-container_type_iframe">
            <div className="card card_color_blue card_content_media">
              <iframe className="card__iframe" title="iframe" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=630&height=630&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" scrolling="no" allowFullScreen allow="clipboard-write; encrypted-media; picture-in-picture; web-share" />
            </div>
            <div className="main-questions">
              {mainState.questions.map((question) => (
                <MainQuestion
                  key={question.id}
                  title={question.title}
                  name={question.tags[0].name}
                />
              ))}
            </div>
          </article>
        </section>

        <section className="main-section page__section">
          <MainArticle
            title={mainState.articles[1].title}
            color={mainState.articles[1].color}
          />
        </section>
        <CalendarConfirmation
          isOpen={isConfirmationPopupOpen}
          handleSuccessRegClick={handleSuccessRegPopup}
          onClose={closeAllPopups}
          currentEvent={mainState.event}
        />
        <CalendarDescription
          isOpen={isDescriptionPopupOpen}
          onClose={closeAllPopups}
          currentEvent={mainState.event}
          onActionClick={handleImmidiateBooking}
        />
        <CalendarSuccessRegistration
          currentEvent={mainState.event}
          isOpen={isSuccessRegPopupOpen}
          handleCloseSuccessRegPopup={closeAllPopups}
          onClose={closeAllPopups}
        />
      </main>
    );
  }
  return (
    <Preloader />
  );
}
Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Main;
