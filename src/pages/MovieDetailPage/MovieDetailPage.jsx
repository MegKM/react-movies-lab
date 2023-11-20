import { useParams } from 'react-router-dom';
import './MovieDetailPage.css';

function MovieDetailPage({ movies }){
    const { movieName } = useParams();
    const filteredMovie = movies.filter(movie => movie.title === movieName)
    const imageSource = filteredMovie[0].posterPath
    const castMapped = filteredMovie[0].cast.map((actor, index) => (
        <p key={index}>{actor}</p>
    ))

    return (
        <div className="movie-detail-page">
            <h1>{movieName}</h1>
            <p>Released: {filteredMovie[0].releaseDate}</p>
            <img src={imageSource}></img>
            <div>
                <p>Cast:</p>
                {castMapped}
            </div>
        </div>
    )
}

export default MovieDetailPage;