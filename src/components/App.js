import React, { useEffect, useState, Fragment } from 'react';
import Comic from './Comic';

const App = () => {
  const [comic, setLatestComic] = useState(null);

  useEffect(() => {
    fetch('https://xkcd.now.sh/?comic=latest')
      .then(res => res.json())
      .then(data => {
        setLatestComic(data);
      });
  }, []);

  return (
    <Fragment>
      <nav className='appNav'></nav>
      <main>{comic && <Comic path='/' comic={comic} type={true} />}</main>
    </Fragment>
  );
};

export default App;
