import axios from 'axios';

const mainUrl =  'https://api.themoviedb.org/3/';
const API_KEY = '343fc92fc78f017227b1826aa1a587b2';

class SearchService {
    async searchMovie(movie) {
        const searchUrl = `${mainUrl}search/movie?api_key=${API_KEY}&query=${movie}`;
        return axios.get(searchUrl).then(resp => resp.data);
    }
}

export default SearchService;