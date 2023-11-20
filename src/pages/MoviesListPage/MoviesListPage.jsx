import MovieCard from '../../components/MovieCard';

function MoviesListPage({ movies }){

    return (
        <>
            <h1>Movies</h1>
            <div className="movie-container">
                <MovieCard movies={movies} />
            </div>
        </>
    )
}

export default MoviesListPage;