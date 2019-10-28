import React from 'react';

const Comic = ({ comic, type }) => {
  return (
    <section>
      <p className='comicTitle'>{comic.title}</p>
      <img
        className={type ? 'latestImage' : 'searchImage'}
        src={comic.img}
        alt={comic.title}
        title={comic.alt}
      />
    </section>
  );
};

export default Comic;
