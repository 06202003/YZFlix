import '../style/main.css';
import { useEffect, useState } from 'react';
import { getMovieList, searchMovie } from '../api';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
const Utama = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="card bg-dark border border-warning border-3">
          <div className="tools ">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card__content ">
            <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
            <div className="textBox text-white">
              <div className="Movie-title">{movie.title}</div>
              <div className="Movie-rate">Rate : {movie.vote_average}</div>
              <div className="Movie-date">Release Date : {movie.release_date}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  // console.log({ popularMovies: popularMovies });
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <div className="waw">
            <Hero />
          </div>
          <span id="search" className="space">
            asdasd
          </span>
          <div className="d-flex">
            <h1>Cari Tontonan</h1> <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <input className="Movie-search" name="movieSearch" placeholder="The Avengers" onChange={({ target }) => search(target.value)} />
          <div className="Movie-container">
            <PopularMovieList />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Utama;
