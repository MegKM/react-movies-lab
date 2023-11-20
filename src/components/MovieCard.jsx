import './MovieCard.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieDetailPage from '../pages/MovieDetailPage/MovieDetailPage';

function MovieCard({ movies }){
    console.log(typeof movies)
    let navigateToMovie = useNavigate();
    const routeChange = (path) => {
        navigateToMovie(path)
    }

    const output = movies.map((movie) => {
        const posterPath = `url(${movie.posterPath})`;

        return (
            <>
                <div onClick={() => routeChange(`/movies/${movie.title}`)}
                    className="movie-tiles" 
                    style={{
                    backgroundImage: posterPath,
                    backgroundSize: 'cover'
                }}>
                    <div className="movie-name">
                        <div>{movie.title}</div>
                        <div>{movie.releaseDate}</div>
                    </div>
                </div>
            </>
        )
    })
    console.log(typeof output)
    return (
        <>
            {output}
        </>
    )
}

export default MovieCard