import React from 'react';

function Search() {
  const [active, setActive] = React.useState(false);

  function handleSearch(evt) {
    evt.preventDefault();
    setActive(!active);
  }
  return (
    <form className="search" name="search-form">
      <button onClick={handleSearch} className="menu__button menu__button_type_search search__button" type="submit" aria-label="Поиск" title="Поиск" />
      <div className={`search__options menu__search-options ${active ? 'search__options_visible' : ''}`}>
        <input type="text" name="search" placeholder="Поиск" className="search__input paragraph" />
      </div>
    </form>
  );
}

export default Search;
