import { Movie } from "../types";
import { MovieCard } from "./MovieCard";
import './MovieList.css';


export const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
