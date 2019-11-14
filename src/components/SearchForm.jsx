import React, { Component } from 'react';
import SearchService from '../services/SearchService';
import './SearchForm.css';
import MovieComponent from './MovieComponent';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { query: null, result: null };
        this.SearchService = new SearchService();
        this.updateQuery = this.updateQuery.bind(this);
        this.searchMovie = this.searchMovie.bind(this);
        this.key = 0;
    }

    updateQuery(event) {
        const newQuery = event.target.value;
        this.setState({ query: newQuery });
    }

    searchMovie() {
        const movieTitle = this.state.query;
        this.SearchService.searchMovie(movieTitle).then(response => this.setState({ result: response }));
    }

    renderMovies() {
        const results = this.state.result.results;
        return results.map(result => <MovieComponent movieInfo={result} key={this.key++} />);
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-start align-items-center">
                <h2 className="mb-5">Search for a movie using this amazing React App!!</h2>
                <div className="form-group d-flex">
                    <input type="text" placeholder="Search a Movie..."
                        onChange={this.updateQuery} className="mx-2 form-control input-search shadow-none" />
                    <button onClick={this.searchMovie}
                        className="btn btn-search btn-danger shadow-none">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                    {this.state.result === null ? null : this.renderMovies()}
                </div>
            </div>
        )
    }
}

export default SearchForm;
