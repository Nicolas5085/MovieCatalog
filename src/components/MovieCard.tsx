import { Movie } from "../types";
import { useFavorites } from "../context/FavoritesContext";
import './MovieCard.css';


export const MovieCard = ({ movie }: { movie: Movie }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const isFav = favorites.some(f => f.id === movie.id);

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
      <h3>{movie.title}</h3>
      <button onClick={() => toggleFavorite(movie)}>
        {isFav ? "Remover" : "Favoritar"}
      </button>
    </div>
  );
};
