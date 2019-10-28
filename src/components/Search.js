import React, { Fragment, useState } from 'react';
import Comic from './Comic';

const Search = () => {
  const [searchComic, setComic] = useState(null);
  const [comicQuery, setComicQuery] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setComicQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchComic) setComic(null);
    const url = 'https://xkcd.now.sh/?comic=';
    fetch(url + comicQuery)
      .then(res => res.json())
      .then(data => {
        setComic(data);
      });
    setComicQuery('');
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className='searchForm'>
        <label htmlFor='comicQuery' className='searchInputLabel'>
          Enter a number between 1 - 2219
        </label>
        <div>
          <input
            value={comicQuery}
            onChange={handleChange}
            name='comicQuery'
            type='number'
            className='searchInput'
          />
          <button className='searchSubmit'>Search</button>
        </div>
      </form>
      {searchComic && <Comic comic={searchComic} />}
    </Fragment>
  );
};

export default Search;
