import { useFavorites } from "../context/FavoritesContext";
import { MovieList } from "../components/MovieList";

export const Dashboard = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      <h1>Meus Favoritos</h1>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p>Nenhum favorito ainda.</p>
      )}
    </div>
  );
};
