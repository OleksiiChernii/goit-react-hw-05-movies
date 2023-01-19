import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom"
import { searchMovie } from "tmdbAPI";
import { MovieList } from "./MovieList"
import MoviesSearch from "./MoviesSearch";

const MovieSearchPage = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('movie_search') ?? '';
    const location = useLocation();

    useEffect(() => {
        if(!query) {
            setSearchParams(prevSearchParams => prevSearchParams.delete('movie_search'));
            setMovies([]);
            return;
        }
        searchMovie(query).then(setMovies)
    }, [query, setSearchParams]);
    return (
        <>
            <MoviesSearch query={query}/>
            <MovieList movieList={movies} state={location}/>
        </>
    )
}

export default MovieSearchPage;