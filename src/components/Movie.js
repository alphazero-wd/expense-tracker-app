import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { url } from '../context';
import { defaultImage } from './Movies';
const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchMovie = useCallback(async () => {
    const res = await fetch(`${url}&i=${id}`);
    const data = await res.json();
    setMovie(data);
    setLoading(false);
  }, [id]);
  useEffect(() => fetchMovie(), [id, fetchMovie]);
  if (loading) {
    return <div className="loading"></div>;
  }
  const { Title, Plot, Poster, Year } = movie;
  return (
    <section className="single-movie">
      <img src={Poster === 'N/A' ? defaultImage : Poster} alt={Title} />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot === 'N/A' ? 'No Description Available' : Plot}</p>
        <h4>{Year}</h4>
        <Link to="/" className="btn">
          Back To Movies
        </Link>
      </div>
    </section>
  );
};

export default Movie;
