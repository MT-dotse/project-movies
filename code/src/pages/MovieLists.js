import React, { useEffect, useState } from 'react'; //import useEffect and useState
import { Link } from 'react-router-dom'; //import link
import styled from 'styled-components'; //import Styled component
import { Loading } from './Loading'; //import Loading component

import { API_URL } from './utils/Url'; //import Urls from the URL component

const MoviePoster = styled.img`
  width: 100%;
`;

export const MovieLists = () => {
  const [movies, setMovies] = useState([]); // a state property that collects all the movies
  const [loading, setLoading] = useState(false); // a state property that holds the loading state

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {/* Displaying data, mounting the styled components and the loading screen */}
      {loading && <Loading />}
      <section className="main-container">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className="image-container">
                <div className="overlay">
                  <div className="movie-title">
                    <h1>{movie.title}</h1>
                    <p>{movie.release_date}</p>
                  </div>
                </div>
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};
