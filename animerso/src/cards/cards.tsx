import React, { useEffect, useState } from "react";
import { getAnimeMovies } from "../services/api";
import './cards.css'

interface Movie {
    id: number;
    name: string;
    poster_path: string;
    first_air_date: string;
}

const Card: React.FC = () => {
    let [movies, setMovies] = useState<Movie[]>([]);
    console.log(movies);
    function filterYear(date: any) {
        return date.split('-')[0];
    }

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getAnimeMovies();
            movies=data.results;
            console.log('Esto se obtuvo dentro de fetchMovies',data);
            setMovies(data.results);
            
        };
        
        fetchMovies();
    }, []);
    
    const renderMovies = () => {
        const movieCards: JSX.Element[] = [];

        for (let i = 0; i < movies.length; i++) {
            const movie = movies[i];
            movieCards.push(
                <div className="card" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
                    <p className="cardTitle">{movie.name}</p>
                    <p>Year({filterYear(movie.first_air_date)})</p>
                </div>
            );
        }

        return movieCards;
    };

    return (
        <main className="content">
            <div className="card-container">
                {renderMovies()}
            </div>
        </main>
    )

}

export default Card;
