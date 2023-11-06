import React, { useState, useEffect } from 'react';
import './pagination.css'
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

const baseURL: string = `https://api.themoviedb.org/3/search/tv?query=animation&include_adult=false&language=en-US`;

const MovieComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [movieData, setMovieData] = useState<MovieData | null>(null);

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

  useEffect(() => {
    getAllMovies(baseURL, currentPage).then((data) => displayResults(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(movieData);

  return (
    <div>
      {movieData && (
        <div>
          <ul className="card-container">
            {movieData.results.map((movie, index) => (
              <li className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
              </li>
            ))}
          </ul>
          <button onClick={previousPage}>Previous</button>
          <a className='currentPageNumber'>Showing page {movieData.page} / {movieData.total_pages}</a>
          <button onClick={nextPage}>Next</button>
        </div>
      )}
    </div>
  );
};

export default MovieComponent;