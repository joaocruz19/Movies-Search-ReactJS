import React, { useState, useEffect } from 'react';
import './styles.css';
import SearchService from "../../services/SearchService";
import MovieComponent from '../MovieComponent';
import Loading from '../Loading';

function SearchForm() {
    const [searchInput, setSearchInput] = useState("");
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const searchService = new SearchService();

    useEffect(() => {
        if (query) {
            searchMovie();
        }
    }, [query]);

    function searchMovie() {
        setIsLoading(true);
        setResult(null);
        searchService.searchMovie(query)
            .then(res => setResult(res.data))
            .then(() => setIsLoading(false));
    };

    function renderMovies() {
        if (result.success === false) {
            return (
                <div className="alert alert-danger" role="alert">
                    {result.status_message}
                </div>
            );
        };

        const { results } = result;
        return (
            <>
                <p className="align-self-start">
                    Showing {results.length} results for <strong>"{query}"</strong>
                </p>
                <div className="d-flex justify-content-around flex-wrap">
                    {
                        results.map(result =>
                            <MovieComponent movieInfo={result} key={result.id} />
                        )
                    }
                </div>
            </>
        );
    };

    return (
        <div className="d-flex flex-column justify-content-start align-items-center">
            <h2 className="mb-5">Search for a movie using this amazing React App!!</h2>
            <form className="form-group d-flex" onSubmit={e => {e.preventDefault(); setQuery(searchInput)}}>
                <input type="text" placeholder="Search a Movie..."
                    onChange={e => setSearchInput(e.target.value)} className="mx-2 form-control input-search shadow-none" />
                <input type="submit" value="&#xf002;" className="btn btn-search btn-danger shadow-none" />
            </form>
            {result && renderMovies()}
            {isLoading && <Loading />}
        </div>
    );
}

export default SearchForm;