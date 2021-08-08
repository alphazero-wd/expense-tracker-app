import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
export const defaultImage =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movies, loading } = useGlobalContext();
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        const { Title, Year, imdbID: id, Poster } = movie;
        return (
          <Link className="movie" to={`/movie/${id}`} key={id}>
            <article>
              <img src={Poster === 'N/A' ? defaultImage : Poster} alt={Title} />
              <div className="movie-info">
                <h4 className="title">{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
