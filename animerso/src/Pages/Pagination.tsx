import React, { useState, useEffect } from 'react';
import ElementDetails from '../details/ElementInfo';
import './pagination.css';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmMzZWY0ZTE4MTExZGVhMTMzMWVhOTkyYjhhZWM3ZCIsInN1YiI6IjY1Mjk3MWM0MGNiMzM1MTZmNjNkZDI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vDzwUPszdyMSM8LCFli85hDCUtBSzeCH81sPc2S_dHs'
  }
};
interface MovieData {
  page: number;
  results: any[]; // Define la estructura de tus datos de películas
  total_pages: number;
  total_results: number;
}

const baseURL: string = 'https://api.themoviedb.org/3/discover/tv?with_genres=16&language=en-US';

const MovieComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);

  const getAllMovies = async (url: string, page: number): Promise<MovieData | null> => {
    try {
      const response = await fetch(`${url}&page=${page}`, options);
      const data: MovieData = await response.json();
      console.log('hizo click y obtuvo', data);
      return data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      return null;
    }
  };

  const displayResults = (data: MovieData | null) => {
    if (data) {
      setMovieData(data);
    } else {
      console.log("No se pudieron obtener los datos para la página solicitada.");
    }
  };

  const openDetails = (movie: any) => {
    setSelectedMovie(movie);
  };
  const closeDetails = () => {
    setSelectedMovie(null);
  };

  const nextPage = async () => {
    setCurrentPage(currentPage + 1);
    const data = await getAllMovies(baseURL, currentPage + 1);
    displayResults(data);
    if (!data) {
      setCurrentPage(currentPage);
    }
  };

  const previousPage = async () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const data = await getAllMovies(baseURL, currentPage - 1);
      displayResults(data);
      if (!data) {
        setCurrentPage(currentPage);
      }
    } else {
      console.log("Ya estás en la primera página.");
    }
  };
  
  function launchYear(date: string): string {
    let year: string = date.split('-')[0];
    return year;
  }

  useEffect(() => {
    getAllMovies(baseURL, currentPage).then((data) => displayResults(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(movieData);

  return (
    <main>
      {movieData && (
        <div className='content'>
          <ul className="card-container">
            {movieData.results
            .filter((movie) => movie.poster_path)
            .map((movie, index) => (
              <li className="card" key={index} title={movie.name} onClick={() => openDetails(movie)}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <p className="cardName">{movie.name}</p>
                <p className="launchDate">{`(${launchYear(movie.first_air_date)})`}</p>
              </li>
            ))}
          </ul>
          {selectedMovie && (
            <ElementDetails movie={selectedMovie} onClose={closeDetails} />
          )}
          <div className='pagination'>
          <button onClick={previousPage} className='previousPage'>Back</button>
          <a className='currentPageNumber'>Page:  {movieData.page} / {movieData.total_pages}</a>
          <button onClick={nextPage} className='nextPage'>Next</button>
          </div>
        </div>
        
      )}
    </main>
  );
};

export default MovieComponent;