import React, { useEffect, useState } from "react";
import { getAnimeMovies } from "../services/api";
import './cards.css'

interface Movie {
    id: number;
    name: string;
    poster_path: string;
    year: string;
}

const Card: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getAnimeMovies();
            setMovies(data);
            
        };
        fetchMovies();
    });

    return (
        <main className="content">
            <div className="card-container">
            {movies.map((movie) => (
            <div className="card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
            <h3 className="cardTitle">{movie.name}</h3>
            </div>
             ))}
            </div>
        </main>
    )
}

export default Card;
