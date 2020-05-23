import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

class SearchService {
    async searchMovie(movie) {
        const searchUrl = `${baseUrl}search/movie?api_key=${API_KEY}&query=${movie}`;
        return axios.get(searchUrl)
            .then(resp => resp)
            .catch(err => err.response);
    }

    async getMovie(id) {
        const getUrl = `${baseUrl}movie/${id}?api_key=${API_KEY}`;
        return axios.get(getUrl).then(resp => resp.data);
    }
}

export default SearchService;
