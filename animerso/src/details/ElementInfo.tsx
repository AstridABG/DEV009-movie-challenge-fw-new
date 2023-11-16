// ElementDetails.tsx
import React from 'react';
import './ElementInfo.css'
interface ElementDetailsProps {
  movie: {
    name: string;
    poster_path: string;
    first_air_date: string;
    overview: string;
  };
  onClose: () => void;
}

const ElementDetails: React.FC<ElementDetailsProps> = ({ movie, onClose }) => {
  return (
    <section className='elementDetail modal-overlay'>
      <div className='individualInfo'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
        <p className="cardName">{movie.name}</p>
        <p className="launchDate">{movie.first_air_date}</p>
      </div>
      <div className='description'>
        <p className='resume'>{movie.overview}</p>
      </div>
      <button onClick={onClose}>Close</button>
    </section>
  );
};

export default ElementDetails;
