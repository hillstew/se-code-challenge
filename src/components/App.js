import React, { useEffect, useState, Fragment } from 'react';
import { Router, Link } from '@reach/router';
import Comic from './Comic';
import Search from './Search';
import '../styles/app.css';

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
      <nav className='appNav'>
        <Link to='/' className='latest'>
          Latest
        </Link>
        <Link to='/search' className='search'>
          Search
        </Link>
      </nav>
      <main>
        <Router>
          <Search path='/search' />
          {comic && <Comic path='/' comic={comic} type={true} />}
        </Router>
      </main>
    </Fragment>
  );
};

export default App;
