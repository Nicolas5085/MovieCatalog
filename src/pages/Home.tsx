import { useEffect, useState, useMemo } from "react";
import { Movie } from "../types";
import { getPopularMovies } from "../api/tmdb";
import { SearchBar } from "../components/SearchBar";
import { MovieList } from "../components/MovieList";


export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);

  const filtered = useMemo(() => {
  if (!movies) return []; 
  return movies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()));
}, [search, movies]);


  return (
    <div className="container">
      <h1>Filmes Populares</h1>
      <SearchBar onSearch={setSearch} />
      <MovieList movies={filtered} />
    </div>
  );
};
